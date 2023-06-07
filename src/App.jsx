import NavBar from "./components/navbar/navbar";
import ClientsProvider from "../contexts/client/ClientsProvider";
import ClentsTable from "./components/clients/ClientsTable";
import { useEffect, useState } from "react";
import CarsTable from "./components/cars/CarsTable";
import CarsProvider from "../contexts/car/CarsProvider";

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
  return (
    <CarsProvider>
      <ClientsProvider>
        <NavBar indexHandler={setPageIndexHandler} />
        {pageIndex === "0" ? <ClentsTable /> : <CarsTable />}
      </ClientsProvider>
    </CarsProvider>
  );
}

export default App;
