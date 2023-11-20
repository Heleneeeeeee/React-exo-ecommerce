import { useParams } from "react-router-dom";
import Header from "../Component/Header";
import "./ProductDetails.scss";

const ProductDetailsPage = () => {
    const products = [
        {
          id: 1,
          title: "micro-onde",
          publicationDate: "2021-09-01",
          price: 100,
          description: "chauffe les aliments",
          category: "cuisine",
          img:"https://img.freepik.com/vecteurs-premium/vecteur-four-micro-ondes-bleu-fond-blanc_410516-75357.jpg?w=740"
        },
        {
          id: 2,
          title: "four",
          publicationDate: "2021-10-01",
          price: 150,
          description: "chauffe les aliments",
          category: "cuisine",
          img:"https://img.freepik.com/vecteurs-premium/dessin-four-rouge-four-bleu-rouge_410516-79342.jpg?w=2000"
        },
        {
          id: 3,
          title: "lave-linge",
          publicationDate: "2021-11-01",
          price: 400,
          description: "lave les linges",
          category: "electromenager",
          img:"https://img.freepik.com/vecteurs-premium/illustration-machine-laver-vecteur-machine-laver-dessin-machine-laver_82475-38.jpg?w=740"
        },
        {
          id: 4,
          title: "lave-vaisselle",
          publicationDate: "2021-08-01",
          price: 200,
          description: "lave les vaisselles",
          category: "cuisine",
          img:"https://img.freepik.com/vecteurs-premium/ouvrez-lave-vaisselle-vaisselle-propre-illustration-equipement-cuisine_313242-420.jpg?w=826"
        },
        {
          id: 5,
          title: "aspirateur",
          publicationDate: "2022-02-01",
          price: 720,
          description: "aspire les poussières",
          category: "electromenager",
          img: "https://img.freepik.com/vecteurs-premium/aspirateur-violet-pour-nettoyage-salete-poussiere-equipement-nettoyage-illustration-vectorielle_456865-1844.jpg?w=740"
        },
        {
          id: 6,
          title: "cuisinière",
          publicationDate: "2022-12-01",
          price: 350,
          description: "cuit les aliments",
          category: "cuisine",
          img:"https://img.freepik.com/vecteurs-premium/cuisiniere-gaz-electrique-dans-cuisine-four-vaisselle-illustration-dessin-anime-plane-vectorielle_575709-344.jpg?w=996"
        },
        {
          id: 7,
          title: "réfrigérateur",
          publicationDate: "2022-03-01",
          price: 600,
          description: "refroidit les aliments",
          category: "cuisine",
          img:"https://img.freepik.com/vecteurs-premium/refrigerateur-refrigerateur-icone-dans-style-comique-congelateur-conteneur-vector-cartoon-illustration-pictogramme-splash-effet_157943-4397.jpg?w=740"
        },
        {
          id: 8,
          title: "congélateur",
          publicationDate: "2022-04-01",
          price: 450,
          description: "congèle les aliments",
          category: "cuisine",
          img:"https://img.freepik.com/vecteurs-premium/icone-refrigerateur-refrigerateur-dans-style-comique-conteneur-congelateur-vector-cartoon-illustration-pictogramme-refrigerateur-business-concept-effet-splash_157943-6892.jpg?w=740"
        },
        {
          id: 9,
          title: "télévision",
          publicationDate: "2022-10-10",
          price: 700,
          description: "affiche des images",
          category: "electromenager",
          img:"https://img.freepik.com/psd-gratuit/tv-illustration_23-2150690497.jpg?w=740&t=st=1700413728~exp=1700414328~hmac=fba3dbdd95c23c02bf62137766162a56642b7c38e6cb6a0debb238aef824e5e8"
        },
        {
          id: 10,
          title: "ordinateur",
          publicationDate: "2022-06-01",
          price: 1000,
          description: "affiche des images",
          img:"https://img.freepik.com/vecteurs-libre/concept-design-web-dessine-main_23-2147839742.jpg?w=740&t=st=1700413773~exp=1700414373~hmac=4262265bc0c0bde8bd95474366cab50e71c0f528ebf408ab50705433cdcff5b4"
        },
      ];

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