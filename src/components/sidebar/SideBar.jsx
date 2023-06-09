import SideBarItem from "./SideBarItem";

import styles from "./SideBar.module.css";

const SideBar = (props) => {
  return (
    <aside className={styles["aside"]}>
      {props.items.map((item, i) => (
        <SideBarItem
          key={i}
          iteration={i}
          item={item}
          selected={i + "" === props.selectedItemIndex}
        />
      ))}
    </aside>
  );
};
export default SideBar;
