import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <>
            <div className="footer_outer_box">
                <div className="footer_inner_block">
                    <div className="logo_and_all">
                        <br /><br /><br />
                        <h1>MRS</h1>
                    </div>
                    <div className="contact_and_company_copyright">
                        <br /><br />
                        <p>Get in touch with us for high precision products and services!</p>
                        <br />
                        <Link to="/"> 
                            <button>Contact Us</button>
                        </Link>
                        <br /><br />
                        <p>© 2004 MRS Pvt. Ltd.</p>
                    </div>
                    <div className="options_of_pages">
                        <br /><br /><br />
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
                </div>
            </div>
        </>
    )
}
export default Footer