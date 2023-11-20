import { Link } from "react-router-dom";
import { productsInDescendingOrder } from "../Utilis/products-utils";

const ProductsList = () => {
    return (
        <>
        <h2>Tous les produits disponibles:</h2>
            <ul>
        {productsInDescendingOrder.map((product) =>{
           return (
            <Link to={"/product/" +product.id + "/details"}>
                <>
                    <li>{product.title}</li>
                </>
            </Link>
            //Le link est un élement qui permet d'ouvrir une autre page (ici ProductDetailsPage) après avoir cliqué dessus et ainsi rendre le site plus dynamique
        );
    })}
          </ul>
      </>
      )
    }

export default ProductsList;