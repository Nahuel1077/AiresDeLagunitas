'use client'
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Banner(){

    const [visible, setVisible] = useState(true);

    return(
        <aside className={`fixed bottom-0 w-full sm:w-[50vw] justify-self-center z-20 h-[70px] bg-black text-white border-black text-center text-xl animate__animated animate__slideInUp ${visible? "absolute" : "hidden"}`}>
            <h1>¡Promo de estreno!🔥 Tiempo limitado⏳</h1>
            <Link href="#">Click aquí</Link>
            <button onClick={() => {setVisible(!visible)}} className="absolute bottom-[55px] left-[95vw]  sm:bottom-10 sm:left-[48vw]">✖</button>
        </aside>
    )
}