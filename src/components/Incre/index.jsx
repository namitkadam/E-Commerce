import { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import Button from "../Button";

export default function Incre() {
  let [counter, setCounter] = useState(0);
  //   if (counter === 0) {
  //     return;
  //   }

  return (
    <div class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
      <Button
        onClicks={() => setCounter(counter - 1)}
        classval="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600"
        name={<MdKeyboardArrowDown className="h-4 w-4 mx-2" />}
      />

      <div className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent">
        {counter}
      </div>

      <Button
        onClicks={() => setCounter(counter - 1)}
        classval="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600"
        name={<MdKeyboardArrowUp className="h-4 w-4 mx-2 fill-current" />}
      />
    </div>
  );
}
