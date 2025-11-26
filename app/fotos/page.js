import GridImages from "../components/GridImages";
import Image from "next/image";
import Link from "next/link";

export default function Fotos(){

    return(
        <section className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center justify-center w-full bg-gray-100">
                <div className="flex flex-row items-center w-full">
                    <Image
                    src="/img/carousel-quincho2.jpeg"
                    alt="portada"
                    width={2000}
                    height={2000}
                    className="w-full object-cover brightness-50"
                    />
                </div>
                <div className="absolute flex flex-col gap-4 sm:gap-[3rem] text-white items-center justify-center sm:text-3xl">
                <h1 className="sm:text-6xl text-xl text-shadow-lg text-center">¡Cabañas a estrenar!</h1>
                <p className="sm:text-3xl text-xl text-shadow-lg">A pocos minutos del centro</p>
            </div>
            <div className="xl:absolute sm:top-[80vh] xl:block contents relative z-10 items-center justify-center sm:text-3xl pt-1.5 sm:p-0">
                <Link href="#"><button className="button">Reservar</button></Link>
            </div>
            </div>
             <GridImages/>
        </section>
    )
}