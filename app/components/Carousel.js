'use client'
import { useState } from "react";
import Image from "next/image";


const carouselImages = [
        {id:1, src:"/img/carousel-patio.jpeg", alt:"patio"},
        {id:2, src:"/img/carousel-quincho.jpeg", alt:"quincho"},
        {id:3, src:"/img/carousel-quincho2.jpeg", alt:"quincho"},
        {id:4, src:"/img/carousel-pileta.jpeg", alt:"pileta"},
        {id:5, src:"/img/carousel-pileta2.jpeg", alt:"pileta"},
        {id:6, src:"/img/carousel-pileta3.jpeg", alt:"pileta"},
        {id:7, src:"/img/carousel-rio.jpeg", alt:"río"},
        {id:8, src:"/img/carousel-rio2.jpeg", alt:"río"},
        {id:9, src:"/img/cristo-grande.jpg", alt:"Cristo Grande"},
    ]

export default function Carousel(){
    
    const [imageIndex, setImageIndex] = useState(0);
    const [animation, setAnimation] = useState("animate__fadeIn");

  const nextImage = () => {
    setAnimation("animate__fadeOutLeft");  
    setTimeout(() => {
      setImageIndex((prev) => (prev + 1) % carouselImages.length);
      setAnimation("animate__fadeInRight");
    }, 300);
  };

  const prevImage = () => {
    setAnimation("animate__fadeOutRight");
    setTimeout(() => {
      setImageIndex(
        (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
      );
      setAnimation("animate__fadeInLeft");
    }, 300);
  };



  return (
    <section className="flex flex-col items-center sm:pb-4 gap-4 p-6 sm:p-16">
      <h3 className="h3 text-3xl font-semibold">Nuestras cabañas</h3>
      <p className="text-center">Todo lo que necesitas para una <span className="highlight">excelente</span> estadía</p>
      <div className="flex flex-col items-center w-full h-[300px] sm:h-[700px] relative overflow-hidden">
        <Image
          width={1450}
          height={700}
          src={carouselImages[imageIndex].src}
          alt={`Imagen ${imageIndex + 1}`}
          className={`w-full h-[300px] sm:w-[70vw] sm:h-[700px] animate__animated ${animation} object-cover sm:object-scale-down rounded-[2%]`}
          id={`Imagen ${imageIndex + 1}`}
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
    </section>
  );
}