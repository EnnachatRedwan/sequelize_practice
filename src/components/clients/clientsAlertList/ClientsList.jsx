import { useContext } from "react";
import clientCtx from "../../../../contexts/client/clientsContext";
import ClientTile from "./ClientTile";

import classes from "./ClientsList.module.css";

const ClientsList = (props) => {
  const Cliets = useContext(clientCtx);
  return (
    <div>
      <div>
        <table className={`${classes["table"]} table table-striped`}>
          <thead style={{ position: "sticky", left: "0", top: "0" }}>
            <tr className="table-dark">
              <th>#</th>
              <th>Full name</th>
              <th className="text-center">Rent</th>
            </tr>
          </thead>
          <tbody className={classes["body"]}>
            {Cliets.clients.map((client, i) => (
              <ClientTile key={i} client={client} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientsList;
