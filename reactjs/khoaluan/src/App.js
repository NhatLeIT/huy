import "./App.css";
// import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Trangchu from "./components/pages/Trangchu";

import SignUp from "./components/pages/SignUp";
import Navbar1 from "./components/Navbar1";
import Khampha from "./components/pages/khampha";
import Footer from "./components/pages/Footer";
import Chitiet from "./components/pages/chitiet";

function App() {
  return (
    <Router>
      <Navbar1 />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" exact element={<Trangchu />} />
        <Route path="/chi-tiet" exact element={<Chitiet />} />
        <Route path="/dang-ky" exact element={<SignUp />} />
        <Route path="/kham-pha" exact element={<Khampha />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
