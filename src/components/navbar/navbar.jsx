import styles from "./navbar.module.css";

const NavBar = (props) => {
  return (
    <nav className={styles["navbar"]}>
      <div className={styles["logo"]}>
        <span >E</span>
        <span >N</span>
        <span >N</span> CARS
      </div>
    </nav>
  );
};
export default NavBar;
