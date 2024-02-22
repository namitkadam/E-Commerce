import Input from "../Input";
import { RxCross2 } from "react-icons/rx";
import { BsArrowUpCircle } from "react-icons/bs";

export default function Checkout() {
  let input = "h-10 border mt-1 rounded px-4 w-full bg-gray-50";
  let divWrp = "md:col-span-5";
  let inputWrp =
    "px-4 appearance-none outline-none text-gray-800 w-full bg-transparent";

  return (
    // <!-- component -->
    <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div class="container max-w-screen-lg mx-auto">
        <div>
          <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div class=" text-sm">
              <div class="text-gray-600 mb-6">
                <p class="font-medium text-lg">Checkout</p>
                <p>Shipping Address</p>
              </div>

              <div class="lg:col-span-2">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <Input
                    label="Full Name"
                    type="text"
                    name="full_name"
                    id="full_name"
                    calssWrapper={divWrp}
                    calssInput={input}
                  />

                  <Input
                    label="Email Address"
                    type="text"
                    name="email"
                    id="email"
                    calssWrapper={divWrp}
                    calssInput={input}
                    placeholder="email@domain.com"
                  />

                  <Input
                    label="Address / Street"
                    type="text"
                    name="address"
                    id="address"
                    calssWrapper={divWrp}
                    calssInput={input}
                  />

                  <Input
                    label="City"
                    type="text"
                    name="city"
                    id="city"
                    calssWrapper={divWrp}
                    calssInput={input}
                  />

                  <div class="md:col-span-2">
                    <label for="country">Country / region</label>
                    <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="country"
                        id="country"
                        placeholder="Country"
                        class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value=""
                      />
                      <button
                        tabindex="-1"
                        class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                      >
                        <RxCross2 class="h-4 w-4 mx-2" />
                      </button>
                      <button
                        tabindex="-1"
                        for="show_more"
                        class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                      >
                        <BsArrowUpCircle className="w-4 h-4 mx-2 fill-current" />
                      </button>
                    </div>
                  </div>

                  <div class="md:col-span-2">
                    <label for="state">State / province</label>
                    <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="state"
                        id="state"
                        placeholder="State"
                        class={inputWrp}
                        value=""
                      />

                      <button
                        tabindex="-1"
                        class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                      >
                        <RxCross2 class="h-4 w-4 mx-2" />
                      </button>
                      <button
                        tabindex="-1"
                        for="show_more"
                        class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                      >
                        <BsArrowUpCircle className="w-4 h-4 mx-2 fill-current" />
                      </button>
                    </div>
                  </div>

                  <Input
                    label="Zipcode"
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    calssWrapper={`md:col-span-1`}
                    calssInput={
                      "transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    }
                  />

                  <div class="md:col-span-2"></div>

                  <div class="md:col-span-5 text-right">
                    <div class="inline-flex items-end">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
