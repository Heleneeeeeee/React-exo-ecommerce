import { Link } from "react-router-dom";
import './Header.scss';

const Header=()=> {
    return (
        <header>
            <h1>Super Site d'E-commerce</h1>
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