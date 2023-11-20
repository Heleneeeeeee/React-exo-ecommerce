import { Link } from "react-router-dom";
import './Header.scss';

const Header=({ pageTitle})=> {
// Je crée un props dans mon composant Header dans lequel je lui fait passer un paramètre afin que celui-ci change selon les pages
    
    return (
        <header>
            <h1>Mon Super site d'E-Commerce</h1>
            <p className="changetitle">{ pageTitle}</p>
            <nav>
                <ul className="menu">
                    <Link to="/">{pageTitle== "HomePage"? <li className="navbar"><strong>Home</strong></li>: <li className="navbar">Home</li>}</Link>
                    <Link to="/productspage">{pageTitle== "Products"? <li className="navbar"><strong>Products</strong></li>: <li className="navbar">Products</li>}</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header