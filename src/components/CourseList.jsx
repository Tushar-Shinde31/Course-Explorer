// React core and utility hooks
import React, { useState, useEffect, useContext, useMemo, Suspense } from 'react';

// Import the CourseContext to read the selected category filter
import { CourseContext } from '../context/CourseContext';

// HOC that adds a visual hover effect to course cards
import withHoverEffect from './withHoverEffect';

// Component used to dynamically render a list (likely map under the hood)
import RenderList from './RenderList';

// Lazy load the CourseCard component for performance optimization
const LazyCourseCard = React.lazy(() => import('./CourseCard'));

// Enhance CourseCard with hover styling using the HOC
const EnhancedCourseCard = withHoverEffect(LazyCourseCard);

const CourseList = () => {
  // Grab the selected course category from context (e.g., "AI", "Web")
  const { category } = useContext(CourseContext);

  // Local state to store all fetched courses and loading/error flags
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the course data on component mount
  useEffect(() => {
    fetch('/courses.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch courses');
        return res.json();
      })
      .then((data) => {
        setCourses(data);     // Store course data in state
        setLoading(false);    // Stop the loading spinner
      })
      .catch((err) => {
        setError(err.message); // Capture and display any errors
        setLoading(false);
      });
  }, []);

  // Filter courses when the category changes
  const filteredCourses = useMemo(() => {
    if (category === 'All') return courses;
    return courses.filter(course => course.category === category);
  }, [courses, category]);

  // Show a loading message while fetching
  if (loading) return <p>Loading courses...</p>;

  // Show error message if fetching failed
  if (error) return <p>Error: {error}</p>;

  return (
    // Wrap lazy-loaded CourseCard components in Suspense fallback
    <Suspense fallback={<p>Loading cards...</p>}>
      <RenderList
        items={filteredCourses}
        renderItem={(course) => (
          <EnhancedCourseCard key={course.id} course={course} />
        )}
      />
    </Suspense>
  );
};

// Export the component for use in your route or page
export default CourseList;
