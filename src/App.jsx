import NavBar from "./components/navbar/navbar";
import ClientsProvider from "../contexts/client/ClientsProvider";
import ClentsTable from "./components/clients/ClientsTable";

function App() {
  // fetch("http://127.0.0.1:3000/client", {
  //     method: "POST",
  //     mode: "cors",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ name: "redwan" }),
  //   })
  //     .then((result) => console.log(result))
  //     .catch((err) => console.log(err));

  return (
    <ClientsProvider>
      <NavBar />
      <ClentsTable />
    </ClientsProvider>
  );
}

export default App;
