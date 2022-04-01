import Navbar from '../components/Navbar'
import '../styles/globals.css'

// used for persistance between pages

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <Navbar/>
      <Component {...pageProps} />
    </div>
  ) 
}

export default MyApp
