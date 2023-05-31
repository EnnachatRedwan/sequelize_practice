import { createPortal } from "react-dom";

import styles from "./alert.module.css";

const Alert = (props) => {
  return createPortal(
    <div onClick={props.close} className={styles["backdrop"]}>
      <div className={styles["card"]}>
        <div className={styles["message"]}>{props.children}</div>
        <div className={styles["controls"]}>{props.controls}</div>
      </div>
    </div>,
    document.getElementById("alert")
  );
};

export default Alert;
