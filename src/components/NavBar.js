import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/new">Create New Poll</Link>
                </li>
                <li>
                    <Link to="/leadership">Leadership</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;