'use client'
import Image from "next/image"
import { useState } from "react";

export default function GridImages(){

    const portada = [
        {id:1, src:"/img/carousel-patio.jpeg", alt:"patio"},
        {id:2, src:"/img/carousel-quincho.jpeg", alt:"quincho"},
        {id:3, src:"/img/carousel-quincho2.jpeg", alt:"quincho"},
        {id:4, src:"/img/carousel-pileta.jpeg", alt:"pileta"},
        {id:5, src:"/img/carousel-pileta2.jpeg", alt:"pileta"},
        {id:6, src:"/img/carousel-pileta3.jpeg", alt:"pileta"},
        {id:7, src:"/img/carousel-rio.jpeg", alt:"río"},
        {id:8, src:"/img/carousel-rio2.jpeg", alt:"río"},
        {id:9, src:"/img/cristo-grande.jpg", alt:"Cristo Grande"},
        {id:10, src:"/img/cerro-virgen.jpg", alt:"Cerro Virgen"},
        {id:11, src:"/img/champaqui.jpg", alt:"Champaqui"},
        {id:12, src:"/img/dique-los-molinos.jpg", alt:"Dique Los Molinos"},
        {id:13, src:"/img/oktoberfest.png", alt:"Oktoberfest"},
        {id:14, src:"/img/rio-los-reartes.jpg", alt:"Río Los Reartes"},
        {id:15, src:"/img/vgb.jpg", alt:"VGB"},
        {id:16, src:"/img/vgb-centro.jpg", alt:"VGB centro"},
    ];

    const [openImg, setOpenImg] = useState(null);

    return(
        <section className="flex flex-col items-center sm:pb-4 pl-2 pr-2 pb-4">
            <h3 className="h3 text-3xl font-semibold p-8 sm:p-20">Nuestras cabañas</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:gap-20 gap-6">
                {portada.map((p) => (
                    <div key={p.id} className="card w-full h-[200px] sm:w-[400px] sm:h-[302px]">
                        <Image
                        src={p.src}
                        alt={p.alt}
                        width={500}
                        height={500}
                        className="cardImage w-full h-[200px] sm:w-[400px] sm:h-[300px]"
                        onClick={() => setOpenImg(p.src)}
                        />
                </div>
            ))}
            </div>
            {openImg && (<div className={`${openImg? "gap-6 sm:p-30 top-0 z-20 fixed overflow-hidden w-[100vw] h-[100vh] bg-[#000000db] flex sm:flex-row flex-col-reverse items-center justify-center" : "hidden"}`}>
                {
                    <Image
                    src={openImg}
                    alt="Imagen ampliada"
                    width={1429}
                    height={1039}
                    className="object-contain w-full sm:w-full sm:h-[100vh]"
                    />
                }
                <button onClick={() => {setOpenImg(null)}} className="w-[30px] h-[30px] invert self-start">✖</button>
            </div>)}
        </section>
    )
}