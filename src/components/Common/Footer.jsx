import { FiPhoneCall } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <footer className="footer sm:footer-horizontal bg-white text-gray-800 p-10">
            <div>
                <h6 className="footer-title">Newsletter</h6>
                <p>Be the first to here about new products,exclusive events, <br /> and online offers</p>
                <form>
                    <fieldset className="w-80 mt-3">
                        <label>Sign up and get 10% offer your first order</label>
                        <div className="join mt-2">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn text-white rounded-r-md bg-black hover:bg-gray-800">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </div>
            <nav >
                <h6 className="footer-title">Shop</h6>
                <Link to="#" className="hover:text-gray-500 transition-colors">Men&apos;s Top wear</Link>
                <Link to="#" className="hover:text-gray-500 transition-colors">Women&apos;s Top wear</Link>
                <Link to="#" className="hover:text-gray-500 transition-colors">Men&apos;s Bottom wear</Link>
                <Link to="#" className="hover:text-gray-500 transition-colors">Women&apos;s Bottom wear</Link>

            </nav>
            <nav>
                <h6 className="footer-title">Supports</h6>
                <Link to="#" className="hover:text-gray-500 transition-colors">Contact us</Link>
                <Link to="#" className="hover:text-gray-500 transition-colors">About us</Link>
                <Link to="#" className="hover:text-gray-500 transition-colors">FAQs</Link>
                <Link to="#" className="hover:text-gray-500 transition-colors">Features</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Follow us</h6>
                <div className="hidden md:flex gap-x-5 py-3">
                    <a href="#" className="hover:text-gray-300">
                        <TbBrandMeta className="h-5 w-5" />
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        <IoLogoInstagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        <RiTwitterXLine className="h-5 w-5" />
                    </a>
                </div>
                <div>
                    <h3 className="font-medium ">Call Us</h3>
                    <p className="flex space-x-3 mt-2">
                        <FiPhoneCall/><span>+8801878865256</span>
                    </p>
                </div>
            </nav>

        </footer>
    )
}
