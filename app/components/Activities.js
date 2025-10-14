import Image from "next/image"

export default function Activities(){

    const actividades = [
        {id:1, image:"/img/dique-los-molinos.jpg", title:"Dique Los Molinos", description:"Kayak, pesca, camping, parrillas de uso común, cabalgatas", distance:"20km"},
        {id:2, image:"/img/cerro-virgen.jpg", title:"Hiking", description:"Diferentes circuitos: Cerro de la Virgen, Pozo verde, Cerro Mirador, Peñón", distance:"5km"},
        {id:3, image:"/img/vgb-centro.jpg", title:"Centro turístico", description:"Restaurantes, artesanías, eventos, juegos, ¡y mucho más!", distance:"4km"},
        {id:4, image:"/img/rio-los-reartes.jpg", title:"Río Los Reartes", description:"Un lugar para disfrutar al aire libre y entrar en contacto con la naturaleza", distance:"6km"},
    ]

    return(
        <section className="flex flex-col items-center text-center p-6 sm:p-16 gap-6 w-full bg-gray-100">
            <h3 className="h3">Amenities y actividades</h3>
            <p>Todo lo que necesitas para una excelente estadía</p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-10">
                {actividades.map((a) => (
                    <div key={a.id} className="card w-[300px] h-auto flex flex-col items-center">
                        <Image
                            src={a.image}
                            width={300}
                            height={300}
                            alt="Imagen"
                            className="cardImage w-[300px] h-[200px]"
                        />
                        <h5 className="text-lg p-2 font-bold">{a.title}</h5>
                        <p className="p-2">{a.description}</p>
                        Distancia: {a.distance}
                    </div>
                    ))}
            </div>
        </section>
    )
}