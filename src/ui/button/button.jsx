import "./style.scss";
export function Button({ isLoading, children, className = "", ...rest }) {
  return (
    <button {...rest} className={`button ${className}`} disabled={isLoading}>
      {children}
    </button>
  );
}
