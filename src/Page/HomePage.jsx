import { Link } from "react-router-dom";
import Header from "../Component/Header";
import "./HomePage.scss"

const HomePage = () => {
    const products = [
        {
          id: 1,
          title: "micro-onde",
          publicationDate: "2021-09-01",
          price: 100,
          description: "chauffe les aliments",
          category: "cuisine",
        },
        {
          id: 2,
          title: "four",
          publicationDate: "2021-10-01",
          price: 150,
          description: "chauffe les aliments",
          category: "cuisine",
        },
        {
          id: 3,
          title: "lave-linge",
          publicationDate: "2021-11-01",
          price: 400,
          description: "lave les linges",
          category: "electromenager",
        },
        {
          id: 4,
          title: "lave-vaisselle",
          publicationDate: "2021-08-01",
          price: 200,
          description: "lave les vaisselles",
          category: "cuisine",
        },
        {
          id: 5,
          title: "aspirateur",
          publicationDate: "2022-02-01",
          price: 720,
          description: "aspire les poussières",
          category: "electromenager",
        },
        {
          id: 6,
          title: "cuisinière",
          publicationDate: "2022-12-01",
          price: 350,
          description: "cuit les aliments",
          category: "cuisine",
        },
        {
          id: 7,
          title: "réfrigérateur",
          publicationDate: "2022-03-01",
          price: 600,
          description: "refroidit les aliments",
          category: "cuisine",
        },
        {
          id: 8,
          title: "congélateur",
          publicationDate: "2022-04-01",
          price: 450,
          description: "congèle les aliments",
          category: "cuisine",
        },
        {
          id: 9,
          title: "télévision",
          publicationDate: "2022-10-10",
          price: 700,
          description: "affiche des images",
          category: "electromenager",
        },
        {
          id: 10,
          title: "ordinateur",
          publicationDate: "2022-06-01",
          price: 1000,
          description: "affiche des images",
        },
      ];

      const kitchenProducts = products.filter((product) =>
      product.category === "cuisine")
      
      const lastThreePublishedKitchenProducts = kitchenProducts.slice(-3)

      const productsInDescendingOrder = products.sort((prodA,prodB) => {
      return(prodA.price-prodB.price)
      }
      )
      
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