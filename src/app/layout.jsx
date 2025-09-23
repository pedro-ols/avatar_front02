import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/header";

export const metadata = {
  title: "Avatar - Programação Front-End 02",
  description: "Projeto de estudo de consumo de API com Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
