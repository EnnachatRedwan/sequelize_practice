import ClientEntry from "./ClientEntry";
import { useContext } from "react";
import clientCtx from "../../../contexts/client/clientsContext";
import AddClient from "./AddClient";

function ClentsTable() {
  const Client = useContext(clientCtx);

  return (
    <div
      className="mt-3 container-lg"
      style={{ overflowX: "scroll", scrollbarWidth: "none" }}
    >
      {Client.isLoading && <h1 className="text-center lead m-5">Loading...</h1>}
      {!Client.isLoading && (
        <table className="table table-striped">
          <thead>
            <AddClient />
            {Client.clients.length > 0 && (
              <tr className="table-dark">
                <th>#</th>
                <th>Full name</th>
                <th>Email</th>
                <th className="text-center">Rented cars</th>
                <th className="text-center">Edit</th>
                <th className="text-center">Delete</th>
              </tr>
            )}
          </thead>
          <tbody>
            {Client.clients.map((client, i) => (
              <ClientEntry key={i} iteration={i + 1} client={client} />
            ))}
          </tbody>
          <tfoot></tfoot>
        </table>
      )}
    </div>
  );
}

export default ClentsTable;
