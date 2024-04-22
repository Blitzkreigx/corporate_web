import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/routes-components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nombre de la empresa",
  description: "Descripción de la empresa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`relative ${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
