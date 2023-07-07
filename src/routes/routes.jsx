import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ProductsView } from "../pages/productsView/productsView";
import { ProductDetails } from "../pages/productDetails/productDetails";

export function RoutesPath() {

  return (
    <Router>
      <Routes>
        <Route path="/list" element={<ProductsView />} />
        <Route path="/item/:item" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

