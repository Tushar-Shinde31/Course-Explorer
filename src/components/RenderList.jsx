// Import core React (not strictly required for function components since React 17+, but fine to include)
import React from 'react';

// Reusable list rendering component
// Props:
// - items: an array of data objects (e.g. courses)
// - renderItem: a function that returns a JSX element for each item
const RenderList = ({ items, renderItem }) => {
  return (
    // Wrapper div styled as a responsive grid layout
    <div
      style={{
        display: 'grid',                          // Use CSS Grid for layout
        gap: '15px',                              // Space between grid items
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' 
        // Dynamic number of columns based on container width
        // Each item will be at least 250px wide, and grow if space allows
      }}
    >
      {/* Render each item using the provided render function */}
      {items.map(renderItem)}
    </div>
  );
};

// Export the component to use in other parts of the app
export default RenderList;
