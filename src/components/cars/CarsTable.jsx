import CarEntry from "./CarEntry";
import { useContext } from "react";
import carCtx from "../../../contexts/car/carsContext";
import AddCar from "./AddCar";

function CarsTable() {
  const Car = useContext(carCtx);

  return (
    <div style={{ overflowX: "scroll", scrollbarWidth: "none" }}>
      {Car.isLoading && <h1 className="text-center lead m-5">Loading...</h1>}
      {!Car.isLoading && (
        <table className="table table-striped">
          <thead>
            <AddCar />
            {Car.cars.length > 0 && (
              <tr className="table-dark">
                <th>#</th>
                <th>Plate number</th>
                <th>Color</th>
                <th>Brand</th>
                <th>Type</th>
                <th className="text-center">Rent</th>
                <th className="text-center">Details</th>
                <th className="text-center">Edit</th>
                <th className="text-center">Delete</th>
              </tr>
            )}
          </thead>
          <tbody>
            {Car.cars.map((car, i) => (
              <CarEntry key={i} iteration={i + 1} car={car} />
            ))}
          </tbody>
          <tfoot></tfoot>
        </table>
      )}
    </div>
  );
}

export default CarsTable;
