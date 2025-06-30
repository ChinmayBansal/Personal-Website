import { useEffect } from 'react';
import './PhotoModal.css';

const PhotoModal = ({ photo, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        
        <div className="modal-image-container">
          <img 
            src={photo.src} 
            alt={photo.title}
            className="modal-image"
          />
        </div>
        
        <div className="modal-info">
          <h3 className="modal-title">{photo.title}</h3>
        
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;