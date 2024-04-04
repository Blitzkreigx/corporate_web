export default function Contacto() {
    return (
        <>
            <section className="flex flex-col justify-center items-center min-h-screen md:flex-row">
                <div className=" w-full box-border p-[10px] text-center">
                    Google Maps
                </div>
                <div className="grid grid-rows-3 w-full box-border p-[10px] text-center">
                    <div>
                        <p>email@example.com</p>
                    </div>
                    <div className="row-span-2 flex justify-center items-center gap-[10px]">
                        <a href="#">
                            <img src="./brand-whatsapp.png" alt="whatsapp" className="max-w-[25px]" />
                        </a>
                        <a href="#">
                            <img src="./brand-facebook.png" alt="facebook" className="max-w-[25px]" />
                        </a>
                        <a href="#">
                            <img src="./brand-twitter.png" alt="twitter" className="max-w-[25px]" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}