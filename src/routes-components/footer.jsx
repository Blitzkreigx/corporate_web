import Link from "next/link"

export default function Footer({ isDarkMode, handleDarkMode }) {
    return (
        <>
            <footer className='grid grid-cols-1 justify-center items-center md:grid-cols-3 pt-[10px]'>
              <div className="p-[10px]">
                <nav className='flex justify-center items-center gap-[10px]'>
                  <Link href="/">Inicio</Link>
                  <Link href="/contacto">Contacto</Link>
                  <Link href="/servicios">Servicios</Link>
                  <Link href="/acerca-de">Acerca de</Link>
                </nav>
              </div>
              <div className="flex flex-col justify-center items-center p-[10px]">
                <a href="">Políticas de Privacidad</a>
                <a href="">Derechos Reservados</a>
              </div>
              <div className="flex justify-center items-start gap-[10px] p-[10px]">
                <a href="https://web.whatsapp.com/" target='_BLANK'>
                    <img src={`${isDarkMode ? './brand-whatsapp-light.png' : './brand-whatsapp.png'}`} alt="whatsapp" className="max-w-[25px]" />
                </a>
                <a href="https://www.facebook.com/" target='_BLANK'>
                    <img src={`${isDarkMode ? './brand-facebook-light.png' : './brand-facebook.png'}`} alt="facebook" className="max-w-[25px]" />
                </a>
                <a href="https://twitter.com/" target='_BLANK'>
                    <img src={`${isDarkMode ? './brand-x-light.png' : './brand-x.png'}`} alt="x" className="max-w-[25px]" />
                </a>
              </div>
            </footer>
        </>
    )
}