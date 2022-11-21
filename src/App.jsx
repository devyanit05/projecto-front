import { Routes, Route } from "react-router-dom";
import "./app.css";

import Navbar from "./components/header/Navbar";
import Profile from "./components/user/Profile";
import ChangePass from "./components/user/changePass";
// import CatNav from "./components/catNav/CatNav";
import Home from "./components/home/Home";
// import Footer from "./components/footer/Footer";
// import Signin from "./components/auth/Signin";
// import Signup from "./components/auth/Signup";
// import Cart from "./components/cart/Cart";
// import BuyNow from "./components/buynow/BuyNow";

import "./app.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}

        <Route exact path="/user-profile" element={<Profile />} />
        <Route exact path="/change-password" element={<ChangePass />} />

        {/* <Route exact path="/login" element={<Signin />} />
        <Route exact path="/register" element={<Signup />} /> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
