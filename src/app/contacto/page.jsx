import '../../styles/body.css'

export default function Contacto() {
    return (
        <>
            <section className="height grid grid-cols-1 justify-center items-center mb-[50px] md:flex-row md:grid-cols-2">
                <div className="w-full box-border p-[10px] text-center">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15050.022192997261!2d-99.1469766092358!3d19.433758444840947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92d2e0e4dbd%3A0x905574a740c4893d!2sCentro%20Hist%C3%B3rico%20de%20la%20Cdad.%20de%20M%C3%A9xico%2C%20Centro%2C%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1713647120259!5m2!1ses-419!2smx" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        className="w-[90%] mx-auto min-h-[60vh] bg-gray-100"
                    >
                    </iframe>
                </div>
                <form className="w-full box-border p-[10px] flex flex-col gap-[25px]">
                    <div className="flex flex-col justify-center items-center min-w-[350px] max-w-[500px] mx-auto">
                        <label htmlFor="name">Nombre Completo</label>
                        <input type="text" name="name" id="name" required className="w-full box-border border-[1px] bg-gray-100 px-[5px]" />
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-[350px] max-w-[500px] mx-auto">
                        <label htmlFor="email">Correo Electronico</label>
                        <input type="email" name="email" id="email" required className="w-full box-border border-[1px] bg-gray-100 px-[5px]" />
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-[350px] max-w-[500px] mx-auto">
                        <label htmlFor="message">Mensaje</label>
                        <textarea name="message" id="message" className="w-full box-border border-[1px] bg-gray-100 min-h-[100px] px-[5px]"></textarea>
                    </div>
                    <input type="submit" value="Enviar" className="bg-black text-white py-[5px] cursor-pointer rounded-[3px] min-w-[350px] max-w-[500px] mx-auto box-border" />
                </form>
            </section>
            <section className="grid grid-cols-1 items-center md:grid-cols-3">
                    <div className="contact__dates flex flex-col justify-center items-center h-[250px] py-[50px] gap-[15px] text-center md:col-span-2">
                        <div>
                            <h3><strong>Dirección</strong></h3>
                            <p>Centro Historico de la Ciudad de México, Lomas Nuevas, Callejón 28</p>
                        </div>
                        <div>
                            <h3><strong>Correo Electronico</strong></h3>
                            <p>contactbussines@example.com</p>
                        </div>
                        <div>
                            <h3><strong>Número Telefonico</strong></h3>
                            <p>(+52) 55 1234 1234</p>
                        </div>
                    </div>
                    <div className="contact__social-media bg-gray-200 flex justify-center items-center gap-[15px] h-[250px] py-[50px]">
                        <a href="#">
                            <img src="./brand-whatsapp.png" alt="whatsapp" className="max-w-[25px]" />
                        </a>
                        <a href="#">
                            <img src="./brand-facebook.png" alt="facebook" className="max-w-[25px]" />
                        </a>
                        <a href="#">
                            <img src="./brand-x.png" alt="twitter" className="max-w-[25px]" />
                        </a>
                    </div>
            </section>
        </>
    );
}