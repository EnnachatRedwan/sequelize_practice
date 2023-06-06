import React, { useState, useEffect } from "react";
import carCtx from "./carsContext";

const CarsProvider = (props) => {

  const [cars, setCars] = useState([{
    platenumber: "20652-A-1",
    color: [1, "Black"],
    type: [2, "SUV"],
    brand: [1, "Mercedes"],
  },]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAddLoading, setIsAddLoading] = useState(false);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = () => {
    // setIsLoading(true);
    // fetch("http://127.0.0.1:3000/client", {
    //   method: "GET",
    //   mode: "cors",
    // })
    //   .then((result) => result.json())
    //   .then((data) => {
    //     setCars(data);
    //     setIsLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const addCar = (plateNumber, colorId, brandId,typeId) => {
    // setIsAddLoading(true);

    // fetch("http://127.0.0.1:3000/client", {
    //   method: "POST",
    //   mode: "cors",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     fullname: fullname,
    //     email: email,
    //   }),
    // })
    //   .then((result) => result.json())
    //   .then((data) => {
    //     setIsAddLoading(false);
    //     setCars((oldClients) => [
    //       ...oldClients,
    //       { id: data.id, fullname, email },
    //     ]);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     const oldClients = [...clients];
    //     oldClients.pop();
    //     setCars(oldClients);
    //   });
  };

  const deleteCar = (plateNumber) => {
    // const oldClients = [...clients];
    // const updatedClients = oldClients.filter((client) => client.id !== id);
    // setCars(updatedClients);
    // fetch(`http://127.0.0.1:3000/client/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((result) => result.json())
    //   .then((data) => {})
    //   .catch((err) => {
    //     console.log(err);
    //     setCars(oldClients);
    //   });
  };

  const editCar = (plateNumber, colorId, brandId,typeId) => {
    // const oldClients = [...clients];

    // const updatedClients = [...clients].map((client) => {
    //   if (client.id === id) {
    //     return {
    //       id: id,
    //       fullname: fullname,
    //       email: email,
    //     };
    //   }
    //   return client;
    // });

    // setCars(updatedClients);

    // fetch("http://127.0.0.1:3000/client", {
    //   method: "PUT",
    //   mode: "cors",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     id: id,
    //     fullname: fullname,
    //     email: email,
    //   }),
    // })
    //   .then((result) => result.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setCars(oldClients);
    //   });
  };

  return (
    <carCtx.Provider
      value={{
        cars: cars,
        isLoading: isLoading,
        isAddLoading: isAddLoading,
        fetch: fetchCars,
        add: addCar,
        edit: editCar,
        delete: deleteCar,
      }}
    >
      {props.children}
    </carCtx.Provider>
  );
};

export default CarsProvider;
