import Header from "../Component/Header";
import ProductsList from "../Component/ProductsList";

const ProductsPage = () => {
    return(
        <div>
            <Header />
            <main>
            <ProductsList />
            </main>
        </div>

    )
}

export default ProductsPage;

// Une page produits doit afficher tous les produits, triés par prix (croissant)
// Dans la page d'accueil et dans la page de liste des produits, le click sur un produit doit permettre d'accéder à la page de détail du produit