export default function ButtonComponent({ className, onClick, children }) {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
