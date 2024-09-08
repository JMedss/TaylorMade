import './globals.css'
import LocalizationProviderWrapper from './components/LocalizationProvider'
import ToasterContext from './context/ToasterContext'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Provider from './context/AuthContext'
import CookieBanner from './components/CookieBanner'

export const metadata = {
  title: 'Taylor-Made Barber Shop',
  description: 'A barber shop for everyone. Receive a multi-cultural experience at Taylor-Made Barber Shop. Our expert barbers cater to all hair types, ensuring you leave feeling confident and stylish. Explore a world of grooming possibilities today!',
  icons: {
    icon: [
      "/faviconlico?v=4"
    ],
    apple: [
      "/apple-touch-icon.png?v=4"
    ],
    shortcut: [
      "/apple-touch-icon.png"
    ]
  },
  manifest: "/site.webmanifest"
}
 
export default function RootLayout({ children }) {


  return (
    <html lang="en" suppressHydrationWarning>
        <meta name="theme-color" content="#BA0810"/>
      <meta name="msapplication-navbutton-color" content="#BA0810"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="#BA0810" />
      <LocalizationProviderWrapper>
        <body>
          <CookieBanner />
            <ToasterContext />
              <Navbar />
                <Provider>
                  {children}
                </Provider>
              <Footer />
        </body>
      </LocalizationProviderWrapper>
    </html>
  )
}
