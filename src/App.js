import Books from "./Pages/Books";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./index.css";
import { books } from "./data";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BookInfo from "./Pages/BookInfo";
import Cart from "./Pages/Cart";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function changeQuantity(book, quantity){
    setCart(cart.map(item =>  item.id === book.id
      ?
        {
          ...item,
          quantity: +quantity
        }
      :  item
      
    ))
  }

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}])
  }

  function removeItem(item){
    setCart(cart.filter(book => book.id !== item.id))
  }

  function numberOfItems(){
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })

    return counter
  }



  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => <BookInfo books={books} addToCart={addToCart} cart={cart}/>}
        />
        <Route path="/cart" render={() => <Cart books={books} cart={cart} removeItem={removeItem} changeQuantity={changeQuantity}/>} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
