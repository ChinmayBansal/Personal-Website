import EXIF from 'exif-js';

export const extractMetadata = (imageElement) => {
  return new Promise((resolve) => {
    EXIF.getData(imageElement, function() {
      const iso = EXIF.getTag(this, "ISOSpeedRatings") || "Unknown";
      const aperture = EXIF.getTag(this, "FNumber");
      const shutterSpeed = EXIF.getTag(this, "ExposureTime");
      
      // Format aperture
      let formattedAperture = "Unknown";
      if (aperture) {
        formattedAperture = `f/${aperture}`;
      }
      
      // Format shutter speed
      let formattedShutterSpeed = "Unknown";
      if (shutterSpeed) {
        if (shutterSpeed >= 1) {
          formattedShutterSpeed = `${shutterSpeed}s`;
        } else {
          formattedShutterSpeed = `1/${Math.round(1/shutterSpeed)}s`;
        }
      }
      
      resolve({
        iso: iso.toString(),
        aperture: formattedAperture,
        shutterSpeed: formattedShutterSpeed,
        camera: "Nikon ZF"
      });
    });
  });
};

export const loadImageWithMetadata = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    
    img.onload = async () => {
      try {
        const metadata = await extractMetadata(img);
        resolve({
          element: img,
          metadata
        });
      } catch (error) {
        console.warn('Could not extract metadata from image:', src);
        resolve({
          element: img,
          metadata: {
            iso: "Unknown",
            aperture: "Unknown", 
            shutterSpeed: "Unknown",
            camera: "Nikon ZF"
          }
        });
      }
    };
    
    img.onerror = () => {
      reject(new Error(`Failed to load image: ${src}`));
    };
    
    img.src = src;
  });
};