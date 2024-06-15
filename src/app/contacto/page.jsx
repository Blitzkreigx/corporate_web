import '../globals.css'

export default function Contacto() {
    return (
        <>
            <section className="height text-center flex flex-col justify-center items-center gap-[10px] overflow-hidden text-white z-20 relative p-[10px]">
              <h1 className="text-4xl max-w-[1000px]">Recibe atención los 7 días de la semana y reserva citas</h1>
            </section>
            <div className="w-full absolute top-0 overflow-hidden h-screen z-10">
              <img src="./business-work3.jpg" alt="Background" className="absolute -z-[100] w-full h-full object-cover" />
              <div className="bg-black bg-opacity-70 w-full h-full z-[50]"></div>
            </div>
            <section className="grid grid-cols-1 justify-center items-center mb-[50px] md:flex-row md:grid-cols-2 px-[10px] py-[50px]">
                <div className="flex flex-col justify-center items-start gap-[15px] p-[25px] text-start">
                    <h2 className='text-5xl my-[25px]'>Contactanos</h2>
                    <div>
                        <h3 className='text-lg'><strong>Ubicación:</strong></h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis nam</p>
                    </div>
                    <div>
                        <h3 className='text-lg'><strong>Correo:</strong></h3>
                        <p>contacto.example@dirección.com</p>
                    </div>
                    <div>
                        <h3 className='text-lg'><strong>Teléfono:</strong></h3>
                        <p>00 1234 1234</p>
                    </div>
                    <div className="flex justify-center items-center gap-[15px] py-[10px]">
                        <a href="https://web.whatsapp.com/" target='_BLANK'>
                            <img src="./brand-whatsapp.png" alt="whatsapp" className="max-w-[25px]" />
                        </a>
                        <a href="https://www.facebook.com/" target='_BLANK'>
                            <img src="./brand-facebook.png" alt="facebook" className="max-w-[25px]" />
                        </a>
                        <a href="https://twitter.com/" target='_BLANK'>
                            <img src="./brand-x.png" alt="twitter" className="max-w-[25px]" />
                        </a>
                    </div>
                </div>
                <form className="box-border p-[10px] flex flex-col gap-[25px]">
                    <div className="flex flex-col justify-center items-start min-w-[350px] max-w-[500px] mx-auto">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" name="name" id="name" required placeholder='Ingresa tu nombre completo' className="input w-full h-[50px] box-border px-[5px]" />
                    </div>
                    <div className="flex flex-col justify-center items-start min-w-[350px] max-w-[500px] mx-auto">
                        <label htmlFor="email">Correo</label>
                        <input type="email" name="email" id="email" required placeholder='Ingresa tu correo electronico' className="input w-full h-[50px] box-border px-[5px]" />
                    </div>
                    <div className="flex flex-col justify-center items-start min-w-[350px] max-w-[500px] mx-auto">
                        <label htmlFor="message">Mensaje</label>
                        <textarea name="message" id="message" required placeholder='Ingresa un mensaje descriptivo' className="input w-full box-border min-h-[100px] px-[5px] resize-none"></textarea>
                    </div>
                    <input type="submit" value="Enviar" className="bg-zinc-900 hover:bg-black text-white py-[5px] cursor-pointer rounded-[3px] min-w-[350px] max-w-[500px] mx-auto box-border" />
                </form>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 px-[10px] py-[50px]">
                <div className="flex flex-col justify-center items-start gap-[10px] p-[25px]">
                  <h2 className="text-4xl max-w-[90%]">Visitanos en nuestra sucursal</h2>
                  <p className="max-w-[90%] text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus debitis aspernatur, nam harum et ab quasi atque. Ipsam illum non consequatur quasi. Distinctio corrupti nam consectetur iusto magni officia tempore.</p>
                </div>
                <div className="w-full box-border p-[10px] flex justify-center items-center">
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15050.022192997261!2d-99.1469766092358!3d19.433758444840947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92d2e0e4dbd%3A0x905574a740c4893d!2sCentro%20Hist%C3%B3rico%20de%20la%20Cdad.%20de%20M%C3%A9xico%2C%20Centro%2C%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1713647120259!5m2!1ses-419!2smx" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-[90%] mx-auto min-h-[60vh] bg-gray-100"
                    >
                    </iframe>
                </div>
            </section>
        </>
    );
}