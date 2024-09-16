import React, { useState, useEffect } from 'react';

const ImageModal = ({ images, title, description, tools, onClose, initialIndex }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialIndex);

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
        prevImage(e);
        break;
      case 'ArrowRight':
        nextImage(e);
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
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
            <div className="image-container" style={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img 
                src={images[currentImageIndex]} 
                alt={`Project Image ${currentImageIndex + 1}`} 
                className="img-fluid" 
                style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} 
              />
            </div>
            <div className="project-details mt-4">
              <h4>Description:</h4>
              <p>{description}</p>
              <h4>Tools:</h4>
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