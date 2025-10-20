'use client';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import 'animate.css';


export default function Nav(){

    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 300) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
      
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        
        <nav className={`flex flex-row gap-6 justify-between h-[90px] sm:h-[160px] sm:justify-around fixed z-20 w-full ${isScrolled ? "bg-[#000000a2] backdrop-blur-md shadow-lg animate__animated animate__pulse" : "bg-transparent"}`} >
        
            <Link href="/" className="z-10">
                <Image
                    width={200}
                    height={200}
                    alt="logo"
                    src="/img/logo.png"
                    className="absolute left-0 sm:relative sm:w-[150] w-[100px]"
                />
            </Link>
            <ul className={`${menuOpen ? "flex flex-col gap-6 text-white items-end right-0 bg-[#000000cf] w-full backdrop-blur-md sm:block absolute top-0 p-[100px_30px_10px_0px] text-md" : "sm:flex flex-row gap-14 text-white items-center text-2xl hidden" }`}>
                <li className={`${menuOpen ? "text-lg" : "text-2xl" }`}><Link href="tarifas" className="group hover:text-[#c9c9c9] flex flex-row items-end justify-center">Tarifas<span className="hidden sm:block absolute scale-0 bg-transparent w-[65px] h-[2px] transition-transform duration-300 ease-in-out group-hover:scale-100 group-hover:bg-[#275717]"></span></Link></li>
                <li className={`${menuOpen ? "text-lg" : "text-2xl" }`}><Link href="#" className="group hover:text-[#c9c9c9] flex flex-row items-end justify-center">Reservas<span className="hidden sm:block absolute scale-0 bg-transparent w-[85px] h-[2px] transition-transform duration-300 ease-in-out group-hover:scale-100 group-hover:bg-[#275717]"></span></Link></li>
                <li className={`${menuOpen ? "text-lg" : "text-2xl" }`}><Link href="/fotos" className="group hover:text-[#c9c9c9] flex flex-row items-end justify-center">Fotos<span className="hidden sm:block absolute scale-0 bg-transparent w-[55px] h-[2px] transition-transform duration-300 ease-in-out group-hover:scale-100 group-hover:bg-[#275717]"></span></Link></li>
                <li className={`${menuOpen ? "text-lg" : "text-2xl" }`}><Link href="#contact" className="group hover:text-[#c9c9c9] flex flex-row items-end justify-center">Contacto<span className="hidden sm:block absolute scale-0 bg-transparent w-[75px] h-[2px] transition-transform duration-300 ease-in-out group-hover:scale-100 group-hover:bg-[#275717]"></span></Link></li>
            </ul>
            <button className="sm:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
                <Image
                src="/img/menu.svg"
                alt="menu logo"
                width={30}
                height={30}
                className="invert"
                />
            </button>  
            
        </nav>
    )
}