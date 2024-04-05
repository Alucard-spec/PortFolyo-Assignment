import About from "./components/About";
import Hero from "./components/Hero";
import { Route,Routes } from "react-router-dom";
import Timeline from "./components/Timeline";


function App() {
  
  return (
    <div className="App">

<Routes>

<Route exact path="/" element={<Hero/>} />
<Route path="/about" element={<About/>}/>
<Route path="/timeline" element={<Timeline/>}/>
</Routes>

    </div>
  );
}

export default App;
