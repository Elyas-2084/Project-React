import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { AnimatePresence } from 'framer-motion';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import DetailProduct from './Pages/DetailProduct';
import Auth from './Pages/Auth';
import AboutUs from './Pages/AboutUs';
import Cart from './Pages/Cart';
import Categories from './Pages/Categories';
import ContactUs from './Pages/ContactUs';
import Offers from './Pages/Offers';
import NotFound from './Pages/NotFound';
import ScrollToTop from './Components/ScrollToTop';
import PageTransition from './Components/PageTransition';
import { useSelector } from 'react-redux';
import { Bounce, ToastContainer } from 'react-toastify';

function App() {

  const { token } = useSelector(state => state.authRedux);

  const location = useLocation();

  return (
    <div>

      <ScrollToTop />

      <Navbar />

      <main className='main-content'>

        <AnimatePresence mode="wait" initial={false}>

          <Routes location={location} key={location.pathname}>

            <Route path='/' element={<PageTransition><Home /></PageTransition>} />

            <Route path='/products/:categoryId/:categoryName' element={<PageTransition><Products /></PageTransition>} />

            <Route path='/detail-product/:id/:name' element={<PageTransition><DetailProduct /></PageTransition>} />

            <Route path='/about' element={<PageTransition><AboutUs /></PageTransition>} />

            <Route path='/categories' element={<PageTransition><Categories /></PageTransition>} />

            <Route path='/contact' element={<PageTransition><ContactUs /></PageTransition>} />

            <Route path='/offers' element={<PageTransition><Offers /></PageTransition>} />

            <Route path='/auth' element={token ? <Navigate to='/' /> : <PageTransition><Auth /></PageTransition>} />

            <Route path='/cart' element={token ? <PageTransition><Cart /></PageTransition> : <Navigate to='/auth' />} />

            <Route path='*' element={<PageTransition><NotFound /></PageTransition>} />

          </Routes>

        </AnimatePresence>

        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
          className={'fs-6 fw-medium'}
        />
      </main>

      <Footer />

    </div>
  );
}

export default App;