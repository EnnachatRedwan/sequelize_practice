import { Container } from "react-bootstrap";
import ClientEntry from "./clientEntry";
import { useContext, useEffect, useState } from "react";
import clientCtx from "../../../contexts/client/clientsContext";
import AddClient from "./AddClient";

function ClentsTable() {
  const Client = useContext(clientCtx);

  return (
    <div className="mt-3 container-lg" style={{overflowX:'scroll',scrollbarWidth:'none'}}>
      {Client.isLoading && <h1 className="text-center lead m-5">Loading...</h1>}
      {!Client.isLoading && (
        <table className="table table-striped">
          <thead>
            {Client.clients.length > 0 && (
              <tr>
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
          <tfoot>
            <AddClient />
          </tfoot>
        </table>
      )}
    </div>
  );
}

export default ClentsTable;
