import "./style.scss";
export function Button({ isLoading, children, className = "", ...rest }) {
  return (
    <button
      {...rest}
      className={`button ${className} ${isLoading && `button__loading`}`}
      disabled={isLoading}
    >
      {children}
    </button>
  );
}
