import About from "./components/About";
import Hero from "./components/Hero";
import { Route,Routes } from "react-router-dom";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";


function App() {
  
  return (
    <div className="App">

<Routes>

<Route exact path="/" element={<Hero/>} />
<Route path="/about" element={<About/>}/>
<Route path="/timeline" element={<Timeline/>}/>
<Route path="/skills" element={<Skills/>}/>
<Route path="/services" element={<Services/>}/>
<Route path="/projects" element={<Projects/>}/>
<Route path="/testimonials" element={<Testimonials/>}/>
</Routes>

    </div>
  );
}

export default App;
