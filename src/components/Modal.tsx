import { useRef } from "react";

import "../styles/Modal.css";
import Button from "./ui/Button";

type Props = {
  label: string;
  title: string;
  children: JSX.Element;
};

const Modal = ({ label, title, children }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <menu className="show-modal-menu">
        <Button
          size="big"
          label={label}
          onClick={() => dialogRef?.current?.showModal()}
        />
      </menu>

      <dialog ref={dialogRef} className="modal">
        <div className="modal-header">
          <h2>{title}</h2>
          <Button
            label="Close"
            color="firebrick"
            type="reset"
            onClick={() => dialogRef?.current?.close()}
          />
        </div>
        <section className="modal-body">{children}</section>
      </dialog>
    </>
  );
};

export default Modal;
