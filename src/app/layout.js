import Header from './Header';
import Footer from './Footer';
import { Roboto } from 'next/font/google'

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400'] 
  })

export const metadata = {
  title: 'Web Portfolio - Rizvi Ahmed Abbas',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <div>{children}</div>
        <Footer/>
      </body>
    </html>
  )
}
