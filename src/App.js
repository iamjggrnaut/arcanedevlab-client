import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ServicePage from './pages/ServicePage';
import ProductsPage from './pages/Products';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage />} />
        {/* <Route path='/service' element={<ServicePage />} /> */}
        <Route path='/*' element={<Navigate to={'/'} replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
