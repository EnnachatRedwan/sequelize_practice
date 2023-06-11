import React, { useState, useEffect } from "react";
import clientCtx from "./clientsContext";
import toCamelCase from "../../src/utils/toCamelCase";

const ClientsProvider = (props) => {
  const [clients, setClients] = useState([]);
  const [searchedClients, setSearchedClients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAddLoading, setIsAddLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

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
        fullname: toCamelCase(fullname),
        email: email,
      }),
    })
      .then((result) => result.json())
      .then((data) => {
        setIsAddLoading(false);
        setClients((oldClients) => [
          ...oldClients,
          { id: data.id, fullname: toCamelCase(fullname), email },
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
      // .then((result) => result.json())
      // .then((data) => {})
      .catch((err) => {
        console.log(err);
        setClients(oldClients);
      });
  };

  const editClient = (id, fullname, email) => {
    const oldClients = [...clients];

    const updatedClients = oldClients.map((client) => {
      if (client.id === id) {
        return {
          id: id,
          fullname: toCamelCase(fullname),
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
        fullname: toCamelCase(fullname),
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

  const search = (key) => {
    if (key.trim() === "") {
      setSearchedClients([]);
      setIsSearching(false);
      return;
    }
    setIsSearching(true);
    setSearchedClients(
      [...clients].filter(
        (client) =>
          client.fullname
            .trim()
            .toLowerCase()
            .includes(key.trim().toLowerCase()) ||
          client.email.trim().toLowerCase().includes(key.trim().toLowerCase())
      )
    );
  };

  return (
    <clientCtx.Provider
      value={{
        clients: clients,
        searchedClients: searchedClients,
        isLoading: isLoading,
        isAddLoading: isAddLoading,
        isSearching: isSearching,
        fetch: fetchClients,
        add: addClient,
        edit: editClient,
        delete: deleteClient,
        search: search,
      }}
    >
      {props.children}
    </clientCtx.Provider>
  );
};

export default ClientsProvider;
