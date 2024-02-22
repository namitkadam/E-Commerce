import { useContext } from "react";
import { ECommerceContext } from "../../Context/context";
import ProductSingle from "../ProductSingle";
export default function ProductList() {
  //   console.log(getProd);
  const { getProd } = useContext(ECommerceContext);
  console.log(getProd.map((prod) => prod.title.slice(0, 20)));

  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xxl:grid-cols-4 p-0 md:p-2 xl:p-6 justify-items-center">
      {/* <div className="grid row--auto"> */}
      {getProd.map((prod) => (
        <ProductSingle
          key={prod.id}
          Img={prod.image}
          Title={prod.title}
          Rate={prod.rating.rate}
          Price={prod.price}
        />
      ))}
    </div>
  );
}
