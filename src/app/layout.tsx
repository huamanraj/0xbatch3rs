import type { Metadata } from "next";
import { Montserrat, VT323 } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";


export const metadata: Metadata = {
  title: "0xbatch3rs",
  description: "",
  icons: {
    icon: '/terminal-logo.svg',
    shortcut: '/terminal-logo.svg',
  },
};

export const sylarRoundUltra = localFont({
  src: './assets/font/sylar-round-ultra.woff',
  variable: '--font-sylar-rounded',
});

export const vt323 = VT323({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-vt323',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sylarRoundUltra.variable} ${vt323.variable} ${montserrat.variable} antialiased bg-brand-primary`}>
        {children}
      </body>
    </html>
  );
}