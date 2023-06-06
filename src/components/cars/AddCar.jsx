import { useContext, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import carCtx from "../../../contexts/car/carsContext";

const AddCar = () => {
  const Car = useContext(carCtx);
  const fullNameRef = useRef();
  const emailRef = useRef();
  const [isEntering, setIsEntering] = useState(false);

  const openForm = () => {
    setIsEntering(true);
  };

  const closeForm = () => {
    setIsEntering(false);
  };

  // const addCarHandler = (event) => {
  //   if (event) event.preventDefault();
  //   if (fullNameRef.current.value.trim() === "") return;
  //   if (emailRef.current.value.trim() === "") return;
  //   if (
  //     !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
  //       emailRef.current.value.trim()
  //     )
  //   )
  //     return;
  //   Car.add(fullNameRef.current.value.trim(), emailRef.current.value.trim());
  //   fullNameRef.current.value = "";
  //   emailRef.current.value = "";
  //   fullNameRef.current.focus();
  // };

  return (
    <tr className="bg-light">
      {isEntering ? (
        <>
          <th></th>
          <th>
            <form /*onSubmit={addCarHandler}*/ action="POST">
              <input
                // ref={fullNameRef}
                className="input-group-text"
                type="text"
                placeholder="Full name"
              />
            </form>
          </th>
          <th>
            <form /*onSubmit={addCarHandler}*/ action="POST">
              <input
                // ref={emailRef}
                className="input-group-text"
                // type="email"
                placeholder="email"
              />
            </form>
          </th>
          <th></th>
          <th className="text-center">
            <Button
              // onClick={addCarHandler}
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
      ) : (
        <th className="text-center" colSpan={8}>
          <Button onClick={openForm} variant="success">
            ADD
          </Button>
        </th>
      )}
    </tr>
  );
};

export default AddCar;
