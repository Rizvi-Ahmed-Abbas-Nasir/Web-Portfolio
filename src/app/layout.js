import Header from './Header';
import Footer from './Footer';
import './CSS/Style.css';


import { Raleway } from 'next/font/google'

const raleway = Raleway({ 
  subsets: ['latin'],
  weight: ['300'] 
})

export const metadata = {
  title: ' Web Portfolio - Rizvi Ahmed Abbas',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={raleway.className}>
        <Header />
        <div>{children}</div>
        
      </body>
    </html>
  )
}
