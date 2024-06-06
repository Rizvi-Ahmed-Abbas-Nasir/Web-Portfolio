import Header from './Header';
import Footer from './Footer';
import './CSS/Style.css';


import { Raleway } from 'next/font/google'
import { Roboto } from 'next/font/google'


const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['100'] 
})


export const metadata = {
  title: ' Web Portfolio - Rizvi Ahmed Abbas',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={roboto.className}>
        <Header />
        <div>{children}</div>
        
      </body>
    </html>
  )
}
