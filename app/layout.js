import './globals.css'
import Header from '@/components/shared/Header'

const Layout = ({ children }) => {
    return <html lang="en">
        <head>
            <title>Sceo – SEO Services and Digital Marketing Agency – WordPress Theme</title>
        </head>
        <body>
            <Header />
            {children}

        </body>
    </html>

}

export default Layout