export default function Select({
  label,
  name,
  id,
  option,
  selectWrap,
  select,
}) {
  return (
    <div className={`my-1 ${selectWrap}`}>
      <label for="month" className="sr-only">
        {label}
      </label>
      <select
        name={name}
        id={id}
        className={`cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-[#3B3B3B]${select}`}
      >
        <option value="">{option}</option>
      </select>
    </div>
  );
}
