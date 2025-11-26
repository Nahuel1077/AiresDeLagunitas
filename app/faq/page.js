'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Faq(){

    const qa = [
        {id:1, pregunta:"¿Dónde están ubicadas las cabañas?", respuesta:"Las cabañas se encuentran en Villa General Belgrano, en el barrio semi-cerrado 'Las Lagunitas', a 10 minutos del centro cívico, y con salida a la ruta camino a Los Reartes."},
        {id:2, pregunta:"¿Incluye desayuno?", respuesta:"Por el momento, no tenemos servicio de comidas en general, pero podemos darte unas excelentes recomendaciones de lugares para comer bien y que son amigables al bolsillo."},
        {id:3, pregunta:"¿A qué hora se hace el check-in? ¿Y a qué hora el check-out?", respuesta:"Para ingresar pedimos que sea después de la 1:00 pm, aunque se puede arreglar para entrar por la mañana, sujeto a disponibilidad. El check-out es hasta las 10:00 am."},
        {id:4, pregunta:"¿Cuentan con estacionamiento?", respuesta:"Si, tenemos estacionamiento incluido para vehículos de 2 ejes."},
        {id:5, pregunta:"¿Qué documentación debo presentar para ingresar?", respuesta:"Únicamente con DNI o pasaporte para poder firmar el check-in."},
        {id:6, pregunta:"¿Cuándo pago por la estadía?", respuesta:"Al momento de reservar se toma el 50% de la estadía. El saldo restante se abona al ingresar, sin excepciones."},
        {id:7, pregunta:"¿Se aceptan mascotas?", respuesta:"Únicamente con aviso y autorización previa por parte del establecimiento."},
        {id:8, pregunta:"¿Puedo recibir visitas no alojadas en el hotel?", respuesta:"No se permiten visitas de personas que no estén alojadas en el hotel."},
        {id:9, pregunta:"Soy turista extranjero, ¿cómo evito el IVA?", respuesta:"Para ello, es necesario cumplir con los siguientes requisitos: 1) Pagar tu cuenta de hotel mediante tarjeta de débito o crédito internacional emitida fuera de la República Argentina. 2)Presentar para su digitalización, al momento de realizar el pago, tu pasaporte (o documento de identidad válido) con el sello de ingreso al país o ticket emitido por la Dirección de Migraciones de tu ingreso. 3) Ningún argentino y/o Argentina puede haberse alojado en la misma habitación durante la estadía. "},
    ];

    const [isOpen, setIsOpen] = useState(null);

    return(
        <section className="flex flex-col items-center gap-4">
             <div className="flex flex-col items-center justify-center w-full bg-gray-100">
                <div className="flex flex-row items-center w-full">
                    <Image
                    src="/img/hero2.jpg"
                    alt="portada"
                    width={2000}
                    height={2000}
                    className="sm:w-full sm:h-[90vh] object-contain sm:object-cover object-top brightness-50"
                    />
                </div>
                <div className="absolute flex flex-col gap-4 sm:gap-[3rem] text-white items-center justify-center sm:text-3xl">
                    <h1 className="sm:text-6xl text-xl text-shadow-lg text-center">Preguntas frecuentes</h1>
                    <p className="sm:text-3xl text-xl text-shadow-lg">No te quedes con la duda</p>
                </div>
                <div className="xl:absolute sm:bottom-[300px] xl:block contents relative z-10 items-center justify-center sm:text-3xl pt-1.5 sm:p-0">
                    <Link href="#"><button className="button">Reservar</button></Link>
                </div>
            </div>
            <div className="flex sm:flex-row flex-col items-center justify-center sm:gap-6 sm:p-10 p-4 w-full">
                <div className="flex flex-col sm:grid sm:grid-cols-2 sm:justify-items-start sm:gap-6 gap-10 sm:items-center w-full">
                    {qa.map((q) => (
                        <div key={q.id} className="flex flex-col sm:p-2 sm:w-[40vw]">
                            <div className="flex flex-row gap-4 items-start justify-between">
                                <a className="sm:text-xl">{q.pregunta}</a>
                                <button className="grayscale-100" onClick={() => setIsOpen(isOpen === q.id ? null : q.id)}>
                            {isOpen === q.id ? "🔺" : "🔻"}
                                </button>
                            </div>
                            {isOpen === q.id && (<div className="animate__animated animate__bounceInDown">
                                <p className="sm:text-xl">{q.respuesta}</p>
                            </div>)}
                        </div>))}
                </div>
            </div>
        </section>
    );
};