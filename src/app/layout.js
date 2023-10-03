import './globals.css'
import { Inter } from 'next/font/google'
import icon from './assets/tic-tac-toe-icon.PNG'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel='icon' href={icon.src}/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}