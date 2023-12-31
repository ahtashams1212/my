import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Children } from 'react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className ="bg-gray-700 px-5 py-5 flex gap-5">
          <Link href ="/">Home</Link>
          <Link href ="/powereagles"> Power Eagles </Link>
          <Link href ="/myteam"> My Team </Link>
          <Link href ="/myjourney"> My Journey </Link>
          <Link href ="/pr&marketing"> PR & Marketing</Link>
          <Link href ="/contactus"> ContactUs</Link>
        </header>
        {children}
        <footer className='bg-gray-500 px-5 py-5 flex justify-center'>
        <p>&copy; 2023 - All right reserved.</p> 
        </footer>
        
      </body>
    </html>
  )
}
