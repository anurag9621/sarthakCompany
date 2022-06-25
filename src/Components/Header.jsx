import { Link } from "react-router-dom"

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50);
});
function togglesidebar() {
    document.getElementById("sidebar").classList.toggle("active");
  }
const Header = () => {
    return (
        <header>
            <div className="left_one_logo">
                <Link to="/">
                    <h1>MRS</h1>
                </Link>
            </div>
            <div className="center_one_menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/features">Features</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/location">Location</Link>
                    </li>
                </ul>
            </div>
            <div className="right_one_burger_menu">
                <li className="topo">
                    <div className="toggle_btn" onClick={togglesidebar}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </li>
            </div>
        </header>

    )
}

export default Header;