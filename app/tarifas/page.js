import Carousel from "../components/Carousel";
import Image from "next/image";
import Link from "next/link";

export default function Tarifas() {

    const tarifas = [
        {id:1, title:"semana", price:1550000, discount:10,},
        {id:2, title:"quincena", price:2500000, discount:15,},
    ];

    return(
        <section className="flex flex-col items-center gap-4 bg-[#f3f4f6]">
            <div className="flex flex-col items-center justify-center w-full bg-gray-100">
                <div className="flex flex-row items-center w-full">
                    <Image
                    src="/img/hero-dique.jpg"
                    alt="portada"
                    width={2000}
                    height={2000}
                    className="hidden lg:block w-1/3 h-[90vh] object-contain sm:object-cover object-center brightness-50"
                    />
                    <Image
                    src="/img/hero1.jpg"
                    alt="portada"
                    width={2000}
                    height={2000}
                    className="w-full lg:w-1/3 sm:h-[90vh] object-cover object-center brightness-50 lg:border-l-6 lg:border-r-6 lg:border-black border-0"
                    />
                    <Image
                    src="/img/hero-cerveza.jpg"
                    alt="portada"
                    width={2000}
                    height={2000}
                    className="hidden lg:block w-1/3 h-[90vh] object-contain sm:object-cover object-center brightness-50"
                    />
                </div>
                <div className="absolute flex flex-col gap-4 sm:gap-[3rem] text-white items-center justify-center sm:text-3xl">
                <h1 className="sm:text-6xl text-xl text-shadow-lg text-center">¡Cabañas a estrenar!</h1>
                <p className="sm:text-3xl text-xl text-shadow-lg">A pocos minutos del centro</p>
            </div>
            <div className="xl:absolute sm:bottom-[300px] xl:block contents relative z-10 items-center justify-center sm:text-3xl pt-1.5 sm:p-0">
                <Link href="https://www.booking.com/Share-cgsT1H"><button className="button" id="promo">Booking</button></Link>
            </div>
            </div>
            <div className="flex flex-col items-center w-full">
                <h3 className="highlight sm:h1 text-3xl text-center sm:p-10 p-4">¡Promo de estreno!</h3>
                <div className="flex flex-col lg:flex-row gap-4 items-center p-6 sm:p-16 justify-evenly w-full">
                    {tarifas.map((t) => (<div key={t.id} className="card bg-[#fffbce] flex flex-col gap-2 w-[200px] text-center p-4 justify-self-stretch">
                        <h4 className="h3">Por {t.title}</h4>
                        <h3 className="h3">Desde ${t.price}</h3>
                        <h1 className="text-3xl">-${Math.floor(t.price*t.discount/100)}</h1>
                        <p>¡Descuento: {t.discount}%!</p>
                        <h1 className="text-3xl font-semibold text-[#275717]">Total: ${Math.floor(t.price-t.price*t.discount/100)}</h1>
                    </div>))}
                </div>
                <p>*Reservando directamente.</p>
                <p>*Tarifas sujetas a disponibilidad y temporada.</p>
                <p>*Tarifas con impuestos incluidos.</p>
                <p>*Para alquilar por día, por favor contáctenos.</p>
            </div>

        </section>
    )
}