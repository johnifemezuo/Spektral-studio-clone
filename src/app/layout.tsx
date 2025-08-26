import "./globals.css";
import { IBM_Plex_Mono } from 'next/font/google';
import { AnimatePresence } from "framer-motion";

const ibm = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['400','500','600','700'],
    variable: '--font-ibm-plex-mono'
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibm.className}
      >
         <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
      </body>
    </html>
  );
}
