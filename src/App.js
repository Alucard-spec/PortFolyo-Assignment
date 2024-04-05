import About from "./components/About";
import Hero from "./components/Hero";
import { Route,Routes } from "react-router-dom";


function App() {
  
  return (
    <div className="App">

<Routes>

<Route exact path="/" element={<Hero/>} />
<Route path="/about" element={<About/>}/>
</Routes>

    </div>
  );
}

export default App;
