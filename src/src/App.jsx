import {Routes, Route, } from 'react-router-dom';

import "./App.css";
import Homepage from "./Pages/Homepage";
import Aboutpage from "./Pages/Aboutpage";
import Contactpage from "./Pages/Contactpage";
import Projects from "./Pages/Projectpage";
import Modal from "./Pages/Modal";





function App() {
  return (
    <div className="">
      <Routes>
      
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/modal" element={<Modal />} />
        
      </Routes>
    </div>
  );
}

export default App;



