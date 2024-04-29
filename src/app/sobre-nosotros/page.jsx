import '../globals.css'

export default function SobreNosotros() {
    return (
        <>
            <section className="height flex flex-col justify-center items-center md:flex-row px-[10px] py-[50px]">
                <div className="w-full box-border p-[10px]">
                    <img src="./image.png" alt="Empresa" className="max-w-[500px] mx-auto" />
                </div>
                <div className="w-full box-border p-[10px]">
                    <h2 className="text-3xl mb-[20px]">Nuestra Historia</h2>
                    <p>Contenido de la historia de la empresa.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo incidunt placeat consequuntur beatae in harum deleniti ipsa ipsam natus a rem reiciendis.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum possimus necessitatibus ratione fuga excepturi qui voluptas non accusamus totam facilis veniam, quibusdam corporis provident illo cum. Nam maiores nesciunt ipsam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam earum ipsum mollitia, asperiores, fugit ab vitae minus repudiandae perspiciatis nobis at deserunt, voluptate maiores blanditiis. Id quo architecto omnis culpa?</p>
                </div>
            </section>
            <section>
                <div className="text-center px-[10px] py-[50px]">
                    <h2 className="text-3xl mb-[25px]">Nuestro Equipo</h2>
                    <div className="md:max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-[25px] md:gap-0">
                        <div className="member p-[10px] w-full text-center mx-auto rounded-[8px] border-gray-300 border-[1px] md:col-span-2 md:row-span-2">
                            <div className="w-[120px] h-[120px] mx-auto rounded-full bg-white overflow-hidden flex justify-center items-center">
                                <img src="./replacement-user.jpg" alt="Miembro" className="" />
                            </div>
                            <h3 className="mt-[10px] text-lg"><b>NOMBRE</b></h3>
                            <h3 className="">JEFE DE LA EMPRESA</h3>
                            <p className="mt-[15px] text-gray-600">Descripción de las actividades de la persona</p>
                        </div>
                        <div className="member p-[10px] w-full text-center mx-auto rounded-[8px] border-gray-300 border-[1px]">
                            <div className="w-[90px] h-[90px] mx-auto rounded-full bg-white overflow-hidden flex justify-center items-center">
                                <img src="./replacement-user.jpg" alt="Miembro" className="" />
                            </div>
                            <h3 className="mt-[10px] text-lg"><b>Nombre</b></h3>
                            <h3 className="">Función</h3>
                            <p className="mt-[15px] text-gray-600">Descripción de las actividades de la persona</p>
                        </div>
                        <div className="member p-[10px] w-full text-center mx-auto rounded-[8px] border-gray-300 border-[1px] md:row-span-2">
                            <div className="w-[90px] h-[90px] mx-auto rounded-full bg-white overflow-hidden flex justify-center items-center">
                                <img src="./replacement-user.jpg" alt="Miembro" className="" />
                            </div>
                            <h3 className="mt-[10px] text-lg"><b>Nombre</b></h3>
                            <h3 className="">Función</h3>
                            <p className="mt-[15px] text-gray-600">Descripción de las actividades de la persona</p>
                        </div>
                        <div className="member p-[10px] w-full text-center mx-auto rounded-[8px] border-gray-300 border-[1px]">
                            <div className="w-[90px] h-[90px] mx-auto rounded-full bg-white overflow-hidden flex justify-center items-center">
                                <img src="./replacement-user.jpg" alt="Miembro" className="" />
                            </div>
                            <h3 className="mt-[10px] text-lg"><b>Nombre</b></h3>
                            <h3 className="">Función</h3>
                            <p className="mt-[15px] text-gray-600">Descripción de las actividades de la persona</p>
                        </div>
                        <div className="member p-[10px] w-full text-center mx-auto rounded-[8px] border-gray-300 border-[1px]">
                            <div className="w-[90px] h-[90px] mx-auto rounded-full bg-white overflow-hidden flex justify-center items-center">
                                <img src="./replacement-user.jpg" alt="Miembro" className="" />
                            </div>
                            <h3 className="mt-[10px] text-lg"><b>Nombre</b></h3>
                            <h3 className="">Función</h3>
                            <p className="mt-[15px] text-gray-600">Descripción de las actividades de la persona</p>
                        </div>
                        <div className="member p-[10px] w-full text-center mx-auto rounded-[8px] border-gray-300 border-[1px]">
                            <div className="w-[90px] h-[90px] mx-auto rounded-full bg-white overflow-hidden flex justify-center items-center">
                                <img src="./replacement-user.jpg" alt="Miembro" className="" />
                            </div>
                            <h3 className="mt-[10px] text-lg"><b>Nombre</b></h3>
                            <h3 className="">Función</h3>
                            <p className="mt-[15px] text-gray-600">Descripción de las actividades de la persona</p>
                        </div>
                        <div className="member p-[10px] w-full text-center mx-auto rounded-[8px] border-gray-300 border-[1px] md:col-span-2">
                            <div className="w-[90px] h-[90px] mx-auto rounded-full bg-white overflow-hidden flex justify-center items-center">
                                <img src="./replacement-user.jpg" alt="Miembro" className="" />
                            </div>
                            <h3 className="mt-[10px] text-lg"><b>Nombre</b></h3>
                            <h3 className="">Función</h3>
                            <p className="mt-[15px] text-gray-600">Descripción de las actividades de la persona</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
