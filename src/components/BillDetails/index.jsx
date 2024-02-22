export default function BillDetails() {
  return (
    <>
      <h2 className="text-2xl font-normal antialiased text-[#3B3B3B] ml-5 mb-3">
        {" "}
        Bill Details
      </h2>
      <div className="w-full border rounded-xl border-gray-200 shadow-lg">
        <div className="py-4 px-4 md:flex flex justify-between text-base font-thin">
          <p>Item Total</p>
          <p>299.00</p>
        </div>
        <div className="flex justify-between px-4 pb-4">
          <p>Total payable</p>
          <p>299.00</p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-6">
        <button className="py-2.5  w-full text-lg font-medium bg-[#3B3B3B] border-spacing-2 border border-[#3B3B3B] rounded-md text-gray-50 hover:bg-transparent hover:text-[#3B3B3B]">
          Proceed To Checkout
        </button>
      </div>
    </>
  );
}
