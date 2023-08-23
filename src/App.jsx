import {Routes, Route, } from 'react-router-dom';

import "./App.css";
import Homepage from "./Pages/Homepage";
import CreateBlog from "./Pages/CreateBlog";
import Contactpage from "./Pages/Contactpage";
import Projects from "./Pages/Projectpage";
import Search from "./Pages/Search"
import Login from "./signLog/Login"
import SignUp from './signLog/SignUp';





function App() {
  return (
    <div className="">
      <Routes>
      
          <Route path="/" element={<Homepage />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        
      </Routes>
    </div>
  );
}

export default App;



