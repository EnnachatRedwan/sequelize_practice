import { useContext, useState } from "react";
import carCtx from "../../../contexts/car/carsContext";
import { Button } from "react-bootstrap";
import Alert from "../../portals/alert";

const CarEntry = (props) => {
  const Car = useContext(carCtx);

  const [isEditing, setIsEditing] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);

  const [plateNumber, setPlateNumber] = useState(props.car.platenumber);
  const [color, setColor] = useState(props.car.color);
  const [brand, setBrand] = useState(props.car.car_brand);
  const [type, setType] = useState(props.car.car_type);

  // const setPlateNumberHandler = (event) => {
  //   setPlateNumber(event.target.value);
  // };
  // const setEmailHandler = (event) => {
  //   setemail(event.target.value);
  // };

  const openForm = () => {
    setIsEditing(true);
  };

  const closeForm = () => {
    setIsEditing(false);
  };

  const openAlert = () => {
    setIsConfirming(true);
  };

  const closeAlert = () => {
    setIsConfirming(false);
  };

  // const editCar = (event) => {
  //   if (event) event.preventDefault();
  //   if (fullName.trim() === "") return;
  //   if (email.trim() === "") return;
  //   if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.trim()))
  //     return;
  //   Car.edit(props.car.id, fullName.trim(), email.trim());
  //   closeForm();
  // };

  return (
    <tr style={isEditing ? { backgroundColor: "#aaa" } : {}}>
      {isConfirming && (
        <Alert
          close={closeAlert}
          controls={
            <>
              <Button variant="danger" onClick={() => Car.delete(plateNumber)}>
                Okay
              </Button>
              <Button variant="primary" onClick={closeAlert}>
                Cancel
              </Button>
            </>
          }
        >{`You are about to delete ${plateNumber}`}</Alert>
      )}

      <td>{props.iteration}</td>
      <td>
        {isEditing ? (
          <form /*onSubmit={editCar}*/ action="POST">
            <input
              className="input-group-text"
              type="text"
              placeholder="Plate number"
              // onChange={setPlateNumberHandler}
              value={plateNumber}
            />
          </form>
        ) : (
          plateNumber
        )}
      </td>

      <td>
        {isEditing ? (
          <form /*onSubmit={editCar}*/ action="POST">
            <input
              className="input-group-text"
              type="text"
              placeholder="Color"
              // onChange={setEmailHandler}
              value={color.color}
            />
          </form>
        ) : (
          color.color
        )}
      </td>

      <td>
        {isEditing ? (
          <form /*onSubmit={editCar}*/ action="POST">
            <input
              className="input-group-text"
              type="text" //shoud be a drop down
              placeholder="Brand"
              // onChange={setEmailHandler}
              value={brand.Brand}
            />
          </form>
        ) : (
          brand.Brand
        )}
      </td>

      <td>
        {isEditing ? (
          <form /*onSubmit={editCar}*/ action="POST">
            <input
              className="input-group-text"
              type="text"
              placeholder="Type"
              // onChange={setEmailHandler}
              value={type.Type}
            />
          </form>
        ) : (
          type.Type
        )}
      </td>

      {isEditing ? (
        <>
          <td></td>
          <td></td>
          <td className="text-center">
            <Button
              // onClick={editCar}
              variant="success"
              className="text-white"
            >
              Save
            </Button>
          </td>
          <td className="text-center">
            <Button variant="danger" onClick={closeForm}>
              Cancel
            </Button>
          </td>
        </>
      ) : (
        <>
          <td className="text-center">
            <Button variant="info" className="text-white">
              Rent
            </Button>
          </td>
          <td className="text-center">
            <Button variant="success" className="text-white">
              Details
            </Button>
          </td>
          <td className="text-center">
            <Button onClick={openForm} variant="warning" className="text-white">
              Edit
            </Button>
          </td>
          <td className="text-center">
            <Button variant="danger" onClick={openAlert}>
              Delete
            </Button>
          </td>
        </>
      )}
    </tr>
  );
};

export default CarEntry;
