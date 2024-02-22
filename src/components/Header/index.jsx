import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { PiMoonLight } from "react-icons/pi";
import { IoSunny } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { useState } from "react";
import Button from "../Button";
// import Logo from "../../Img/Logo1.png";
import Logo from "../Logo";

export default function Header(params) {
  const [toggleMenu, setToggleMenu] = useState(false);
  let classBtn =
    "rounded-full border-solid border-2 text-[#3B3B3B] border-[#F4DF4EFF] py-1 px-3 hover:bg-[#F4DF4EFF] hover:text-gray-100";
  return (
    <>
      <header>
        <nav>
          <div className="max-w-7xl mx-auto bg-white">
            <div className="flex mx-auto justify-between w-full ">
              {/* Primary menu and logo */}
              <div className="flex items-center gap-16 mt-6 mb-2">
                {/* logo */}
                <Logo classDiv="font-bold text-xl" calssImg="h-11" />
                {/* primary */}
              </div>
              <div className="hidden lg:flex gap-8 items-center text-[#3B3B3B] ">
                <Link to="/">Home</Link>
                <Link href="#">Products</Link>
                <Link href="#">About Us</Link>
                <Link href="#">Contact Us</Link>
              </div>
              {/* secondary */}
              <div className="flex gap-6">
                <div className="xs:hidden  items-center gap-5 flex-row flex">
                  {/* <div className="hidden lg:flex items-center gap-2">
                    <PiMoonLight className="h-6 w-6" />
                    <IoSunny className="h-6 w-6" />
                  </div> */}
                  <div className="flex gap-3 max-md:hidden">
                    <Link to="/Login">
                      <Button classval={classBtn} name="Login" />
                    </Link>
                    <Link to="/SignUp">
                      <Button classval={classBtn} name="SignUp" />
                    </Link>
                    <Link to="/Cart">
                      <div className="flex justify-center rounded-full border-solid border-2 border-[#F4DF4EFF] text-[#3B3B3B] py-1 px-3 hover:bg-[#F4DF4EFF] hover:text-gray-100">
                        <div className="text-2xl">
                          <TiShoppingCart />
                        </div>
                        {`Card(01)`}
                      </div>
                    </Link>
                  </div>
                </div>
                {/* Mobile navigation toggle */}
                <div className="lg:hidden flex items-center">
                  <button onClick={() => setToggleMenu(!toggleMenu)}>
                    <FiMenu className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* mobile navigation */}
          <div
            className={`fixed w-[90%] bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
              !toggleMenu ? "h-0" : "h-full"
            }`}
          >
            <div className="p-6 w-full ">
              <div className="flex flex-col gap-8 font-bold tracking-wider">
                <Link to="/">Home</Link>
                <Link href="#">Products</Link>
                <Link href="#">About Us</Link>
                <Link href="#">Contact Us</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
