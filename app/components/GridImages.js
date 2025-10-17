import Image from "next/image"

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
    ]

    return(
        <section className="flex flex-col items-center sm:pb-4">
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
                    />
                </div>
            ))}
            </div>
        </section>
    )
}