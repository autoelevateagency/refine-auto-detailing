import type { Metadata } from "next";
import { Archivo, Manrope } from "next/font/google";

import { LocaleProvider } from "@/context/locale-context";
import { getDictionary } from "@/data/dictionary";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const dict = getDictionary("EN");

export const metadata: Metadata = {
  title: dict.meta.title,
  description: dict.meta.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${archivo.variable}`}>
      <body>
        <LocaleProvider initialLocale="EN">{children}</LocaleProvider>
      </body>
    </html>
  );
}
