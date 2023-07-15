import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ProductsView } from "../pages/productsView/productsView";
import { ProductDetails } from "../pages/productDetails/productDetails";
import { Cart } from "../pages/cart/cartView";
import { Login } from "../pages/login/login";

export function RoutesPath() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductsView />} />
        <Route path="*" element={<ProductsView />} />
        <Route path="/list" element={<ProductsView />} />
        <Route path="/item/:item" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </Router>
  );
}

