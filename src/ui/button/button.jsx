import "./style.scss";
export function Button({ children, className = "", ...rest }) {
  return (
    <button {...rest} className={`button ${className}`}>
      {children}
    </button>
  );
}
