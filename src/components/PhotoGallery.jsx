import { useState, useEffect } from 'react';
import './PhotoGallery.css';
import PhotoModal from './PhotoModal';
import { loadImageWithMetadata } from '../utils/exifUtils';
import { photoData } from '../data/photoData';

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load photos with metadata on component mount
  useEffect(() => {
    const loadPhotosWithMetadata = async () => {
      setLoading(true);
      const photosWithMetadata = [];
      
      for (const photoInfo of photoData) {
        try {
          const { metadata } = await loadImageWithMetadata(photoInfo.src);
          photosWithMetadata.push({
            ...photoInfo,
            metadata
          });
        } catch (error) {
          console.warn(`Could not load metadata for ${photoInfo.src}:`, error);
          // Add photo with default metadata if EXIF fails
          photosWithMetadata.push({
            ...photoInfo,
            metadata: {
              iso: "Unknown",
              aperture: "Unknown",
              shutterSpeed: "Unknown", 
              camera: "Nikon ZF"
            }
          });
        }
      }
      
      setPhotos(photosWithMetadata);
      setLoading(false);
    };

    loadPhotosWithMetadata();
  }, []);

  const favoritePhotos = photos.filter(photo => photo.isFavorite);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const nextCarouselPhoto = () => {
    setCurrentCarouselIndex((prev) => 
      prev === favoritePhotos.length - 1 ? 0 : prev + 1
    );
  };

  const prevCarouselPhoto = () => {
    setCurrentCarouselIndex((prev) => 
      prev === 0 ? favoritePhotos.length - 1 : prev - 1
    );
  };

  if (loading) {
    return (
      <section className="section photo-gallery">
        <div className="container">
          <h2 className="section-title">Photo Gallery</h2>
          <div className="loading-state">
            <p>Loading photos and extracting metadata...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section photo-gallery">
      <div className="container">
        <h2 className="section-title">Photo Gallery</h2>
        
        {/* Favorites Carousel */}
        {favoritePhotos.length > 0 && (
          <div className="favorites-section">
            <h3 className="favorites-title">My Favorites</h3>
            <div className="carousel-container">
              <button 
                className="carousel-btn carousel-btn-prev" 
                onClick={prevCarouselPhoto}
                disabled={favoritePhotos.length <= 1}
              >
                &#8249;
              </button>
              <div className="carousel-wrapper">
                <div 
                  className="carousel-track"
                  style={{ transform: `translateX(-${currentCarouselIndex * 100}%)` }}
                >
                  {favoritePhotos.map((photo, index) => (
                    <div 
                      key={photo.id} 
                      className="carousel-slide"
                      onClick={() => openModal(photo)}
                    >
                      <img 
                        src={photo.src} 
                        alt={photo.title}
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik01MCA1MEwxNTAgMTUwTTUwIDE1MEwxNTAgNTAiIHN0cm9rZT0iI0NDQyIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5IiBmb250LXNpemU9IjEyIj5QSE9UTzwvdGV4dD4KPC9zdmc+';
                        }}
                      />
                      <div className="carousel-overlay">
                        <span className="carousel-title">{photo.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button 
                className="carousel-btn carousel-btn-next" 
                onClick={nextCarouselPhoto}
                disabled={favoritePhotos.length <= 1}
              >
                &#8250;
              </button>
            </div>
            <div className="carousel-dots">
              {favoritePhotos.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentCarouselIndex ? 'active' : ''}`}
                  onClick={() => setCurrentCarouselIndex(index)}
                />
              ))}
            </div>
          </div>
        )}

        {/* All Photos Grid */}
        <div className="all-photos-section">
          <h3 className="gallery-subtitle">All Photos</h3>
          <div className="gallery-grid">
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
                  {photo.isFavorite && <span className="favorite-badge">★</span>}
                </div>
              </div>
            ))}
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