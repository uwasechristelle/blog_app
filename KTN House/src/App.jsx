import "./App.css";
import Topbar from "./topbar/Topbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Single } from "./single/single";
import { Login } from "./pages/Logins/Login";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/single" element={<Single />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
      {/* <About /> */}
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
