import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nombre de la empresa",
  description: "Descripción de la empresa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header className="flex justify-between items-center gap-[10px] py-[10px] px-[25px] absolute w-full">
          <Link href="/">
            <img src="./coin-bitcoin.png" alt="Logo" className="max-w-[45px]" />
          </Link>
          <nav className="hidden justify-center items-center gap-[20px] md:flex">
            <Link href="/">Inicio</Link>
            <Link href="/contacto">Contacto</Link>
            <Link href="/servicios">Servicios</Link>
            <Link href="/sobre-nosotros">Sobre Nosotros</Link>
          </nav>
          {/* CTA (Llamada a la acción)  */}
          {/* <button className="py-[5px] px-[10px] border-[1px] border-gray-300 rounded-[4px] hover:bg-gray-100">Contactanos</button> */}
          <div className="flex gap-[15px]">
            <img src="./moon.png" alt="moon" className="max-w-[25px] cursor-pointer" />
            <img src="./sun.png" alt="sun" className="max-w-[25px] cursor-pointer hidden" />
            <img src="./menu-2.png" alt="menu" className="max-w-[25px] cursor-pointer md:hidden" />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
