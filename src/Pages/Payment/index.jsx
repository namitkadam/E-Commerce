import Input from "../../components/Input";
import Select from "../../components/Select";
import Logo from "../../components/Logo";
export default function Pyament() {
  let inputClass =
    "mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500";
  let lableClass = "text-xs font-semibold text-gray-500";
  return (
    <>
      <div className="relative mx-auto w-full bg-white">
        <Logo classDiv="font-bold text-xl mt-8" calssImg="h-11" />
        <div className="p4 h-full px-4 sm:py-12 max-md:mt-10 lg:py-6">
          <div className="mx-auto w-full max-w-lg">
            <h1 className="relative text-2xl font-medium text-[#3B3B3B] sm:text-3xl">
              Secure Checkout
              <span className="mt-2 block h-1 w-10 bg-[#F4DF4EFF] sm:w-20"></span>
            </h1>
            <form action="" className="mt-10 flex flex-col space-y-4">
              <Input
                label="Email"
                type="email"
                id="id"
                name="email"
                placeholder="john.capler@fang.com"
                calssInput={inputClass}
                calssLabel={lableClass}
              />

              <Input
                label="Card Number"
                type="text"
                id="card-number"
                name="card-number"
                placeholder="1234-5678-XXXX-XXXX"
                calssInput={inputClass}
                calssLabel={lableClass}
              />
              <div>
                <p class="text-xs font-semibold text-gray-500">
                  Expiration date
                </p>
                <div class="mr-6 flex flex-wrap">
                  <Select
                    label="Select expiration month"
                    name="month"
                    id="month"
                    option="Monthe"
                  />

                  <Select
                    label="Select expiration year"
                    name="year"
                    id="year"
                    option="Year"
                    selectWrap="ml-3 mr-6"
                  />
                  <Input
                    type="text"
                    id="security-code"
                    name="security-code"
                    placeholder="Security code"
                    calssWrapper="relative my-1"
                    calssLabel={`${lableClass}sr-only`}
                    calssInput={inputClass}
                  />
                </div>
              </div>
              <Input
                label="Card name"
                type="text"
                id="card-name"
                name="card-name"
                placeholder="Name on the card"
                calssInput={inputClass}
                calssLabel={lableClass}
              />
            </form>
            <p class="mt-10 text-center text-sm font-semibold text-gray-500">
              By placing this order you agree to the{" "}
              <a
                href="#"
                class="whitespace-nowrap text-[#4f4f4f] underline hover:text-[#3B3B3B]"
              >
                Terms and Conditions
              </a>
            </p>
            <button
              type="submit"
              class="mt-4 inline-flex w-full items-center justify-center rounded bg-[#F4DF4EFF] py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-[#F4DF4EFF] sm:text-lg"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
