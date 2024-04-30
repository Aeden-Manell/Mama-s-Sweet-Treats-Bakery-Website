import React from 'react';
import "./styles/imagegrid.css"
import { useEffect } from "react";

const ImageGrid = () => {
  useEffect(() => {
    const photos = Array.from(document.getElementsByClassName("photo"));
    const photoWrapper = document.getElementById("photoWrapper");

    let count = 0;
    photos.forEach((photo) => {
      count++;
      if (count % 2) {
        photo.classList.add("even");
      }
    });

    photoWrapper.addEventListener("scroll", () => {
      photos.forEach(checkPosition);
    });

    function checkPosition(photo) {
      if (photo.getBoundingClientRect().right - 4 <= 0) {
        photo.remove();
        photoWrapper.append(photo);
        photoWrapper.scrollLeft = 0;
        return;
      }
    }

    function infiniteScroll() {
      photoWrapper.scrollLeft++;
      requestAnimationFrame(infiniteScroll);
    }

    infiniteScroll();
  }, []);

  return (
    <div className="photo-wrapper" id="photoWrapper">
      <div className="photo">
        <img src="https://images.pexels.com/photos/3806983/pexels-photo-3806983.jpeg?auto=compress&cs=tinysrgb&w=600" />
      </div>
      <div className="photo">
        <img src="https://images.pexels.com/photos/3983671/pexels-photo-3983671.jpeg?auto=compress&cs=tinysrgb&w=600" />
      </div>
      <div className="photo">
       <img src="https://images.pexels.com/photos/3218467/pexels-photo-3218467.jpeg?auto=compress&cs=tinysrgb&w=600t" />
      </div>
      <div className="photo">
        <img src="https://images.pexels.com/photos/1995010/pexels-photo-1995010.jpeg?auto=compress&cs=tinysrgb&w=600" />
      </div>
      <div className="photo">
        <img src="https://images.pexels.com/photos/9095/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" />
      </div>
      <div className="photo">
        <img src="https://images.pexels.com/photos/19859271/pexels-photo-19859271/free-photo-of-choice-of-pastries-at-bakery.jpeg?auto=compress&cs=tinysrgb&w=600t" />
      </div>
    </div>
  );
};

export default ImageGrid;