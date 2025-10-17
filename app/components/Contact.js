export default function Contact(){

    return(
        <section id="contact" className="w-full flex flex-col items-center bg-blue-100">
            <div className="pt-8 text-center">
                <h3 className="text-3xl h3 font-semibold">Contáctenos</h3>
                <p>¿Listo para planear tu próxima escapada?</p>
            </div>
            <div className="sm:p-[4rem] p-2 flex flex-col xl:flex-row w-full">
                <div className="flex flex-col self-center w-full sm:max-w-[70%] xl:w-full sm:p-[4rem] rounded-2xl bg-white gap-6 shadow-[black_0px_0px_10px_0px]">
                    <h3 className="text-3xl h3 font-semibold p-4">Escríbanos</h3>
                    <form className="gap-10 flex flex-col p-4" action="https://formsubmit.co/nahuh08@gmail.com" method="POST">
                        <div className="flex flex-col gap-2 flex-wrap items-start">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" id="name" name="name" requiredplaceholder="Nombre" className="border-2 border-gray-200 rounded-md w-full md:w-[70%] h-[40px]"></input>
                        </div>
                        <div className="flex flex-col gap-2 flex-wrap items-start">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" requiredplaceholder="Email" className="border-2 border-gray-200 rounded-md w-full md:w-[70%] h-[40px]"></input>
                        </div>
                        <div className="flex flex-col gap-2 flex-wrap items-start">
                            <label htmlFor="number">Teléfono</label>
                            <input type="number" id="number" name="number" requiredplaceholder="Teléfono" className="border-2 border-gray-200 rounded-md w-full md:w-[70%] h-[40px]"></input>
                        </div>
                        <div className="flex flex-row gap-6 flex-wrap items-start">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="checkin">Check-in</label>
                                <input type="date" id="checkin" name="checkin" requiredplaceholder="Check-in" className="border-2 border-gray-200 rounded-md h-[40px]"></input>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="checkin">Check-out</label>
                                <input type="date" id="checkout" name="checkout" requiredplaceholder="Check-out" className="border-2 border-gray-200 rounded-md h-[40px]"></input>
                            </div>
                        </div>
                        <button type="submit" id="submit" className="button hover:button">Enviar</button>
                    </form>
                </div>
                <div className="flex flex-col items-center w-full sm:mt-[4rem] gap-2">
                    <div className="flex flex-col items-start gap-2">
                        <h3 className="text-3xl h3 font-semibold">Contacto</h3>
                            <div className="flex flex-row gap-4">
                                📞
                                <ul className="flex flex-col items-start">
                                    <li>Teléfono</li>
                                    <li>1127194665</li>
                                </ul>
                            </div>
                            <div className="flex flex-row gap-4">
                                ✉
                                <ul className="flex flex-col items-start">
                                    <li>Email</li>
                                    <li>airesdelagunitas@gmail.com</li>
                                </ul>
                            </div>
                            <div className="flex flex-row gap-4">
                                🕒
                                <ul className="flex flex-col items-start">
                                    <li>Horarios:</li>
                                    <li>Lunes a sábados: 7:00hs - 22:00hs (UTC-3)</li>
                                    <li></li>
                                </ul>
                            </div>
                            <div className="flex flex-row gap-4">
                                📍
                                <ul className="flex flex-col items-start">
                                    <li>Dirección</li>
                                    <li>Cecilia Grierson 1477, Villa General Belgrano, Córdoba</li>
                                </ul>
                            </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d382.0113751599277!2d-64.58921362942796!3d-31.970599110484198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sar!4v1760386246129!5m2!1ses-419!2sar" width="350" height="300" className="border-0 sm:w-[400px]" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}