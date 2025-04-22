import React, { useEffect, useState } from 'react'

function Slider({url, limit}) {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  async function fetchImages(url, limit) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      
      const imageUrls = data.map(image => image.thumbnailUrl);
      setImages(imageUrls);
      console.log(imageUrls);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }
  useEffect(() => {
    if( url )
      fetchImages(url, limit);
    console.log(images);
  }, [url])
  
  return (
    <>
    <div className="slider-container">
      <div className="slider">
        <img src={images[currentImage]} alt="Slider" />
      </div>
    </div>
    </>
  )
}

export default Slider