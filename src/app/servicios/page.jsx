export default function Servicios() {
    return (
        <>
            <section className="min-h-screen flex flex-col justify-center items-center pt-[100px] lg:pt-0">
                <h2 className="text-3xl mb-[25px] text-center">Nuestros Servicio</h2>
                <p className="text-gray-600 text-center">Ofrecemos una amplia gama de servicios para satisfacer todas sus necesidades.</p>
                <div className="mt-[25px] flex flex-wrap justify-center items-center gap-[25px]">
                    <div className="bg-gray-100 border-[1px] border-gray-300 rounded-[8px] p-[10px] min-w-[400px] max-w-[450px] box-border">
                        <div className="flex justify-between items-start">
                            <img src="./image.png" alt="icon" className="max-w-[50px]" />
                            <button className="bg-black text-white border-none px-[8px] rounded-full cursor-default text-center"><small>Más Vendido</small></button>
                        </div>
                        <div className="py-[10px]">
                            <h2 className="text-xl"><b>Servicio</b></h2>
                            <p className="text-gray-600">Descripción detallada del servicio.</p>
                        </div>
                    </div>
                    <div className="bg-gray-100 border-[1px] border-gray-300 rounded-[8px] p-[10px] min-w-[400px] max-w-[450px] box-border">
                        <div className="flex justify-between items-start">
                            <img src="./image.png" alt="icon" className="max-w-[50px]" />
                            <button className="bg-black text-white border-none px-[8px] rounded-full cursor-default text-center"><small>Más Vendido</small></button>
                        </div>
                        <div className="py-[10px]">
                            <h2 className="text-xl"><b>Servicio</b></h2>
                            <p className="text-gray-600">Descripción detallada del servicio.</p>
                        </div>
                    </div>
                    <div className="bg-gray-100 border-[1px] border-gray-300 rounded-[8px] p-[10px] min-w-[400px] max-w-[450px] box-border">
                        <div className="flex justify-between items-start">
                            <img src="./image.png" alt="icon" className="max-w-[50px]" />
                            <button className="bg-black text-white border-none px-[8px] rounded-full cursor-default text-center"><small>Más Vendido</small></button>
                        </div>
                        <div className="py-[10px]">
                            <h2 className="text-xl"><b>Servicio</b></h2>
                            <p className="text-gray-600">Descripción detallada del servicio.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-[50px] flex flex-wrap justify-center items-center gap-[25px]">
                    <div className="border-[1px] border-gray-300 rounded-[8px] p-[10px] min-w-[300px] max-w-[300px] box-border">
                        <img src="./image.png" alt="icon" className="max-w-[50px] p-[5px] bg-gray-100 rounded-full" />
                        <h2 className="text-xl"><b>Servicio</b></h2>
                        <p className="text-gray-600">Descripción detallada del servicio.</p>
                    </div>
                    <div className="border-[1px] border-gray-300 rounded-[8px] p-[10px] min-w-[300px] max-w-[300px] box-border">
                        <img src="./image.png" alt="icon" className="max-w-[50px] p-[5px] bg-gray-100 rounded-full" />
                        <h2 className="text-xl"><b>Servicio</b></h2>
                        <p className="text-gray-600">Descripción detallada del servicio.</p>
                    </div>
                    <div className="border-[1px] border-gray-300 rounded-[8px] p-[10px] min-w-[300px] max-w-[300px] box-border">
                        <img src="./image.png" alt="icon" className="max-w-[50px] p-[5px] bg-gray-100 rounded-full" />
                        <h2 className="text-xl"><b>Servicio</b></h2>
                        <p className="text-gray-600">Descripción detallada del servicio.</p>
                    </div>
                    <div className="border-[1px] border-gray-300 rounded-[8px] p-[10px] min-w-[300px] max-w-[300px] box-border">
                        <img src="./image.png" alt="icon" className="max-w-[50px] p-[5px] bg-gray-100 rounded-full" />
                        <h2 className="text-xl"><b>Servicio</b></h2>
                        <p className="text-gray-600">Descripción detallada del servicio.</p>
                    </div>
                </div>
            </section>
        </>
    );
}