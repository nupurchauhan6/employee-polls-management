import { Link } from "react-router-dom";

const Home = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to="/">Sign In</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Home;