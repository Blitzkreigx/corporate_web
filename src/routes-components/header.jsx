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
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      transition: background-color 0.3s, color 0.3s;
    }
    .contact__dates {
      background-color: ${isDarkMode ? 'rgb(25,25,25)' : '#ccc'};
    }

    .contact__social-media {
      background-color: ${isDarkMode ? 'rgb(50,50,50)' : '#bbb'};
    }

    .services {
      background-color: ${isDarkMode ? '#171717' : '#fff'};
      border: 1px solid ${isDarkMode ? '#171717' : '#ccc'};
    }

    .services-star {
      background-color: ${isDarkMode ? '#3d3d3d' : '#eee'};
      border: 1px solid ${isDarkMode ? '#171717' : '#ccc'};
    }

    .testimonials {
      background-color: ${isDarkMode ? '#171717' : '#fff'};
      border: 1px solid ${isDarkMode ? '#171717' : '#ccc'};
    }
  `;

  const handlerOpenNavbar = () => {
    setNavIsOpen(!navIsOpen);
  }

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <header className={`flex justify-between items-center gap-[10px] py-[10px] px-[25px] w-full h-[70px] mb-[20px]`}>
        <Link href="/">
          <img src={`${isDarkMode ? './app-window-light.png' : './app-window.png'}`} alt="Logo" className="max-w-[45px]" />
        </Link>
        <nav className={`absolute top-[70px] left-0 w-full gap-[20px] justify-center items-center md:relative md:top-0 md:flex ${navIsOpen ? 'flex' : 'hidden'}`}>
          <Link href="/">Inicio</Link>
          <Link href="/contacto">Contacto</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/sobre-nosotros">Nosotros</Link>
        </nav>
        <div className="flex gap-[15px]">
          <img src={`./${isDarkMode ? 'sun' : 'moon'}.png`} alt={isDarkMode ? 'sun' : 'moon'} className="max-w-[25px] cursor-pointer" onClick={handleDarkMode} />
          <img src={`${isDarkMode ? './menu-2-light.png' : './menu-2.png'}`} alt="menu" className="max-w-[25px] cursor-pointer md:hidden" onClick={handlerOpenNavbar} />
        </div>
      </header>
      </ThemeProvider>
    </>
  )
}
