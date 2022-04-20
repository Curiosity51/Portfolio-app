import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Welcome from "./pages/Welcome";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Kasia from "./pages/Kasia";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Welcome/>} />
                <Route path="/kasia" element={<Kasia/>} />
                <Route path="/about" element={<AboutMe/>} />
                <Route path="/portfolio" element={<Portfolio/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </Router>
    );
}

export default App;
