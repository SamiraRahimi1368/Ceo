import './globals.css'
import Header from '@/components/shared/Header'

const Layout = ({ children }) => {
    return <html lang="en">
        <head>
            <title>Sceo – SEO Services and Digital Marketing Agency – WordPress Theme</title>
            <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'/>
            <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet'/>


        </head>
        <body>
            <Header />
            {children}

        </body>
    </html>

}

export default Layout