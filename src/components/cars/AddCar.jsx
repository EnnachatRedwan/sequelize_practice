import { useContext, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import carCtx from "../../../contexts/car/carsContext";
import DropDownFetcher from "../../utils/DropDownFetcher";
import Alert from "../../portals/alert";

const AddCar = () => {
  const Car = useContext(carCtx);

  const [isEntering, setIsEntering] = useState(false);
  const [color, setColor] = useState();
  const [brand, setBrand] = useState();
  const [type, setType] = useState();
  const [error, setError] = useState(undefined);
  const [isSearching, setIsSearching] = useState(false);

  const plateNumberRef = useRef("");

  const closeAlert = () => {
    setError(undefined);
  };

  const openForm = () => {
    setIsEntering(true);
  };

  const closeForm = () => {
    setIsEntering(false);
  };

  const openSearch = () => {
    setIsSearching(true);
  };

  const closeSearch = () => {
    setIsSearching(false);
  };

  const addCarHandler = (event) => {
    if (event) event.preventDefault();
    if (plateNumberRef.current.value.trim() === "") return;
    if (!/^\d{1,6}-[a-zA-Z]-\d{1,2}$/.test(plateNumberRef.current.value))
      return;
    if (color === undefined) return;
    if (brand === undefined) return;
    if (type === undefined) return;
    try {
      Car.add(plateNumberRef.current.value, color, brand, type);
    } catch (err) {
      setError({ message: err.message });
    }
    setColor(undefined);
    setBrand(undefined);
    setType(undefined);
    plateNumberRef.current.value = "";
    plateNumberRef.current.focus();
  };

  return (
    <tr className="bg-light">
      {error && (
        <Alert
          close={closeAlert}
          controls={
            <>
              <Button variant="primary" onClick={closeAlert}>
                Okay
              </Button>
            </>
          }
        >
          {error.message}
        </Alert>
      )}
      {isEntering && (
        <>
          <th></th>
          <th>
            <form onSubmit={addCarHandler} action="POST">
              <input
                ref={plateNumberRef}
                className="input-group-text"
                type="text"
                placeholder="Plate number"
              />
            </form>
          </th>
          <th>
            <form onSubmit={addCarHandler} action="POST">
              <DropDownFetcher
                dispValue={"Color"}
                link={"http://localhost:3000/color"}
                valName={"id"}
                dispName={"color"}
                onChange={setColor}
                selectedValue={color}
              />
            </form>
          </th>
          <th>
            <form onSubmit={addCarHandler} action="POST">
              <DropDownFetcher
                dispValue={"Brand"}
                link={"http://localhost:3000/brand"}
                valName={"id"}
                dispName={"Brand"}
                onChange={setBrand}
                selectedValue={brand}
              />
            </form>
          </th>
          <th>
            <form onSubmit={addCarHandler} action="POST">
              <DropDownFetcher
                dispValue={"Type"}
                link={"http://localhost:3000/type"}
                valName={"id"}
                dispName={"Type"}
                onChange={setType}
                selectedValue={type}
              />
            </form>
          </th>
          <th></th>
          <th></th>

          <th className="text-center">
            <Button
              onClick={addCarHandler}
              variant="success"
              className="text-white"
              disabled={Car.isAddLoading}
            >
              {Car.isAddLoading ? "Loading..." : "ADD"}
            </Button>
          </th>
          <th className="text-center">
            <Button onClick={closeForm} variant="danger" className="">
              Close
            </Button>
          </th>
        </>
      )}
      {isSearching && (
        <>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th colSpan={2}>
            <form action="POST">
              <input
                style={{ width: "100%" }}
                className="input-group-text"
                type="text"
                placeholder="Plate number"
              />
            </form>
          </th>

          <th></th>
          <th></th>
          <th className="text-center">
            <Button onClick={closeSearch} variant="danger" className="">
              Close
            </Button>
          </th>
        </>
      )}
      {!isEntering && !isSearching && (
        <th className="text-center" colSpan={9}>
          <Button onClick={openForm} className="m-1" variant="success">
            ADD
          </Button>

          <Button
            onClick={openSearch}
            variant="warning"
            className="text-white m-1"
          >
            Search
          </Button>
        </th>
      )}
    </tr>
  );
};

export default AddCar;
