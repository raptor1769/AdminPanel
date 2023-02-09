import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import NewProduct from "./pages/newProduct/NewProduct";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import Products from "./pages/products/Products";
import User from "./pages/user/User";
import UserList from "./pages/userList/UserList";

const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users/" element={<UserList />} />
          <Route path="user/:userId" element={<User />} />
          <Route path="newUser" element={<NewUser />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:productId" element={<Product />} />
          <Route path="newProduct" element={<NewProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
