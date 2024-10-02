import "./style.scss";
import { Button } from "../button/button";
import { createPortal } from "react-dom";
export function Modal({ headerText, bodyText, onConfirm, isOpen }) {
  return (
    isOpen &&
    createPortal(
      <div className="modal">
        <div className="modal__container">
          <div className="modal__header">{headerText}</div>
          <div className="modal__body">{bodyText}</div>
          <div className="modal__footer">
            <Button type="button" onClick={onConfirm}>
              確 認
            </Button>
          </div>
        </div>
      </div>,
      document.body
    )
  );
}
