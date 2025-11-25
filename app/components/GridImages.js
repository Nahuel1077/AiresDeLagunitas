'use client'
import Image from "next/image"
import { useState } from "react";

export default function GridImages(){

    const portada = [
        {id:1, src:"/img/exterior1.jpg", alt:"exterior"},
        {id:2, src:"/img/exterior6.jpg", alt:"exterior"},
        {id:3, src:"/img/exterior7.jpg", alt:"exterior"},
        {id:4, src:"/img/exterior9.jpg", alt:"exterior"},
        {id:10, src:"/img/exterior10.jpg", alt:"exterior"},
        {id:11, src:"/img/exterior11.jpg", alt:"exterior"},
        {id:12, src:"/img/exterior12.jpg", alt:"exterior"},
        {id:13, src:"/img/exterior13.jpg", alt:"exterior"},
        {id:14, src:"/img/exterior14.jpg", alt:"exterior"},
        {id:15, src:"/img/exteriornoche1.jpg", alt:"exterior"},
        {id:16, src:"/img/exteriornoche2.jpg", alt:"exterior"},
        {id:17, src:"/img/exteriornoche3.jpg", alt:"exterior"},
        {id:18, src:"/img/exteriornoche4.jpg", alt:"exterior"},
        {id:19, src:"/img/exteriornoche5.jpg", alt:"exterior"},
        {id:20, src:"/img/exteriornoche6.jpg", alt:"exterior"},
        {id:21, src:"/img/exteriornoche7.jpg", alt:"exterior"},
        {id:22, src:"/img/living1.jpg", alt:"living"},
        {id:23, src:"/img/living2.jpg", alt:"living"},
        {id:24, src:"/img/living3.jpg", alt:"living"},
        {id:25, src:"/img/living4.jpg", alt:"living"},
        {id:26, src:"/img/living5.jpg", alt:"living"},
        {id:27, src:"/img/living6.jpg", alt:"living"},
        {id:28, src:"/img/living7.jpg", alt:"living"},
        {id:29, src:"/img/living8.jpg", alt:"living"},
        {id:30, src:"/img/living9.jpg", alt:"living"},
        {id:31, src:"/img/living10.jpg", alt:"living"},
        {id:32, src:"/img/living11.jpg", alt:"living"},
        {id:33, src:"/img/living12.jpg", alt:"living"},
        {id:34, src:"/img/living13.jpg", alt:"living"},
        {id:35, src:"/img/comedor1.jpg", alt:"comedor"},
        {id:36, src:"/img/comedor2.jpg", alt:"comedor"},
        {id:37, src:"/img/comedor3.jpg", alt:"comedor"},
        {id:38, src:"/img/comedor4.jpg", alt:"comedor"},
        {id:39, src:"/img/comedor5.jpg", alt:"comedor"},
        {id:40, src:"/img/cocina1.jpg", alt:"cocina"},
        {id:41, src:"/img/cocina2.jpg", alt:"cocina"},
        {id:42, src:"/img/cocina3.jpg", alt:"cocina"},
        {id:43, src:"/img/cocina4.jpg", alt:"cocina"},
        {id:44, src:"/img/cocina5.jpg", alt:"cocina"},
        {id:45, src:"/img/matrimonial1.jpg", alt:"matrimonial"},
        {id:46, src:"/img/matrimonial2.jpg", alt:"matrimonial"},
        {id:47, src:"/img/matrimonial3.jpg", alt:"matrimonial"},
        {id:48, src:"/img/matrimonial4.jpg", alt:"matrimonial"},
        {id:49, src:"/img/matrimonial5.jpg", alt:"matrimonial"},
        {id:50, src:"/img/matrimonial6.jpg", alt:"matrimonial"},
        {id:51, src:"/img/doble1.jpg", alt:"doble"},
        {id:52, src:"/img/doble2.jpg", alt:"doble"},
        {id:53, src:"/img/doble3.jpg", alt:"doble"},
        {id:54, src:"/img/doble4.jpg", alt:"doble"},
        {id:55, src:"/img/doble5.jpg", alt:"doble"},
        {id:56, src:"/img/doble6.jpg", alt:"doble"},
        {id:57, src:"/img/doble7.jpg", alt:"doble"},
        {id:58, src:"/img/baño1.jpg", alt:"baño"},
        {id:59, src:"/img/baño3.jpg", alt:"baño"},
        {id:60, src:"/img/baño5.jpg", alt:"baño"},
        {id:61, src:"/img/baño6.jpg", alt:"baño"},
    ];

    const [openImg, setOpenImg] = useState(null);

    return(
        <section className="flex flex-col items-center sm:pb-4 pl-2 pr-2 pb-4">
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
                        onClick={() => setOpenImg(p.src)}
                        />
                </div>
            ))}
            </div>
            {openImg && (<div className={`${openImg? "gap-6 sm:p-30 top-0 z-20 fixed overflow-hidden w-[100vw] h-[100vh] bg-[#000000db] flex sm:flex-row flex-col-reverse items-center justify-center" : "hidden"}`}>
                {
                    <Image
                    src={openImg}
                    alt="Imagen ampliada"
                    width={1429}
                    height={1039}
                    className="object-contain w-full sm:w-full sm:h-[100vh]"
                    />
                }
                <button onClick={() => {setOpenImg(null)}} className="w-[30px] h-[30px] invert self-start">✖</button>
            </div>)}
        </section>
    )
}