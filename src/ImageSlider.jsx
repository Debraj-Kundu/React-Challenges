import React, { useEffect, useState } from "react";

const URL = "https://www.reddit.com/r/aww/top/.json?t=all";

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    const res = await fetch(URL);
    const data = await res.json();
    setImages(
      data.data.children
        .filter((item) => item.data.url_overridden_by_dest.includes(".jpg"))
        .map((item) => item.data.url_overridden_by_dest)
    );
    setActiveImageIndex(0);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      nextImage();
    }, 3 * 1000);
    return () => {
      clearTimeout(id);
    };
  }, [activeImageIndex]);

  function nextImage() {
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  function prevImage() {
    setActiveImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }

  return (
    <div className="App">
      {loading ? (
        "Loading..."
      ) : (
        <>
          <button onClick={prevImage}>PREV</button>

          {images.length > 0 && (
            <img src={images[activeImageIndex]} alt="IMAGE" />
          )}

          <button onClick={nextImage} className="right">
            NEXT
          </button>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
