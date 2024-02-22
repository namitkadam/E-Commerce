export default function Button({ classval, name, type, onClicks }) {
  return (
    <div>
      <button type={type} onClick={onClicks} className={classval}>
        {name}
      </button>
    </div>
  );
}
