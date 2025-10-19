'use client'
import { useState } from "react";
import Image from "next/image"

export default function Activities(){

    const actividades = [
        {id:1, image:"/img/vgb-centro.jpg", title:"Centro turístico", description:"Restaurantes, artesanías, eventos, juegos, ¡y mucho más!", distance:"4km"},
        {id:2, image:"/img/cerro-virgen.jpg", title:"Hiking", description:"Circuitos: Cerro de la Virgen, Pozo verde, Cerro Mirador, Peñón", distance:"5km"},
        {id:3, image:"/img/rio-los-reartes.jpg", title:"Río Los Reartes", description:"Un lugar para disfrutar al aire libre y entrar en contacto con la naturaleza", distance:"6km"},
        {id:4, image:"/img/dique-los-molinos.jpg", title:"Dique Los Molinos", description:"Kayak, pesca, camping, parrillas de uso común, cabalgatas", distance:"20km"},
        {id:5, image:"/img/rumipal.jpg", title:"Villa Rumipal", description:"Un pueblo especial para disfrutar el verano en familia", distance:"27km"},
        {id:6, image:"/img/la-cumbrecita.jpg", title:"La Cumbrecita", description:"Un mágico pueblo entre sierras estilo europeo, vecino nuestro", distance:"30km"},
        {id:7, image:"/img/champaqui.jpg", title:"Sierras Grandes", description:"Visibles desde nuestras cabañas, las sierras que caracterizan Córdoba", distance:"75km"},
        {id:8, image:"/img/oktoberfest.png", title:"Oktoberfest", description:"¡La famosa fiesta de la cerveza, no te la podes perder!", distance:"0km"},
    ]

    const [cardIndex, setCardIndex] = useState(0);
    const [animation, setAnimation] = useState("animate__fadeIn");

    const nextCard = () => {
        setAnimation("animate__fadeOutLeft");
        setTimeout(() => {
            setCardIndex((prev) => (prev + 1) % actividades.length);
            setAnimation("animate__fadeInRight");
        }, 300);
    };

    const prevCard = () => {
        setAnimation("animate_fadeOutRight");
        setTimeout(() => {
            setCardIndex((prev) => (prev - 1 + actividades.length) % actividades.length);
            setAnimation("animate__fadeInLeft");
        }, 300)
    }

    return(
        <section className="flex flex-col items-center text-center p-6 sm:p-16 gap-6 w-full bg-gray-100">
            <h3 className="h3 text-3xl font-semibold">Amenities y actividades</h3>
            <p>Descubrí qué hay para hacer, <span className="highlight">¡no te lo podés perder!</span></p>
            <div className="md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-10 hidden">
                {actividades.map((a) => (
                    <div key={a.id} className="card w-[300px] h-auto flex flex-col items-center">
                        <Image
                            src={a.image}
                            width={300}
                            height={300}
                            alt="Imagen"
                            className="cardImage w-[300px] h-[200px]"
                        />
                        <h5 className="text-lg p-2 font-semibold">{a.title}</h5>
                        <p className="p-2">{a.description}</p>
                        Distancia: {a.distance}
                    </div>
                    ))}
            </div>
            <div className="flex flex-col items-center w-full p-1 relative overflow-hidden md:hidden">
                    <div className={`card w-[300px] h-auto flex flex-col items-center animate__animated ${animation}`}>
                        <Image
                            src={actividades[cardIndex].image}
                            width={300}
                            height={300}
                            alt="Imagen"
                            className="cardImage w-[300px] h-[200px]"
                        />
                        <h5 className="text-lg p-2 font-semibold">{actividades[cardIndex].title}</h5>
                        <p className="p-2">{actividades[cardIndex].description}</p>
                        Distancia: {actividades[cardIndex].distance}
                    </div>
                    
                    <button
                      onClick={prevCard}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 px-4 py-2 rounded hover:bg-white shadow"
                    >
                      ◀
                    </button>
            
                    <button
                      onClick={nextCard}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 px-4 py-2 rounded hover:bg-white shadow"
                    >
                      ▶
                    </button>
                  </div>
        </section>
    )
}