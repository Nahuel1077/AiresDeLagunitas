import Link from "next/link"

export default function Reservas(){

    return(
        <section className="w-full flex flex-col items-center bg-black gap-8 sm:gap-0 pt-22">
            <div className="pt-8 text-center">
                <h3 className="text-3xl font-semibold text-white">Reserve su estadía</h3>
                <p className="text-white">Consulte disponibilidad</p>
            </div>
            <div className="sm:p-[4rem] p-2 flex flex-col items-center w-full gap-8 sm:gap-0">
                <div className="flex flex-col self-center w-full sm:max-w-[80%] xl:w-full sm:p-[4rem] rounded-2xl bg-white gap-12 shadow-[black_0px_0px_10px_0px]">
                    <div className="flex flex-col items-center sm:p-4 p-2 gap-10 w-full">
                        <div className="flex flex-col items-start w-full">
                            <h3>Reserva por <span className="highlight">semana</span>:</h3>
                            <p>Ingresando cualquier día de la semana, 7 días y 6 noches.</p>
                        </div>
                        <div className="flex flex-col items-start w-full">
                            <h3>Reserva por <span className="highlight">quincena</span>:</h3>
                            <p>Ingresando cualquier día de la semana, 15 días y 14 noches.</p>
                        </div>
                        <div className="flex flex-col items-start w-full">
                            <h3 className="text-start">Para reservas por <span className="highlight">día</span>:</h3>
                            <p>Sujeto a disponibilidad, realice su consulta.</p>
                        </div>
                    </div>
                    <form className="gap-10 flex flex-col p-4" action="https://formsubmit.co/altosdelagunitas@gmail.com" method="POST">
                        <div className="flex flex-col gap-2 flex-wrap items-start">
                            <label htmlFor="name">Nombre y apellido:</label>
                            <input type="text" id="name" name="name" requiredplaceholder="Nombre" className="border-2 border-gray-200 rounded-md w-full md:w-[70%] h-[40px]"></input>
                        </div>
                        <div className="flex flex-col gap-2 flex-wrap items-start">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" requiredplaceholder="Email" className="border-2 border-gray-200 rounded-md w-full md:w-[70%] h-[40px]"></input>
                        </div>
                        <div className="flex flex-col gap-2 flex-wrap items-start">
                            <label htmlFor="number">Teléfono:</label>
                            <input type="number" id="number" name="number" requiredplaceholder="Teléfono" className="border-2 border-gray-200 rounded-md w-full md:w-[70%] h-[40px]"></input>
                        </div>
                        <div className="flex flex-row gap-6 flex-wrap items-start">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="checkin">Desde:</label>
                                <input type="date" id="checkin" name="checkin" requiredplaceholder="Check-in" className="border-2 border-gray-200 rounded-md h-[40px]"></input>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="checkin">Hasta:</label>
                                <input type="date" id="checkout" name="checkout" requiredplaceholder="Check-out" className="border-2 border-gray-200 rounded-md h-[40px]"></input>
                            </div>
                        </div>
                        <button type="submit" id="submit" className="button hover:button">Consultar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}