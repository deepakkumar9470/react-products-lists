import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProductDetail from './components/ProductDetail'
// import Offer from './components/Offer';
// import Header from './components/Header';
// import Poster from './components/Poster';
// import Filter from './components/Filter';

function App() {
  return (
    <div>
        
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/product/:id" element={ <ProductDetail/> } />

      </Routes>
    </div>
  );
}

export default App;
