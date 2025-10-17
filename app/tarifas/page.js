import Carousel from "../components/Carousel";
import Image from "next/image";
import Link from "next/link";

export default function Tarifas() {

    return(
        <section>
            <div className="flex flex-col items-center justify-center w-full bg-gray-100">
                <Image
                src="/img/hero1.jpg"
                alt="portada"
                width={2000}
                height={2000}
                className="sm:w-full sm:h-[90vh] object-contain sm:object-cover object-center brightness-50"
                />
                <div className="absolute flex flex-col gap-4 sm:gap-[3rem] text-white items-center justify-center sm:text-3xl">
                <h1 className="sm:text-6xl text-xl text-shadow-lg text-center">¡Cabañas a estrenar!</h1>
                <p className="sm:text-3xl text-xl text-shadow-lg">A pocos minutos del centro</p>
            </div>
            <div className="sm:absolute sm:bottom-[300px] relative z-10 items-center justify-center sm:text-3xl pt-1.5 sm:p-0">
                <Link href="#"><button className="button">Reservar</button></Link>
            </div>
            </div>
            <Carousel/>
            <div>
                aca va información sobre precios
            </div>

        </section>
    )
}