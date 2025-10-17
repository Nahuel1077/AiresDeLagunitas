import Image from "next/image";
import Carousel from "./components/Carousel";
import Activities from "./components/Activities";
import GridImages from "./components/GridImages";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex flex-col items-center justify-center w-full bg-gray-100">
        <Image
        src="/img/hero2.jpg"
        alt="portada"
        width={2000}
        height={2000}
        className="sm:w-full sm:h-[90vh] object-contain sm:object-cover object-top brightness-50"
        />
        <div className="absolute flex flex-col gap-4 sm:gap-[3rem] text-white items-center justify-center sm:text-3xl">
          <h1 className="sm:text-6xl text-shadow-lg text-center">Escapada a Villa General Belgrano</h1>
          <p className="sm:text-3xl text-shadow-lg">Animate a respirar el aire de las sierras</p>
        </div>
        <div className="sm:absolute sm:bottom-[300px] relative z-10 items-center justify-center sm:text-3xl pt-1.5 sm:p-0">
          <Link href="#"><button className="button">Ver tarifas</button></Link>
        </div>
      </div>
      <div className="w-full text-justify sm:text-center p-3 sm:p-20 bg-gray-100">
        <p className="text-lg sm:text-2xl">Vení a disfrutar de una estadía tranquila, en un pueblo serrano con estilo centroeuropeo</p>
        <p className="text-lg sm:text-xl">Un lugar excelente para desconectar y disfrutar</p>
        <p className="sm:text-xl">¡No te vas a arrepentir!</p>
      </div>
      <GridImages/>
      <Activities/>
    </div>
  );
}
