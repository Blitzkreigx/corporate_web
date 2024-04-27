'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/routes-components/header";
import Footer from "@/routes-components/footer";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false)

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
    <html lang="es">
      <body className={`relative ${inter.className}`}>
        <Header handleDarkMode={handleDarkMode} isDarkMode={isDarkMode} />
        {children}
        <Footer handleDarkMode={handleDarkMode} isDarkMode={isDarkMode} />
      </body>
    </html>
  );
}
