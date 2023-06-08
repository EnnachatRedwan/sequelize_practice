import SideBarItem from "./SideBarItem";

import styles from "./SideBar.module.css";

const SideBar = (props) => {
  return (
    <aside className={styles["aside"]}>
      {props.items.map((item, i) => (
        <SideBarItem key={i} item={item} />
      ))}
    </aside>
  );
};
export default SideBar;
