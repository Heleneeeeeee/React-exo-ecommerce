import Header from "../Component/Header";
import ProductsList from "../Component/ProductsList";
import Sidebar from "../Component/Sidebar";

const ProductsPage = () => {
    return(
        <div>
            <Header pageTitle="Products"/>
            {/* Dans cette page, je veux qu'il soit écrit "Products" */}
            <main>
      
            <Sidebar sidebarTitle="Vous consultez la liste des produits"/>
            <ProductsList />
            </main>
        </div>

    )
}

export default ProductsPage;

// Une page produits doit afficher tous les produits, triés par prix (croissant)
// Dans la page d'accueil et dans la page de liste des produits, le click sur un produit doit permettre d'accéder à la page de détail du produit