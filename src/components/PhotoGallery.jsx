import { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import './PhotoGallery.css';
import PhotoModal from './PhotoModal';
import { photoData } from '../data/photoData';

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photos] = useState(photoData);

  // Masonry breakpoints
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 2,
    500: 1
  };

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };


  return (
    <section className="section photo-gallery">
      <div className="container">
        <h2 className="section-title">Photo Gallery</h2>

        {/* Photos Masonry Grid */}
        <div className="all-photos-section">
          <div className="gallery-masonry-container">
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="gallery-masonry"
              columnClassName="gallery-masonry-column"
            >
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className="gallery-item"
                  onClick={() => openModal(photo)}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik01MCA1MEwxNTAgMTUwTTUwIDE1MEwxNTAgNTAiIHN0cm9rZT0iI0NDQyIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5IiBmb250LXNpemU9IjEyIj5QSE9UTzwvdGV4dD4KPC9zdmc+';
                    }}
                  />
                  <div className="gallery-overlay">
                    <span className="gallery-title">{photo.title}</span>
                  </div>
                </div>
              ))}
            </Masonry>
          </div>
        </div>
        

      </div>
      
      {selectedPhoto && (
        <PhotoModal 
          photo={selectedPhoto} 
          onClose={closeModal} 
        />
      )}
    </section>
  );
};

export default PhotoGallery;