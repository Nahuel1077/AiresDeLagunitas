'use client'
import { useState } from "react";
import Image from "next/image";


const carouselImages = [
    {id:1, src:"/img/carousel-patio.jpeg"}, 
    {id:2, src:"/img/carousel-quincho.jpeg"}, 
    {id:2, src:"/img/carousel-quincho2.jpeg"}, 
    {id:3, src:"/img/carousel-pileta.jpeg"},
    {id:4, src:"/img/carousel-pileta2.jpeg"},
    {id:5, src:"/img/carousel-pileta3.jpeg"},
    {id:5, src:"/img/carousel-rio.jpeg"},
    {id:5, src:"/img/carousel-rio2.jpeg"}];

export default function Carousel(){
    
    const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setImageIndex((prevIndex) =>
      (prevIndex - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <div className="flex flex-col items-center w-full h-[500px] relative overflow-hidden">
      <Image
        width={2000}
        height={2000}
        src={carouselImages[imageIndex].src}
        alt={`Imagen ${imageIndex + 1}`}
        className="w-full h-full object-contain transition-all duration-500"
      />
      
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 px-4 py-2 rounded hover:bg-white shadow"
      >
        ◀
      </button>

      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 px-4 py-2 rounded hover:bg-white shadow"
      >
        ▶
      </button>
    </div>
  );
}