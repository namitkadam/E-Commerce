// import Logo from "../../Img/Logo1.png";
import { BsTelephoneFill, BsBehance } from "react-icons/bs";
import Logo from "../Logo";
import {
  FaSquareFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="-mx-4 p-5 flex flex-wrap bg-gray-200 ">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xxl:grid-cols-4 p-0 md:p-2 xl:p-6 justify-items-center">
            <div className="w-full mb-10">
              <Logo classDiv="text-2xl font-bold" calssImg="h-16" />
              <p className="mb-4 font-semibold text-[#3B3B3B] dark:text-dark-6 ">
                Sed ut perspiciatis undmnis is iste natus error sit amet
                voluptatem totam rem aperiam.
              </p>
              <p className="flex items-center text-sm font-semibold text-dark dark:text-white gap-2 text-[#3B3B3B]">
                <BsTelephoneFill />
                <span>+012 (345) 678 99</span>
              </p>
            </div>
            <div className="w-full mb-10">
              <h4 className="text-lg font-semibold text-[#3B3B3B] mb-2">
                Shopping & Categories
              </h4>
              <ul className="font-semibold text-[#3B3B3B] flex flex-col gap-2">
                <li>Men's Shopping</li>
                <li>Women's Shopping</li>
                <li>Jewelery</li>
                <li>Electronics</li>
              </ul>
            </div>
            <div className="w-full mb-10">
              <h4 className="text-lg font-semibold text-[#3B3B3B] mb-2">
                Useful Links
              </h4>
              <ul className="font-medium text-[#3B3B3B] flex flex-col gap-2">
                <li>Homepage</li>
                <li>About Us</li>
                <li>Help</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="w-full mb-10">
              <h4 className="text-lg font-semibold text-[#3B3B3B] mb-2">
                Help & Information
              </h4>
              <ul className="font-medium text-[#3B3B3B] flex flex-col gap-2">
                <li>Help</li>
                <li>FAQ's</li>
                <li>Shipping</li>
                <li>Tracking ID</li>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-black w-full text-center py-3 text-[#3B3B3B] font-medium">
            <p>Copyright © 2023 Copyright E-Commerce</p>
            <div>
              <ul className="flex gap-2 text-2xl text-[#3B3B3B] justify-center mt-3 cursor-pointer ">
                <li className="hover:text-[#F4DF4EFF] ">
                  <FaSquareFacebook />
                </li>
                <li className="hover:text-[#F4DF4EFF] ">
                  <FaTwitter />
                </li>
                <li className="hover:text-[#F4DF4EFF] ">
                  <FaInstagram />
                </li>
                <li className="hover:text-[#F4DF4EFF] ">
                  <BsBehance />
                </li>
                <li className="hover:text-[#F4DF4EFF] ">
                  <FaLinkedin />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
