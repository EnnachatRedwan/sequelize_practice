import React, { useState, useEffect } from "react";
import clientCtx from "./clientsContext";

const ClientsProvider = (props) => {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAddLoading, setIsAddLoading] = useState(false);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = () => {
    setIsLoading(true);
    fetch("http://127.0.0.1:3000/client", {
      method: "GET",
      mode: "cors",
    })
      .then((result) => result.json())
      .then((data) => {
        setClients(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addClient = (fullname, email) => {
    setIsAddLoading(true);

    fetch("http://127.0.0.1:3000/client", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullname: fullname,
        email: email,
      }),
    })
      .then((result) => result.json())
      .then((data) => {
        setIsAddLoading(false);
        setClients((oldClients) => [
          ...oldClients,
          { id: data.id, fullname, email },
        ]);
      })
      .catch((err) => {
        console.log(err);
        const oldClients = [...clients];
        oldClients.pop();
        setClients(oldClients);
      });
  };

  const deleteClient = (id) => {
    const oldClients = [...clients];
    const updatedClients = oldClients.filter((client) => client.id !== id);
    setClients(updatedClients);
    fetch(`http://127.0.0.1:3000/client/${id}`, {
      method: "DELETE",
    })
      .then((result) => result.json())
      .then((data) => {})
      .catch((err) => {
        console.log(err);
        setClients(oldClients);
      });
  };

  const editClient = (id, fullname, email) => {
    const oldClients = [...clients];

    const updatedClients = [...clients].map((client) => {
      if (client.id === id) {
        return {
          id: id,
          fullname: fullname,
          email: email,
        };
      }
      return client;
    });

    setClients(updatedClients);

    fetch("http://127.0.0.1:3000/client", {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
        fullname: fullname,
        email: email,
      }),
    })
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        setClients(oldClients);
      });
  };

  return (
    <clientCtx.Provider
      value={{
        clients: clients,
        isLoading: isLoading,
        isAddLoading: isAddLoading,
        fetch: fetchClients,
        add: addClient,
        edit: editClient,
        delete: deleteClient,
      }}
    >
      {props.children}
    </clientCtx.Provider>
  );
};

export default ClientsProvider;
