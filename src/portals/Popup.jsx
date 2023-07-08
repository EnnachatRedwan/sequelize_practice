import { createPortal } from "react-dom";

import styles from "./Popup.module.css";

const Popup = (props) => {
  return createPortal(
    <div onClick={props.close} className={styles["backdrop"]}>
      <div className={styles["card"]}>
        <h1>{props.title}</h1>
        <div className={styles["content"]}>{props.children}</div>
        <div className={styles["controls"]}>{props.controls}</div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Popup;
