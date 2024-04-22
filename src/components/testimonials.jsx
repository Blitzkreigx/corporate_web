export default function Testimonials() {
    return (
        <>
            <div className="min-w-[400px] max-w-[400px] box-border p-[10px] rounded-[8px] border-gray-300 border-[1px] grid grid-cols-3 justify-between items-center">
                <div className="max-w-[100px]">
                  <img src="./icon-user.png" alt="Cliente" />
                </div>
                <div className="col-span-2">
                  <h3 className="text-xl"><b>Nombre del Cliente</b></h3>
                  <p className="text-gray-600">Contenido del testimonio</p>
                </div>
            </div>
        </>
    )
}