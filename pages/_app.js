import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

// used for persistance between pages

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  ) 
}

export default MyApp
