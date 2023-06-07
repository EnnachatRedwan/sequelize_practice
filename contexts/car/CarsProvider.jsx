import React, { useState, useEffect } from "react";
import carCtx from "./carsContext";

const CarsProvider = (props) => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAddLoading, setIsAddLoading] = useState(false);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = () => {
    setIsLoading(true);
    fetch("http://127.0.0.1:3000/car", {
      method: "GET",
      mode: "cors",
    })
      .then((result) => result.json())
      .then((data) => {
        setCars(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addCar = (plateNumber, color, brand, type) => {
    if (
      cars.filter((car) => car.platenumber.trim() === plateNumber.trim())
        .length > 0
    ) {
      throw new Error(`Car ${plateNumber} already exists`);
    }

    setIsAddLoading(true);

    fetch("http://127.0.0.1:3000/car", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        plateNumber,
        color,
        brand,
        type,
      }),
    })
      .then((result) => result.json())
      .then((data) => {
        setIsAddLoading(false);
        setCars((oldCars) => [
          ...oldCars,
          { platenumber: plateNumber, color, car_brand: brand, car_type: type },
        ]);
      })
      .catch((err) => {
        console.log(err);
        const oldCars = [...cars];
        oldCars.pop();
        setCars(oldCars);
      });
  };

  const deleteCar = (plateNumber) => {
    const oldCars = [...cars];

    const updatedCars = oldCars.filter(
      (car) => car.platenumber !== plateNumber
    );

    fetch(`http://127.0.0.1:3000/car/${plateNumber}`, {
      method: "DELETE",
    })
      .then((_) => setCars([...updatedCars]))
      // .then((data) => {})
      .catch((err) => {
        console.log(err);
        setCars(oldCars);
      });
  };

  const editCar = (plateNumber, colorId, brandId, typeId) => {
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
