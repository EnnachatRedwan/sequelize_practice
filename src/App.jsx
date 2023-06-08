import { useEffect, useState } from "react";
import NavBar from "./components/navbar/navbar";
import ClientsProvider from "../contexts/client/ClientsProvider";
import ClentsTable from "./components/clients/ClientsTable";
import CarsTable from "./components/cars/CarsTable";
import CarsProvider from "../contexts/car/CarsProvider";
import SideBar from "./components/sidebar/SideBar";

import styles from "./app.module.css";

function App() {
  const [pageIndex, setPageIndex] = useState(localStorage.getItem("pageIndex"));

  useEffect(() => {
    if (pageIndex === null) {
      localStorage.setItem("pageIndex", "0");
      setPageIndex("0");
    }
  }, []);

  const setPageIndexHandler = (index) => {
    console.log("clicked");
    localStorage.setItem("pageIndex", index);
    setPageIndex(index);
  };

  const sideBarItem = [
    {
      title: "Clients",
      iconClass: "bi bi-person-fill",
      iconColor: "#5bc0de",
      clickHandler: () => setPageIndexHandler("0"),
    },
    {
      title: "Cars",
      iconClass: "bi bi-car-front-fill",
      iconColor: "#f0ad4e",
      clickHandler: () => setPageIndexHandler("1"),
    },
    {
      title: "Settings",
      iconClass: "bi bi-gear-fill",
      iconColor: "#d9534f ",
      clickHandler: () => setPageIndexHandler("1"),
    },
  ];

  return (
    <CarsProvider>
      <ClientsProvider>
        <NavBar indexHandler={setPageIndexHandler} />
        <div className={styles["main-container"]}>
          <SideBar items={sideBarItem} />
          <main>{pageIndex === "0" ? <ClentsTable /> : <CarsTable />}</main>
        </div>
      </ClientsProvider>
    </CarsProvider>
  );
}

export default App;
