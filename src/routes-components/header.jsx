'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const lightTheme = {
  body: "#fff",
  text: "#333"
};

const darkTheme = {
  body: "#111",
  text: "#eee"
};

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    transition: background-color 0.3s, color 0.3s;
  }
`;

export default function Header() {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handlerOpenNavbar = () => {
    setNavIsOpen(!navIsOpen);
  }

  const handleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    localStorage.setItem('isDarkMode', JSON.stringify(newMode))
  }

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('isDarkMode')
    if (savedDarkMode !== null) {
      setIsDarkMode(JSON.parse(savedDarkMode));
    }
  }, [])

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <header className={`flex justify-between items-center gap-[10px] py-[10px] px-[25px] w-full h-[70px]`}>
        <Link href="/">
          <img src={`./coin-bitcoin${isDarkMode ? '-light' : ''}.png`} alt="Logo" className="max-w-[45px]" />
        </Link>
        <nav className={`absolute top-[70px] left-0 w-full gap-[20px] justify-center items-center md:relative md:top-0 md:flex ${navIsOpen ? 'flex' : 'hidden'}`}>
          <Link href="/">Inicio</Link>
          <Link href="/contacto">Contacto</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/sobre-nosotros">Nosotros</Link>
        </nav>
        <div className="flex gap-[15px]">
          <img src={`./${isDarkMode ? 'sun' : 'moon'}.png`} alt={isDarkMode ? 'sun' : 'moon'} className="max-w-[25px] cursor-pointer" onClick={handleDarkMode} />
          <img src="./menu-2.png" alt="menu" className="max-w-[25px] cursor-pointer md:hidden" onClick={handlerOpenNavbar} />
        </div>
      </header>
      </ThemeProvider>
    </>
  )
}