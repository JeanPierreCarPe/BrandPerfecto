import './globals.css'
import { IBM_Plex_Sans } from 'next/font/google'

const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ibm.variable}`}>
      <body>{children}</body>
    </html>
  )
}
