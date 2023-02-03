import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./Component/NavigationBar";
import ProdDetails from "./Component/ProdDetails";
import ProductList from "./Component/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/details/:id" element={<ProdDetails />} />
      </Routes>
    </div>
  );
}

export default App;
