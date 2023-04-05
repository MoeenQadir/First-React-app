import './App.css';
import Navbar from "./components/Navbar";
import ProductCategory from "./components/ProductCategory";
import ProductList from "./components/ProductList";
import {Link,BrowserRouter  as Router,Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import ProductDescription from "./components/ProductDescription";
function App() {
  return (
    <div className="App">


        <Router>
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/productlist"} element={<ProductList/>}/>
                <Route path={"/productcategory"} element={<ProductCategory/>}/>
                <Route path={"/productdescription"} element={<ProductDescription/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
