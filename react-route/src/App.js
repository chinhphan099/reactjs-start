import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Index from './components/Index';
import Product from './pages/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from './components/TopMenu';
import { CartProvider } from './contexts/Cart';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <TopMenu />
          <Route path="/" exact component={Index} />
          <Route path="/products/" exact component={Product} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
