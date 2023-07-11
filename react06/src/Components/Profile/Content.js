import React, { useState, useEffect } from 'react';
import './Content.css';

function Content(props) {
  
  const user = props.user;
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered]);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <div
        className={`container ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <div className="images">
          <img className="picture" src={user.image} alt="User" />
        </div>
        <div className="content">
          <p style={{ fontWeight: 'bold',marginBottom:10 }} className="description">{user.title}</p>
          <p className='description'>{user.description}</p>
          <p style={{ fontWeight: 'bold',marginTop:10 }} className="description">${user.price}</p>
        </div>
      </div>
      {isHovered && (
        <p
          className="rating"
          style={{ top: mousePosition.y + 10, left: mousePosition.x + 10 }}
        >
          Rating:{user.rating.rate}
        </p>
      )}
    </div>
  );
}

export default Content;
