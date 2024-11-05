import './header.scss'
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"


export const Header = () => {

    const location = useLocation();

    const checkActiveLink = (path) => {
        return location.pathname.startsWith(path) ? 'link__text active' : 'link__text';
    }

    return(
        <header className="header">
            <nav className="header__navbar">
                <ul className="header__navbar__link-list">
                    <li className="header__navbar__link-list__link">
                        <NavLink className='link__text' to={'/'}>Home</NavLink>
                    </li>
                    <li className="header__navbar__link-list__link">
                        <Link className={checkActiveLink('/pokemon')} to={'/pokemons/0'}>Pokemon</Link>
                    </li>
                    <li className="header__navbar__link-list__link">
                        <Link className={checkActiveLink('/move')} to={'/moves/0'}>Moves</Link>
                    </li>
                    <li className="header__navbar__link-list__link">
                        <Link className={checkActiveLink('/item')} to={'/items/0'}>Items</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}