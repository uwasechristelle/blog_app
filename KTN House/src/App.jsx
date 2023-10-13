import "./App.css";
import Topbar from "./topbar/Topbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { singlepage } from "./pages/singlepage";

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
          <Route path="/singlepost" element={<singlepost />} />
        </Routes>
      </Router>
      {/* <Home /> */}
    </>
  );
}

export default App;
