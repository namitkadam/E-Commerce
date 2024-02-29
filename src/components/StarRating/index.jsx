import { useState } from "react";
import ReactStars from "react-rating-star-with-type";

export default function StarRating({ rating }) {
  const [star, setStar] = useState(5);

  const onChange = (nextValue) => {
    setStar(nextValue);
  };
  return (
    <h5 class="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50 flex">
      <ReactStars
        onChange={onChange}
        value={rating}
        edit={true}
        activeColors={["red", "orange", "#FFCE00"]}
      />
    </h5>
  );
}
