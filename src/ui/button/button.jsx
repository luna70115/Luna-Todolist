import "./style.scss";
export function Button({ disabled, children, className = "", ...rest }) {
  return (
    <button {...rest} className={`button ${className}`} disabled={disabled}>
      {children}
    </button>
  );
}
