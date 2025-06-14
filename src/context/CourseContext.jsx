// Import React's context and state management tools
import React, { createContext, useState } from 'react';

// Create a new context for managing course category filters
export const CourseContext = createContext();

// Context provider component to wrap parts of the app that need access to course filtering
const CourseProvider = ({ children }) => {
  // State to keep track of the selected category filter (default is "All")
  const [category, setCategory] = useState('All');

  return (
    // Provide the category state and its updater function to any child component
    <CourseContext.Provider value={{ category, setCategory }}>
      {children} {/* Render child components that will consume this context */}
    </CourseContext.Provider>
  );
};

// Export the provider so it can be used to wrap the app
export default CourseProvider;
