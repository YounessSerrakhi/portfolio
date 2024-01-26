import React, { useState, useEffect } from 'react';

const ImageModal = ({ images, title, description, tools, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleKeyboardEvents = (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        break;
      case 'ArrowRight':
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        break;
      case 'Escape':
        onClose();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyboardEvents);
    return () => {
      window.removeEventListener('keydown', handleKeyboardEvents);
    };
  }, []);

  return (
    <div className="modal fade show" style={{ display: 'block' }} onClick={onClose}>
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <img src={images[currentImageIndex]} alt={`Project Image ${currentImageIndex + 1}`} className="img-fluid" style={{ maxHeight: '80vh', width: '100%', objectFit: 'contain' }} />
            <div className="project-details">
              <h2>{title}</h2>
              <p>{description}</p>
              <h6>tools:</h6>
                <p>{tools}</p>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={prevImage}>
              Previous
            </button>
            <button type="button" className="btn btn-secondary" onClick={nextImage}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
