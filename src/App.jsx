// Import core React functionality
import React from 'react';

// Import custom UI components
import Filter from './components/Filter';           // Dropdown to select course category
import CourseList from './components/CourseList';   // List of courses based on current filter

// Import context provider for sharing selected category across components
import CourseProvider from './context/CourseContext';

// Import global styles (e.g., resets, typography, layout)
import './styles/global.css';

function App() {
  return (
    // Wrap app with CourseProvider so Filter and CourseList can share category state
    <CourseProvider>
      <div className="container">
        {/* Page title */}
        <h1>Course Catalog</h1>

        {/* Filter UI: lets user choose a course category */}
        <Filter />

        {/* Displays the list of courses filtered by selected category */}
        <CourseList />
      </div>
    </CourseProvider>
  );
}

// Export App as the root component for use in main.jsx or index.js
export default App;
