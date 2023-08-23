import "./Projectstyle.css"

import React, { useState } from 'react';
import Modal from '../components/Modal';

function Projects() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleHover = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div onMouseEnter={handleHover} onMouseLeave={handleClose}>
      <p>Hover me to open the modal</p>
      <Modal isOpen={isModalOpen} handleClose={handleClose} />
    </div>
  );
}

export default Projects;
