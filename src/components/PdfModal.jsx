import { useEffect } from 'react';
import './PdfModal.css';

const PdfModal = ({ imageUrl, pdfUrl, onClose }) => {
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
      <div className="modal-content pdf-modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        
        <div className="pdf-container">
          <img 
            src={imageUrl}
            alt="Resume"
            className="pdf-viewer"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI2MCIgdmlld0JveD0iMCAwIDIwMCAyNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjYwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik01MCA2MEwxNTAgMTYwTTUwIDE2MEwxNTAgNjAiIHN0cm9rZT0iI0NDQyIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5IiBmb250LXNpemU9IjEyIj5SRVNVTUU8L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5IiBmb250LXNpemU9IjEwIj5JTUFHRTwvdGV4dD4KPC9zdmc+';
            }}
          />
        </div>
        
        <div className="pdf-info">
          <h3 className="pdf-title">Resume</h3>
          <div className="pdf-actions">
            <a 
              href={pdfUrl} 
              download="Chinmay_Bansal_Resume.pdf"
              className="pdf-download-btn"
            >
              Download Resume
            </a>
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="pdf-open-btn"
            >
              Open PDF in New Tab
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfModal;