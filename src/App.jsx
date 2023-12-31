import HomePage from "./Page/HomePage";
import ProductsPage from "./Page/ProductsPage";
import ProductDetailsPage from "./Page/ProductDetailsPage";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productspage" element={<ProductsPage />} />
          <Route path="/product/:productId/details" element={<ProductDetailsPage />} />
        </Routes>
      </BrowserRouter>
  );
}
// Dans la Route, j'écris l'id du produit dans l'URL afin qu'il récupére l'ID sélectionné
export default App;

// Créez une nouvelle appli react pour un ecommerce qui vend de l'electro ménager








