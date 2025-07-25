import type { Metadata } from "next";
import './globals.css'
import { AppProvider } from "./context/context";



export const metadata: Metadata = {
  title: "Pokedex",
  description: "Generated by create next app",
   icons: {
    icon: [
      { url: '/pokeball.webp' },
      { url: '/pokeball.webp', type: 'image/png' },
    ],
    apple: [
      { url: '/pokeballPNG.png' },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
