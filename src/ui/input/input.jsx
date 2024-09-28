import { useId, forwardRef } from "react";
import "./style.scss";
export const Input = forwardRef(function Input({ label, error, ...rest }, ref) {
  const id = useId();
  return (
    <div className="input">
      <label className="input__label" htmlFor={id}>
        {label}
      </label>
      <input {...rest} className="input__input" id={id} ref={ref} />
      <div className="input__error">{error}</div>
    </div>
  );
});
