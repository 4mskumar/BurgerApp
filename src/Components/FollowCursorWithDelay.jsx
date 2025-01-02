import React, { useState, useEffect } from "react";

const FollowCursorWithDelay = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [delayedPosition, setDelayedPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const delayFactor = 0.05; // Adjust this value to control the delay

    const moveWithDelay = () => {
      setDelayedPosition((prevPosition) => ({
        x: prevPosition.x + (cursorPosition.x - prevPosition.x) * delayFactor,
        y: prevPosition.y + (cursorPosition.y - prevPosition.y) * delayFactor,
      }));
    };

    const intervalId = setInterval(moveWithDelay, 10); // Update every 10ms for smooth transition
    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [cursorPosition]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const imageSize = 40; // Half the width and height of the image (20px radius)
    
    // Ensure the image stays within the div boundaries
    const constrainedX = Math.min(Math.max(x, imageSize), rect.width - imageSize);
    const constrainedY = Math.min(Math.max(y, imageSize), rect.height - imageSize);

    setCursorPosition({ x: constrainedX, y: constrainedY });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="relative w-[40rem] h-[40rem] rounded-lg border-2 border-gray-500 overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <img
          src="src/assets/images/burger.png"
          className="w-[40rem] h-[40rem] opacity-75 rounded-full absolute pointer-events-none"
          style={{
            transform: `translate(${delayedPosition.x - 20}px, ${delayedPosition.y - 20}px)`,
            transition: "transform 0.1s linear",
          }}
          alt="Following cursor"
        />
      </div>
    </div>
  );
};

export default FollowCursorWithDelay;
