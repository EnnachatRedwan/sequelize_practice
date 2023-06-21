import { useEffect, useState } from "react";
import NavBar from "./components/navbar/navbar";
import ClientsProvider from "../contexts/client/ClientsProvider";
import ClentsTable from "./components/clients/ClientsTable";
import CarsTable from "./components/cars/CarsTable";
import CarsProvider from "../contexts/car/CarsProvider";
import SideBar from "./components/sidebar/SideBar";
import Dashboard from "./components/dashboard/Dashboard";

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
    localStorage.setItem("pageIndex", index);
    setPageIndex(index);
  };

  const sideBarItem = [
    {
      title: "Dashboard",
      iconClass: "bi bi-speedometer",
      iconColor: "#5bc0de",
      clickHandler: () => setPageIndexHandler("0"),
    },
    {
      title: "Clients",
      iconClass: "bi bi-person-fill",
      iconColor: "#f0ad4e",
      clickHandler: () => setPageIndexHandler("1"),
    },
    {
      title: "Cars",
      iconClass: "bi bi-car-front-fill",
      iconColor: "#d9534f",
      clickHandler: () => setPageIndexHandler("2"),
    },
    {
      title: "Settings",
      iconClass: "bi bi-gear-fill",
      iconColor: "#5cb85c",
      clickHandler: () => setPageIndexHandler("3"),
    },
  ];

  const currentPage = (pI) => {
    if (pI === "0") return <Dashboard />;
    if (pI === "1") return <ClentsTable />;
    if (pI === "2") return <CarsTable />;
    if (pI === "3") return <></>;
  };

  return (
    <CarsProvider>
      <ClientsProvider>
        <NavBar />
        <div className={styles["main-container"]}>
          <SideBar items={sideBarItem} selectedItemIndex={pageIndex} />
          <main>{currentPage(pageIndex)}</main>
        </div>
      </ClientsProvider>
    </CarsProvider>
  );
}

export default App;
