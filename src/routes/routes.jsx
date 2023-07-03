import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ProductsView } from "../pages/productsView/productsView";

export function RoutesPath() {

  return (
    <Router>
      <Routes>
        <Route path="/list" element={<ProductsView />} />
      </Routes>
    </Router>
  );
}

