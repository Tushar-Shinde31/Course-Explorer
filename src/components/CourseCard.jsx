// Import core React library
import React from 'react';
// Import icon components for visuals
import { BookOpen, Tag, ArrowRight } from 'lucide-react';
// Import specific styles for this component
import '../styles/CourseCard.css';

// Functional component that takes a 'course' prop and displays its info
const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      {/* Header section with an icon and course title */}
      <div className="course-header">
        <BookOpen size={24} className="course-icon" />
        <h3>{course.title}</h3>
      </div>

      {/* Display the course category with a tag icon */}
      <div className="course-category">
        <Tag size={16} />
        <span>{course.category}</span>
      </div>

      {/* Description of the course */}
      <p className="course-description">{course.description}</p>

      {/* Button to learn more – could be used to link to course details */}
      <button className="course-button">
        Learn More
        <ArrowRight size={16} />
      </button>
    </div>
  );
};

// Export the component so it can be reused throughout the app
export default CourseCard;
