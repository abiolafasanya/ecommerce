import React from "react";

export default function Hero() {
  const imageUrl =
    "https://images.pexels.com/photos/7691098/pexels-photo-7691098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const otherImages = [
    "https://images.pexels.com/photos/6167863/pexels-photo-6167863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4612163/pexels-photo-4612163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <section className="image-container">
      <div className="image-group-1">
        <img src={imageUrl} alt="main image" />
      </div>
      <div className="image-group-2">
        {otherImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="main image"
            className="image-style"
          />
        ))}
      </div>
    </section>
  );
}
