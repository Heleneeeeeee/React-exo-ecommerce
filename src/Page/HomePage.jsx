import { Link } from "react-router-dom";
import Header from "../Component/Header";
import { products, productsInDescendingOrder } from "../Utilis/products-utils";
import Sidebar from "../Component/Sidebar";
import "./HomePage.scss"

const HomePage = () => {

      new Date("2022-06-01")

      const kitchenProducts = products.filter((product) =>
      product.category === "cuisine")

      kitchenProducts.sort((prodA,prodB)=> new Date(prodA.publicationDate)- new Date(prodB.publicationDate))

      const lastThreePublishedKitchenProducts = kitchenProducts.slice(-3)

      const TheThreeCheapestProducts = productsInDescendingOrder.slice(0,3)
      
  return (
    <>
    <Header pageTitle= "HomePage"/>
    {/* Dans cette page, je veux qu'il soit écrit "HomePage" */}
    <main>
      <Sidebar sidebarTitle="Mon Super site d'E-Commerce"/>
      <article className="kitchenproducts">
        <h2>Les trois derniers produits dans la catégorie "Cuisine"</h2>
          <ul>
      {lastThreePublishedKitchenProducts.map((product)=>{
        return (
          <Link to={"/product/" +product.id + "/details"}>
          <>
              <li>{product.title}</li>
          </>
      </Link>
        );
      })}
        </ul>
      </article>
      <article className="kitchenproducts">
        <h2>Les trois produits les moins chers:</h2>
          <ul>
      {TheThreeCheapestProducts.map((product)=>{
        return (
          <Link to={"/product/" +product.id + "/details"}>
              <>
                <li>{product.title}</li>
              </>
          </Link>
      );
  })}
        </ul>
      </article>
    </main>
  </>
  )
}

export default HomePage;

// Une page d'accueil doit afficher :
// --  Les trois derniers produits publiés, qui sont dans la catégorie "cuisine"
// -- les trois produits les moins chers
// Dans la page d'accueil et dans la page de liste des produits, le click sur un produit doit permettre d'accéder à la page de détail du produit

// dans l'appli actuelle, il faut ajouter une barre latérale qui s'affiche sur toute les pages
// sur la page d'accueil, la barre latérale affiche le titre du site
// sur la page de liste de produits, elle affiche ("vous consultez la liste des produits")
// sur la page de détail du produit, elle affiche le titre du produit actuel ("vous consultez le produit ....")