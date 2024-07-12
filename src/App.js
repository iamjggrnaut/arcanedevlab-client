import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ProductsPage from './pages/Products';
import MoblieNav from './components/MoblieNav';

function App() {

  return (
    <div className="App">
      <Navbar />
      <MoblieNav />
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
