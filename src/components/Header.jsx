import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const isActive = (path) => {
        if (path === "/") {
            return location.pathname === path ? "active" : "";
        }
        return location.pathname.startsWith(path) ? "active" : "";
    };

    return (
        <div className="header">
            <div className="header-box">
                <h1
                    className="kaushan-script-regular"
                    onClick={() => navigate("/")}
                >
                    <img src="/book.gif" alt="logo" />
                    <span className="title01">Fairyland</span>
                    <span className="title02">your story</span>
                </h1>
                <i
                    className="fa-solid fa-bars menu-icon"
                    onClick={toggleMenu}
                ></i>
                <nav className={isMenuOpen ? "show-menu" : ""}>
                    <ul>
                        <li className={isActive("/")}>
                            <Link to="/" onClick={closeMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className={isActive("/origin")}>
                            <Link to="/origin" onClick={closeMenu}>
                                ORIGIN STORY
                            </Link>
                        </li>
                        <li className={isActive("/new")}>
                            <Link to="/new" onClick={closeMenu}>
                                NEW STORY
                            </Link>
                        </li>
                        <li className={isActive("/your")}>
                            <Link to="/your" onClick={closeMenu}>
                                YOUR STORY
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
