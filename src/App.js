import './App.css';
import Header from './comm/header/Header';
import { BrowserRouter as Router , Switch , Route} from "react-router-dom";
import Pages from './pages/Pages'
import Data from './components/flashDeals/Data'
import { useState } from 'react';
import Cart from './comm/cart/Cart';
import Sdata from './components/shop/Sdata';
import Footer from './comm/footer/Footer';

import Login from './comm/login/Login';
import Register from './comm/login/Register';
import Contact from './comm/contact/Contact';
import UserAccount from './comm/UserAccount/user';

function App() {

  const { productItems } = Data
  const { shopItems } = Sdata
  const [cartItem, setCardItem] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const addToCart = (product) =>{
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCardItem(cartItem.map((item) =>(item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    }
    else {
    setCardItem([...cartItem, { ...product, qty: 1 }]);
  }
  }
  const decreaseQty = (product) =>{
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCardItem(cartItem.filter((item) => item.id !== product.id))
    }else{
      setCardItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  const handleLogin = () => {
    setIsLoggedIn(true);
  }
  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <>
      <Router>
        <Header cartItem={cartItem} isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
        <Switch>
          <Route path="/" exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems}/>
          </Route>
          <Route path="/cart" exact>
            <Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
          <Route path="/login" exact>
            <Login handleLogin={handleLogin}/> 
          </Route>
          <Route path="/register" exact>
            <Register/> 
          </Route>
          <Route path="/contact" exact>
            <Contact useState={useState}/> 
          </Route>
          <Route path="/user" exact>
            <UserAccount isLoggedIn={isLoggedIn} /> 
          </Route>
        </Switch>
        <Footer/>
      </Router>     
    </>
  );
}

export default App;
