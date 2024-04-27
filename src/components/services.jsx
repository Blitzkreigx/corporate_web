import Link from "next/link";

export function ServicesPrimary() {
    return (
        <>
            <div className={`services min-w-[400px] max-w-[500px] box-border p-[10px] rounded-[8px] border-[1px]`}>
                <h3 className="text-xl"><b>Tipo de Servicio</b></h3>
                <p className="text-gray-600">Descripción detallada del servicio.</p>
                <Link href="/servicios">
                    <button className="py-[5px] px-[10px] border-none bg-black text-white rounded-[4px] mt-[15px]">Leer más</button>
                </Link>
            </div>
        </>
    )
}

export function ServicesSecondary() {
    return (
        <>
            <div className={`services border-[1px] border-gray-300 rounded-[8px] p-[10px] min-w-[300px] max-w-[300px] box-border`}>
                <img src="./image.png" alt="icon" className="max-w-[50px] p-[5px] bg-gray-100 rounded-full" />
                <h2 className="text-xl"><b>Tipo de Servicio</b></h2>
                <p className="text-gray-600">Descripción detallada del servicio.</p>
            </div>
        </>
    )
}

export function ServicesStar() {
    return (
        <>
            <div className="services-star bg-gray-100 border-[1px] border-gray-300 rounded-[8px] p-[10px] min-w-[400px] max-w-[450px] box-border">
                <div className="flex justify-between items-start">
                    <img src="./image.png" alt="icon" className="max-w-[50px]" />
                    <button className="bg-black text-white border-none px-[8px] rounded-full cursor-default text-center"><small>Más Vendido</small></button>
                </div>
                <div className="py-[10px]">
                    <h2 className="text-xl"><b>Tipo de Servicio</b></h2>
                    <p className="text-gray-600">Descripción detallada del servicio.</p>
                </div>
            </div>
        </>
    )
}

const componentsServices = {
    ServicesPrimary,
    ServicesSecondary,
    ServicesStar
};

export default componentsServices
