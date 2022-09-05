import './App.css';
import MainPage from './components/MainPage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ProductDetails from './components/ProductDetails';
import OrderPage from './components/OrderPage';
import Cart from './components/Cart';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/:id' element={<ProductDetails />} />
          <Route path='/order' element={<OrderPage />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
