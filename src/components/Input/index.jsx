export default function Input({
  label,
  id,
  type,
  name,
  placeholder,
  required,
  calssInput,
  calssWrapper,
  calssLabel,
  inputWrap,
  onchange,
  value,
}) {
  return (
    <div className={calssWrapper}>
      <label htmlFor={id} className={`${calssLabel}`}>
        {label}
      </label>
      <div className={inputWrap}>
        <input
          type={type}
          id={id}
          name={name}
          required={required}
          placeholder={placeholder}
          className={calssInput}
          onChange={onchange}
          value={value}
        />
      </div>
    </div>
  );
}
