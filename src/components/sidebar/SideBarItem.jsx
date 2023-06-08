import styles from "./SideBarItem.module.css";

const SideBarItem = (props) => {
  return (
    <div className={styles["item"]} onClick={props.item.clickHandler}>
      <i
        className={props.item.iconClass}
        style={{ color: props.item.iconColor }}
      ></i>
      <h1>{props.item.title}</h1>
    </div>
  );
};

export default SideBarItem;
