import { Link } from "react-router-dom";
import './Header.scss';

const Header=({ pageTitle })=> {
// Je crée un props dans mon composant Header dans lequel je lui fait passé un paramètre afin que celui-ci change selon les pages

    return (
        <header>
            <h1>Mon Super site d'E-Commerce</h1>
            <p className="changetitle">{ pageTitle}</p>
            <nav>
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/productspage">Products</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header