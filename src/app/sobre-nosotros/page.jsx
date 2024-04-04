export default function SobreNosotros() {
    return (
        <>
            <section className="">
                <div className="flex flex-col justify-center items-center min-h-screen md:flex-row px-[10px] py-[50px]">
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
                </div>
                <div className="text-center px-[10px] py-[50px]">
                    <h2 className="text-3xl mb-[25px]">Nuestro Equipo</h2>
                    {/* MIEMBROS DEL EQUIPO CON ORDEN DE CUADRICULA DESORDENADA TIPO VENTO */}
                    <div className="flex flex-wrap justify-center items-center gap-[25px]">
                        <div className=" p-[10px] min-w-[300px] max-w-[300px] text-center mx-auto rounded-[8px] border-gray-300 border-[1px]">
                            <img src="./icon-user.png" alt="Miembro" className="max-w-[100px] mx-auto rounded-full" />
                            <h3 className="mt-[10px]"><b>FUNCIÓN</b></h3>
                        </div>
                        <div className=" p-[10px] min-w-[300px] max-w-[300px] text-center mx-auto rounded-[8px] border-gray-300 border-[1px]">
                            <img src="./icon-user.png" alt="Miembro" className="max-w-[100px] mx-auto rounded-full" />
                            <h3 className="mt-[10px]"><b>FUNCIÓN</b></h3>
                        </div>
                        <div className=" p-[10px] min-w-[300px] max-w-[300px] text-center mx-auto rounded-[8px] border-gray-300 border-[1px]">
                            <img src="./icon-user.png" alt="Miembro" className="max-w-[100px] mx-auto rounded-full" />
                            <h3 className="mt-[10px]"><b>FUNCIÓN</b></h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}