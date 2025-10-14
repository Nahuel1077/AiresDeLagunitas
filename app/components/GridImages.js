import Image from "next/image"

export default function GridImages(){

    return(
        <section className="flex flex-col items-center sm:pb-4">
            <h3 className="text-4xl p-8 sm:p-20">Nuestras cabañas</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:gap-20 gap-6">
                <div className="card w-full h-[200px] sm:w-[400px] sm:h-[302px]">
                    <Image
                    src="/img/carousel-patio.jpeg"
                    alt="portada"
                    width={500}
                    height={500}
                    className="cardImage w-full h-[200px] sm:w-[400px] sm:h-[300px]"
                    />
                </div>
                <div className="card w-full h-[200px] sm:w-[400px] sm:h-[302px]">
                    <Image
                    src="/img/carousel-quincho.jpeg"
                    alt="portada"
                    width={500}
                    height={500}
                    className="cardImage w-full h-[200px] sm:w-[400px] sm:h-[300px]"
                    />
                </div>
                <div className="card w-full h-[200px] sm:w-[400px] sm:h-[302px]">
                    <Image
                    src="/img/carousel-quincho2.jpeg"
                    alt="portada"
                    width={500}
                    height={500}
                    className="cardImage w-full h-[200px] sm:w-[400px] sm:h-[300px]"
                    />
                </div>
                <div className="card w-full h-[200px] sm:w-[400px] sm:h-[302px]">
                    <Image
                    src="/img/carousel-pileta.jpeg"
                    alt="portada"
                    width={500}
                    height={500}
                    className="cardImage w-full h-[200px] sm:w-[400px] sm:h-[300px]"
                    />
                </div>
                <div className="card w-full h-[200px] sm:w-[400px] sm:h-[302px]">
                    <Image
                    src="/img/carousel-pileta2.jpeg"
                    alt="portada"
                    width={500}
                    height={500}
                    className="cardImage w-full h-[200px] sm:w-[400px] sm:h-[300px]"
                    />
                </div>
                <div className="card w-full h-[200px] sm:w-[400px] sm:h-[302px]">
                    <Image
                    src="/img/carousel-pileta3.jpeg"
                    alt="portada"
                    width={500}
                    height={500}
                    className="cardImage w-full h-[200px] sm:w-[400px] sm:h-[300px]"
                    />
                </div>
                <div className="card w-full h-[200px] sm:w-[400px] sm:h-[302px]">
                    <Image
                    src="/img/carousel-rio.jpeg"
                    alt="portada"
                    width={500}
                    height={500}
                    className="cardImage w-full h-[200px] sm:w-[400px] sm:h-[300px]"
                    />
                </div>
                <div className="card w-full h-[200px] sm:w-[400px] sm:h-[302px]">
                    <Image
                    src="/img/carousel-rio2.jpeg"
                    alt="portada"
                    width={500}
                    height={500}
                    className="cardImage w-full h-[200px] sm:w-[400px] sm:h-[300px]"
                    />
                </div>
            </div>
        </section>
    )
}