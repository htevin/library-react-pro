import Books from "./Pages/Books";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./index.css";
import { books } from "./data";

import { BrowserRouter as Router, Route } from "react-router-dom";
import BookInfo from "./Pages/BookInfo";
import Cart from "./Pages/Cart";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />}/>
        <Route path='/books/:id' render={() => <BookInfo books={books}/>} />
        <Route path="/cart"  render={() => <Cart books={books} />}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
