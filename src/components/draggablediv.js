import React, { useState } from "react";
import "../styles/global.css";

const About = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: -266, y: -128 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const offsetX = e.clientX - position.x;
    const offsetY = e.clientY - position.y;
    setDragOffset({ x: offsetX, y: offsetY });

    // Add event listeners to `document` for global mouse handling
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    setPosition({
      x: e.clientX - dragOffset.x,
      y: e.clientY - dragOffset.y,
    });
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);

      // Remove global event listeners when dragging stops
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleOpen = () => {
    setIsVisible(true);
  };

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", position: "relative"
    }}>
      <div
        onClick={handleOpen}
        style={{
          position: "relative",
          background: "transparent",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          zIndex: 500,
          padding: 50,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="aboutme logo" viewBox="0 0 640 512">
          <path d="M128 32C92.7 32 64 60.7 64 96l0 256 64 0 0-256 384 0 0 256 64 0 0-256c0-35.3-28.7-64-64-64L128 32zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480l486.4 0c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2L19.2 384z" />
        </svg>
      </div>

      {isVisible && (
        <div
          className="fillings"
          style={{
            top: position.y,
            left: position.x,
          }}
        >
          <div
            className={`draggable ${isDragging ? "dragging" : ""}`}
            onMouseDown={handleMouseDown}
          >
            <button
              onClick={handleClose}
              style={{
                position: "absolute",
                top: 5,
                right: 5,
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                cursor: "pointer",
                color: "#7f8781",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="minix logox"
                viewBox="0 0 384 512"
                style={{ width: "20px", height: "20px" }}
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
            <p>about</p>
           </div>
           <div className="content">
             <div className="header">
              <h1>Dennis Fernando<span> 王炮森</span></h1>
              <p>Concept based web developer and a Game developer</p>
              <p>Former apprentice at <a href="https://id.linkedin.com/company/att-group-indonesia" target="_blank">ATT Group</a></p>
             </div> 
           </div>
          </div>
      )}
    </div>
  );
};

export default About;
