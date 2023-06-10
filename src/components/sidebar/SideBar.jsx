import { useEffect } from "react";
import SideBarItem from "./SideBarItem";

import styles from "./SideBar.module.css";
import { useState } from "react";

const SideBar = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(
    localStorage.getItem("isCollapsed")
  );

  const toggleCollapse = () => {
    if (isCollapsed === "0") {
      setIsCollapsed("1");
      localStorage.setItem("isCollapsed", "1");
      return;
    }
    setIsCollapsed("0");
    localStorage.setItem("isCollapsed", "0");
  };

  useEffect(() => {
    if (isCollapsed === null) {
      localStorage.setItem("isCollapsed", "1");
      setIsCollapsed(true);
    }
  }, []);

  return (
    <aside
      className={`${styles["aside"]} ${
        isCollapsed === "0" ? styles["collapsed"] : ""
      }`}
    >
      <div>
        {props.items.map((item, i) => (
          <SideBarItem
            key={i}
            iteration={i}
            item={item}
            selected={i + "" === props.selectedItemIndex}
            isCollapsed={isCollapsed === "0"}
          />
        ))}
      </div>
      <div className={styles["collaps"]}>
        <button onClick={toggleCollapse}>
          <i
            className={
              isCollapsed === "1"
                ? "bi bi-caret-left-fill"
                : "bi bi-caret-right-fill"
            }
          ></i>
        </button>
      </div>
    </aside>
  );
};
export default SideBar;
