// Import core React and the useContext hook for working with context
import React, { useContext } from 'react';
// Import the CourseContext to access selected category and update method
import { CourseContext } from '../context/CourseContext';
// Import icons for styling and UX
import { Filter as FilterIcon, ChevronDown } from 'lucide-react';
// Import CSS specific to the filter component
import '../styles/Filter.css';

const Filter = () => {
  // Get the current category and setter function from context
  const { category, setCategory } = useContext(CourseContext);

  return (
    <div className="filter-container">
      {/* Label section with a filter icon */}
      <div className="filter-label">
        <FilterIcon size={20} />
        <span>Filter by Category</span>
      </div>

      {/* Wrapper for dropdown and icon */}
      <div className="filter-select-wrapper">
        {/* Dropdown menu for selecting course category */}
        <select 
          className="filter-select"
          value={category} // Binds to context state
          onChange={(e) => setCategory(e.target.value)} // Updates context when changed
        >
          <option value="All">All Categories</option>
          <option value="Web">Web Development</option>
          <option value="Data Science">Data Science</option>
          <option value="AI">Artificial Intelligence</option>
          <option value="Mobile">Mobile Development</option>
          <option value="DevOps">DevOps</option>
          <option value="Security">Cybersecurity</option>
        </select>

        {/* Decorative dropdown arrow icon */}
        <ChevronDown className="filter-select-icon" size={16} />
      </div>
    </div>
  );
};

// Export the Filter component so it can be used in your course explorer
export default Filter;
