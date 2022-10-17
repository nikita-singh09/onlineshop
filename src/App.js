import Signup from "./pages/Signup";
import "./App.css";
import Store from "./store/Store";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Header from "./components/Header";
import Product from "./pages/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddToCart from "./pages/AddToCart";
import { Provider } from "react-redux";

function App() {
   return (
      <>
         <Provider store={Store}>
            <BrowserRouter>
               <Header/>
               <Routes>
                  {/* <Route exact path="/" element={<Login />} /> */}
                  <Route path="/onlineshop" element={<Home />} />
                  {/* <Route path="/signup" element={<Signup />} /> */}
                  <Route path="/product" element={<Product />} />
                  <Route path="/cart" element={<AddToCart/>}/>
               </Routes>
            </BrowserRouter>
         </Provider>
      </>
   );
}

export default App;
