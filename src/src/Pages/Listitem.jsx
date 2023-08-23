// ListItem.js
import React, { useState } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const ListItem = ({ children, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`list-item ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isHovered && (
        <div className="info-button">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <AiOutlineInfoCircle size={15} />
          </a>
        </div>
      )}
    </div>
  );
};

export default ListItem;
