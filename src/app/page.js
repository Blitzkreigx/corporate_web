export default function Home() {
  return (
    <>
      <section className="min-h-screen text-center flex flex-col justify-center items-center gap-[10px]">
        <h1 className="text-3xl max-w-[1000px]"><strong>Empresa</strong>, Líder en establecer actividades empresariales!</h1>
        <p className="max-w-[900px]">Contenido explicativo sobre las actividades de la empresa y contenido importante y fundamental.</p>
      </section>
      <section className="text-center px-[10px] py-[50px]">
        <h2 className="text-3xl mb-[25px]">Nuestros Servicios!</h2>
        <div className="flex flex-row flex-wrap justify-center items-center gap-[25px]">
          <div className="min-w-[400px] max-w-[500px] box-border p-[10px] rounded-[8px] border-gray-300 border-[1px]">
            <h3 className="text-xl"><b>Tipo de Servicio</b></h3>
            <p className="text-gray-600">Descripción detallada del servicio.</p>
            <button className="py-[5px] px-[10px] border-none bg-black text-white rounded-[4px] mt-[15px]">Leer más</button>
          </div>
          <div className="min-w-[400px] max-w-[500px] box-border p-[10px] rounded-[8px] border-gray-300 border-[1px]">
            <h3 className="text-xl"><b>Tipo de Servicio</b></h3>
            <p className="text-gray-600">Descripción detallada del servicio.</p>
            <button className="py-[5px] px-[10px] border-none bg-black text-white rounded-[4px] mt-[15px]">Leer más</button>
          </div>
        </div>
      </section>
      <section className="text-center px-[10px] py-[50px]">
        <h2 className="text-3xl mb-[25px]">Testimonios de Nuestros Clientes</h2>
        <div className="flex flex-row flex-wrap justify-center items-center gap-[25px]">
          <div className="min-w-[400px] max-w-[400px] box-border p-[10px] rounded-[8px] border-gray-300 border-[1px] grid grid-cols-3 justify-between items-center">
            <div className="max-w-[100px]">
              <img src="./icon-user.png" alt="Cliente" />
            </div>
            <div className="col-span-2">
              <h3 className="text-xl"><b>Nombre del Cliente</b></h3>
              <p className="text-gray-600">Contenido del testimonio</p>
            </div>
          </div>
          <div className="min-w-[400px] max-w-[400px] box-border p-[10px] rounded-[8px] border-gray-300 border-[1px] grid grid-cols-3 justify-between items-center">
            <div className="max-w-[100px]">
              <img src="./icon-user.png" alt="Cliente" />
            </div>
            <div className="col-span-2">
              <h3 className="text-xl"><b>Nombre del Cliente</b></h3>
              <p className="text-gray-600">Contenido del testimonio</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
