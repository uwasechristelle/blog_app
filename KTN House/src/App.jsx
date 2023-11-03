import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Single } from "./single/single";
import { Login } from "./pages/Logins/Login";
import { Account } from "./pages/Register/account";
import Dashboard from "./pages/Dashboard/dashboard";
import { WebLayout } from "./webLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DashLayout } from "./pages/Dashboard/DashLayout";
import { Postpage } from "./pages/Dashboard/post-page";
import { Commentpage } from "./pages/Dashboard/comment-page";
import { Addblog } from "./pages/Dashboard/Addblog";
import { Update } from "./pages/Dashboard/update";

function App() {
  return (
    <>
      <Routes>
        <Route element={<WebLayout />}>
          <Route path="/" element={<Home />} exact />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/single/:_id" element={<Single />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/account" element={<Account />} />
        </Route>
        <Route element={<DashLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/post-page" element={<Postpage />} />
          <Route path="/comment-page" element={<Commentpage />} />
          <Route path="/Addblog" element={<Addblog />} />
          <Route path="update/:id" element={<Update />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
