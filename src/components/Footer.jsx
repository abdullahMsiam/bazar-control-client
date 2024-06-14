import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FcShop } from "react-icons/fc";

const Footer = () => {
    return (
        <div className="bottom-0">
            <footer className="footer p-10 bg-black text-white ">
                <aside>
                    <div className="text-5xl">
                        <FcShop />
                    </div>
                    <p>Bazar Controller of those owner<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a className="w-11 text-3xl"> <FaFacebook /> </a>
                        <a className="w-11 text-3xl"> <FaLinkedin /> </a>
                        <a className="w-11 text-3xl"> <FaYoutube /> </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;