import { useContext, useState } from "react";
import carCtx from "../../../contexts/car/carsContext";
import { Button } from "react-bootstrap";
import Alert from "../../portals/alert";
import DropDownFetcher from "../../utils/DropDownFetcher";

const CarEntry = (props) => {
  const Car = useContext(carCtx);

  const [isEditing, setIsEditing] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);

  const [color, setColor] = useState(props.car.color);
  const [brand, setBrand] = useState(props.car.car_brand);
  const [type, setType] = useState(props.car.car_type);

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

  const editCar = (event) => {
    if (event) event.preventDefault();

    if (color === undefined) return;
    if (brand === undefined) return;
    if (type === undefined) return;

    Car.edit(props.car.platenumber, color, brand, type);

    closeForm();
  };

  return (
    <tr style={isEditing ? { backgroundColor: "#aaa" } : {}}>
      {isConfirming && (
        <Alert
          close={closeAlert}
          controls={
            <>
              <Button
                variant="danger"
                onClick={() => Car.delete(props.car.platenumber)}
              >
                Okay
              </Button>
              <Button variant="primary" onClick={closeAlert}>
                Cancel
              </Button>
            </>
          }
        >{`You are about to delete ${props.car.platenumber}`}</Alert>
      )}

      <td>{props.iteration}</td>
      <td>
        {isEditing ? (
          <form onSubmit={editCar} action="POST">
            <input
              disabled={true}
              className="input-group-text"
              type="text"
              value={props.car.platenumber}
            />
          </form>
        ) : (
          props.car.platenumber
        )}
      </td>

      <td>
        {isEditing ? (
          <form onSubmit={editCar} action="POST">
            <DropDownFetcher
              dispValue={"Color"}
              link={"http://localhost:3000/color"}
              valName={"id"}
              dispName={"color"}
              onChange={setColor}
              selectedValue={color.id}
            />
          </form>
        ) : (
          color.color
        )}
      </td>

      <td>
        {isEditing ? (
          <form onSubmit={editCar} action="POST">
            <DropDownFetcher
              dispValue={"Brand"}
              link={"http://localhost:3000/brand"}
              valName={"id"}
              dispName={"Brand"}
              onChange={setBrand}
              selectedValue={brand.id}
            />
          </form>
        ) : (
          brand.Brand
        )}
      </td>

      <td>
        {isEditing ? (
          <form onSubmit={editCar} action="POST">
            <DropDownFetcher
              dispValue={"Type"}
              link={"http://localhost:3000/type"}
              valName={"id"}
              dispName={"Type"}
              onChange={setType}
              selectedValue={type.id}
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
            <Button onClick={editCar} variant="success" className="text-white">
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
