import React, { useState, useEffect, useCallback } from 'react';

const ImageModal = ({ images, title, description, tools, onClose, initialIndex, onNextProject, onPrevProject }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialIndex);

  const nextImage = useCallback((e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback((e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const handleKeyboardEvents = useCallback((e) => {
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
  }, [prevImage, nextImage, onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyboardEvents);
    return () => {
      window.removeEventListener('keydown', handleKeyboardEvents);
    };
  }, [handleKeyboardEvents]);

  return (
    <div className="modal fade show" style={{ display: 'block' }} onClick={onClose}>
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
            <div className="image-container" style={{ height: '50vh', position: 'relative' }}>
              <img 
                src={images[currentImageIndex]} 
                alt={title} // Updated alt text
                className="img-fluid" 
                style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} 
              />
              <button className="btn btn-light btn-prev" onClick={prevImage}>&lt;</button>
              <button className="btn btn-light btn-next" onClick={nextImage}>&gt;</button>
            </div>
            <div className="project-details mt-4">
              <h4>Description:</h4>
              <p>{description}</p>
              <h4>Tools:</h4>
              <p>{tools}</p>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onPrevProject}>
              Previous Project
            </button>
            <button type="button" className="btn btn-secondary" onClick={onNextProject}>
              Next Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
