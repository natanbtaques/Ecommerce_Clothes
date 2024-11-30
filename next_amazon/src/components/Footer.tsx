
import Image from "next/image";
import logo from "../images/logo.png"

const Footer =() => {
    return (
<div className="w-full h-20 bg-amazon_light text-gray-300 flex items-center justify-center gap-1">
    <Image className="w-24" src={logo} alt="logo" />
    <p className="text-sm -mt-4">All rights reserved to {""}<a className="hover:text-white hover:underline decoration-[1px] cursor-pointer duration-300" href="https://github.com/natanbtaques">@natantaques</a></p>
</div>
    );
}

export default Footer;
