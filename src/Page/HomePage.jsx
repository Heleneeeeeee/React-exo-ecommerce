import { Link } from "react-router-dom";
import Header from "../Component/Header";
import { products } from "../Utilis/products-utils";
import { productsInDescendingOrder } from "../Utilis/products-utils";
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
    <Header />
    <main>
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