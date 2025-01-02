import React, { useState, useEffect } from 'react';

constFollowCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [elementPosition, setElementPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const delay = 0.2; // Smaller value for smoother, faster movement
    let animationFrameId;

    const followMouse = () => {
      setElementPosition((prevPosition) => {
        const deltaX = mousePosition.x - prevPosition.x;
        const deltaY = mousePosition.y - prevPosition.y;

        return {
          x: prevPosition.x + deltaX * delay,
          y: prevPosition.y + deltaY * delay,
        };
      });

      animationFrameId = requestAnimationFrame(followMouse);
    };

    animationFrameId = requestAnimationFrame(followMouse); // Start the animation loop

    // Cleanup function to stop the animation when the component is unmounted
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [mousePosition]);

  return (
    <div
      className="fixed w-5 h-5 z-[100] bg-yellow-200 rounded-full shadow-lg pointer-events-none"
      style={{
        left: `${elementPosition.x}px`,
        top: `${elementPosition.y}px`,
        transform: `translate(-50%, -50%)`, // Center the element around the cursor
      }}
    ></div>
  );
};

export default FollowCursor;
