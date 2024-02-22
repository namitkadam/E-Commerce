import { useContext, useState } from "react";
import { ECommerceContext } from "../../Context/context";
import BillDetails from "../BillDetails";
import Incre from "../Incre/index";
import Button from "../Button";

export default function SingelCart() {
  const [count, setCount] = useState();
  const { getProd } = useContext(ECommerceContext);
  const mapGetProd = getProd.map((get) => get);
  console.log(mapGetProd[0]);
  return (
    <div className="mt-4">
      <h5 className="text-2xl font-normal antialiased text-[#3B3B3B]">
        Cart (2 items)
      </h5>
      <div className="w-full">
        <div className="flex gap-8 justify-center max-md:flex-col max-md:items-center max-md:gap-6">
          <div className="block py-6 mb-6 flex-auto w-3/4 border rounded-xl border-gray-200 md:flex mt-6 max-md:w-full h-64 max-md:h-1/2">
            <div className="px-4 mb-6 md:mb-0">
              <div className="flex h-full">
                <img
                  src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                  alt=""
                  className="object-contain rounded-md w-full"
                />
              </div>
            </div>
            <div className="w-full px-4 md:2/3">
              <div className="flex justify-between">
                <div>
                  <div className="flex justify-around gap-6 border-b-2 border-dotted pb-4">
                    <h2 className="text-xl font-thin text-gray-600 dark:text-gray-400 tracking-tight line-clamp-1">
                      Fjallraven - Foldsack No. 1 Backpack, Fits 15
                    </h2>
                    <p className="text-xl font-thin text-gray-600 dark:text-gray-400">
                      $299.00
                    </p>
                  </div>
                  <div className="flex justify-between border-b-2 border-dotted mb-4 py-4">
                    <p className="text-xl font-normal text-gray-600 dark:text-gray-400">
                      Final Price
                    </p>
                    <p className="text-xl font-normal">$299.00</p>
                  </div>
                  <div className="flex gap-4 max-md:flex">
                    <button className="px-4 py-2 font-medium text-center text-[#3B3B3B] border border-[#3B3B3B] rounded-md dark:hover:border-gray-900 dark:hover:bg-gray-900 dark:text-gray-400 dark:border-gray-700 hover:bg-[#3B3B3B] hover:text-gray-100">
                      Remove
                    </button>
                    <button className="px-4 py-2  font-medium text-center text-[#3B3B3B] border border-[#3B3B3B] rounded-md md:mb-0 dark:hover:border-gray-900 dark:hover:bg-gray-900 dark:border-gray-600 dark:text-gray-400 hover:bg-[#3B3B3B] hover:text-gray-100">
                      Repeat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Incre />
          <div className="w-1/2 max-md:w-full flex-auto">
            <BillDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
