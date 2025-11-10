import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";


export default function Topbar() {
    return (
        <div className="primary text-white">
            <div className="container mx-auto px-10 flex justify-between items-center">
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
                    <span className="text-sm text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, saepe?</span>
                </div>
                <div className=" hidden md:block">
                    <a href="tel:+8801878865256">+8801878865256</a>
                </div>
            </div>
        </div>
    )
}
