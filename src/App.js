import "./app.css"
import Home from './Pages/Home';
import { Route, Routes } from "react-router-dom";
import About from './Pages/about';
import Header from "./Components/Header";
import Location from "./Pages/Location";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import Features from "./Pages/Features";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/location" element={<Location/>} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/features" element={<Features />} />
      </Routes>
      <Header />

    </>
  );
}

export default App;
