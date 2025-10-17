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
                    width={280}
                    height={280}
                    alt="logo"
                    src="/img/logo.svg"
                    className="absolute left-0 sm:relative sm:w-[280] w-[150px]"
                />
            </Link>
            <ul className={`${menuOpen ? "flex flex-col gap-6 text-white items-end right-0 bg-[#000000cf] w-full backdrop-blur-md sm:block absolute top-0 p-[100px_30px_10px_0px] text-md" : "sm:flex flex-row gap-14 text-white items-center text-2xl hidden" }`}>
                <li className={`${menuOpen ? "text-lg" : "text-2xl" }`}><Link href="tarifas">Tarifas</Link></li>
                <li className={`${menuOpen ? "text-lg" : "text-2xl" }`}>Reservas</li>
                <li className={`${menuOpen ? "text-lg" : "text-2xl" }`}><Link href="#contact">Contacto</Link></li>
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