// Import React to define components
import React from 'react';

// Higher-order component that adds a subtle hover scale effect
// Takes any component (WrappedComponent) and returns a new one with hover behavior
const withHoverEffect = (WrappedComponent) => {
  // Inner functional component that wraps the given component
  return function WithHover(props) {
    return (
      <div
        style={{
          transition: 'transform 0.2s', // Smooth scaling transition
          cursor: 'pointer'            // Change cursor to pointer on hover
        }}
        // When mouse enters, scale up the wrapper slightly
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
        // When mouse leaves, reset the scale to normal
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        {/* Render the wrapped component with all original props passed through */}
        <WrappedComponent {...props} />
      </div>
    );
  }
};

// Export the HOC to be used around any component that needs hover interaction
export default withHoverEffect;
