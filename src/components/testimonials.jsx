export default function Testimonials() {
    return (
        <>
            <div className='testimonials min-w-[400px] max-w-[400px] box-border p-[10px] rounded-[8px] border-gray-300 border-[1px] grid grid-cols-3 justify-between items-center'>
                <div className="max-w-[80px] p-[5px] rounded-full overflow-hidden">
                  <img src="./replacement-user.jpg" alt="Cliente" className="rounded-full" />
                </div>
                <div className="col-span-2">
                  <h3 className="text-xl"><b>Nombre del Cliente</b></h3>
                  <p className="text-gray-600">Contenido del testimonio</p>
                </div>
            </div>
        </>
    )
}
