import { useParams } from "react-router-dom";
import Header from "../Component/Header";
import { products } from "../Utilis/products-utils";
import Sidebar from "../Component/Sidebar";

import "./ProductDetails.scss";

const ProductDetailsPage = (ad) => {

      const {productId}=useParams();
      // J'utilise la fonction useParams afin de faire le lien avec l'Id et l'URL
      
      const idInt = parseInt(productId)
      //permet de convertir le type de id (chaine de caractères)
      //car récupérée dans l'url
      //vers un integer
      //il vaut mieux faire la conversion soit même
      //et comparer avec triple égal (strict)
      //plutôt que laisser JS faire la conversion et comparer avec double égal
      
      
      const productFound = products.find((product)=>{
        return product.id === idInt;
      });
      // La fonction find permet de faire correspondre l'Id du produit recherché avec l'id du tableau

        return (
        <>
            <Header/>
            <main>
            <Sidebar sidebarTitle={`Vous consultez le produit : ${productFound.title}`}/>
              {productFound?(
                <article>
                  <h2>Détails du produit:</h2>
                  <p>{productFound.title}</p>
                  <p>Date de publication: {productFound.publicationDate}</p>
                  <p>Prix: {productFound.price} euros</p>
                  <p>Description du produit: {productFound.description}</p>
                  <p><img className="pic" src={productFound.img} alt={productFound.name} /></p>
                </article>
              ) : (
                <p>Produit non trouvé</p>
              )}   
            </main>
        </>
    )
}

export default ProductDetailsPage;

// Une page de détail d'un produit doit afficher le détail d'un produit (grâce à l'id du produit à afficher dans l'url)