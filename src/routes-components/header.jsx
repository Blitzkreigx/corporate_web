'use client'

import Link from "next/link";
import { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const lightTheme = {
  body: "#fff",
  text: "#000"
};
const darkTheme = {
  body: "#000",
  text: "#ccc"
};

export default function Header({ handleDarkMode, isDarkMode }) {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const GlobalStyles = createGlobalStyle`
    body {
      background-color: ${props => props.theme.body};
      color: ${props => props.theme.text};
      transition: background-color 0.3s, color 0.3s;
    }

    .services {
      background-color: ${isDarkMode ? '#111' : '#fff'};
      border: 1px solid ${isDarkMode ? '#111' : '#ccc'};
    }

    .services-star {
      background-color: ${isDarkMode ? '#333' : '#eee'};
      border: 1px solid ${isDarkMode ? '#111' : '#ccc'};
    }

    .testimonials {
      background-color: ${isDarkMode ? '#111' : '#fff'};
      border: 1px solid ${isDarkMode ? '#111' : '#ccc'};
    }

    .input {
      background-color: ${isDarkMode ? '#111' : '#eee'};
      border: ${isDarkMode ? 'none' : '1px solid #eee'};
    }

    .button {
      background-color: ${isDarkMode ? '#333' : '#222'};
    }

    .member {
      border: 1px solid ${isDarkMode ? '#111' : '#eee'}
    }

    .contact {
      background-color: ${isDarkMode ? '#111' : '#ddd'};
    }
  `;

  const handlerOpenNavbar = () => {
    setNavIsOpen(!navIsOpen);
  }

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <header className={`flex justify-between items-center gap-[10px] py-[10px] px-[25px] w-full h-[70px] z-30 relative text-white`}>
        <Link href="/" className="flex flex-row gap-[5px]">
          <img src='./info-octagon-light.svg' alt="Logo" className="max-w-[50px]" />
        </Link>
        <nav className={`absolute top-[70px] left-0 w-full gap-[20px] justify-center items-center md:relative md:top-0 md:flex ${navIsOpen ? 'flex' : 'hidden'}`}>
          <Link href="/">Inicio</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/acerca-de">Acerca de</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>
        <div className="flex gap-[15px]">
          <button onClick={handleDarkMode}>
            <img src={`./${isDarkMode ? 'sun' : 'moon'}.png`} alt={isDarkMode ? 'sun' : 'moon'} className="max-w-[25px] cursor-pointer" />
          </button>
          <button onClick={handlerOpenNavbar}>
            <img src='./menu-2-light.png' alt="menu" className="max-w-[25px] cursor-pointer md:hidden" />
          </button>
        </div>
      </header>
      </ThemeProvider>
    </>
  )
}
