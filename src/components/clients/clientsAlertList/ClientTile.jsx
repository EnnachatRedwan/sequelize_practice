import { Button } from "react-bootstrap";

const ClientTile = (props) => {
  console.log(props.car);
  return (
    <tr>
      <td>{props.client.id}</td>
      <td>{props.client.fullname}</td>
      <td>
        <Button variant="info" className="text-white">
          Rent
        </Button>
      </td>
    </tr>
  );
};

export default ClientTile;
