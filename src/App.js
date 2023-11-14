import Featured from "./components/Featured";
import Highlights from "./components/Highlights";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import './index.css'




function App() {
  return (
    <div className="App">
     <Nav/>
     <Landing/>
     <Highlights/>
     <Featured/>
    </div>
  );
}

export default App;
