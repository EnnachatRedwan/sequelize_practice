import styles from "./SideBarItem.module.css";

const SideBarItem = (props) => {
  return (
    <label className={styles["label"]} htmlFor={`tab${props.iteration}`}>
      <input
        readOnly
        id={`tab${props.iteration}`}
        type="radio"
        name="selected-tab"
        className={styles["radio"]}
        checked={props.selected}
      />
      <div className={styles["item"]} onClick={props.item.clickHandler}>
        <i
          className={props.item.iconClass}
          style={{ color: props.item.iconColor }}
        ></i>
        {!props.isCollapsed && <h1>{props.item.title}</h1>}
      </div>
      <span />
    </label>
  );
};

export default SideBarItem;
