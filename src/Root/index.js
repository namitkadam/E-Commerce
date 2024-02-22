import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ECommerceContext } from "../Context/context";

export default function RootLayout() {
  const { getProd } = useContext(ECommerceContext);
  if (!getProd) return <>Loader....</>;
  return (
    <div>
      <div className="w-full md:w-[90%] m-auto px-4 min-h-screen bg-slate-50 relative ">
        <Outlet />
      </div>
    </div>
  );
}
