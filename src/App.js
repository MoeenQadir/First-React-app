import  React from 'react';
import Home from "./components/Home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
      <div>
          <Router>
              <Header/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/About" element={<About/>}/>
                  <Route path="/Work" element={<Work/>}/>
                  <Route path="/Blog" element={<Blog/>}/>
                  <Route path="/Contact" element={<Contact/>}/>
                  </Routes>
              </Router>
      </div>
  )
}

export default App;
