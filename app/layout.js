import { Rubik, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import 'animate.css';

const rubik = Rubik({
  weight: ['400', '600', '900'],
  subsets: ["latin","italic"],
});

export const metadata = {
  title: "Aires de Lagunitas",
  description: "Alquila cabañas familiares en Villa General Belgrano, Córdoba. Tranquilidad, naturaleza y vistas a las sierras. Precios baratos. Reserva online.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <meta name="author" content="Nahuel Ezequiel Henríquez"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body
        className={`${rubik.className} antialiased overflow-x-hidden`}
      >
        <Nav/>
        {children}
        <Banner/>
        <footer className={`${rubik.className} flex flex-col bg-white`}>
          <div className="flex flex-col w-full justify-center">
            <Image
            width={1000}
            height={1000}
            alt="villa general belgrano"
            src="/img/vgb.jpg"
            className="self-center brightness-50 sm:h-[534px] w-full object-contain sm:object-cover"
            />
            <div className="absolute items-center sm:h-[534px] w-full sm:gap-8 gap-4 flex flex-col justify-center p-[20px] sm:p-0">
              <p className="sm:text-5xl text-center text-white">¡Vení a conocer Villa General Belgrano!</p>
              <p className="sm:text-xl text-center text-white">Un pueblo de sabores serranos y centroeuropeos, con estilo alpino y actividades al aire libre.</p>
            </div>
          </div>
          <Contact/>
          <section className="flex flex-col p-6 sm:flex-row-reverse gap-6 justify-around items-center bg-black">
          <ul className="flex flex-col sm:flex-row gap-2 text-white items-center text-md">
            <li>Tarifas</li>
            <li>Reservas</li>
            <li>Contacto</li>
          </ul>
          <Image
          width={280}
          height={280}
          alt="logo"
          src="/img/logo.svg"
          className="sm:w-[280] w-[150px]"
          />
        </section>
        </footer>
      </body>
    </html>
  );
}
