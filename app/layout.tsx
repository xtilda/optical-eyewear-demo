import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title: 'OPTICAL Eyewear — Optique, Solaire & Audition', description: 'Vos opticiens à Ermont, Élancourt et en Île-de-France. Optique, solaire, réservation de lentilles et audioprothèse.', icons:{icon:'/favicon.svg',shortcut:'/favicon.svg'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="fr"><body>{children}</body></html>}
