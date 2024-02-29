import { TiShoppingCart } from "react-icons/ti";
import StarRating from "../StarRating";

export default function ProductSingle(prop) {
  return (
    <div className="relative m-6 px-4 py-2 flex w-full max-w-xs flex-col overflow-hidden transform duration-300 hover:shadow-2xl cursor-pointer hover:rounded-lg hover:border hover:border-gray-100 hover:bg-white shadow-sm">
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl hover:scale-105 transform duration-500 justify-center"
        href="#"
      >
        <img className="object-contain" src={prop.Img} alt={prop.category} />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          39% OFF
        </span>
      </a>
      <div className="mt-4 px-0 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-[#3B3B3B] line-clamp-1">
            {prop.Title}
          </h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-2xl font-semibold text-[#3B3B3B]">
              ${prop.Price}
            </span>
          </p>
          <div className="flex items-center">
            <StarRating rating={prop.Rate} />

            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              {prop.Rate}
            </span>
          </div>
        </div>
        <a
          href="#"
          className="flex items-center justify-center transform duration-300 rounded-md bg-[#3B3B3B] px-5 py-2.5 text-center text-base font-normal text-white hover:text-[#3B3B3B] hover:bg-[#F4DF4EFF] focus:outline-none focus:ring-4 focus:ring-[#F4DF4EFF]"
        >
          <TiShoppingCart className="text-2xl mr-1" />
          Add to cart
        </a>
      </div>
    </div>
  );
}
