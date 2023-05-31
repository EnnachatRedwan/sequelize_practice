import { useContext, useRef, useState } from "react";
import clientCtx from "../../../contexts/client/clientsContext";
import { Button } from "react-bootstrap";

const ClientEntry = (props) => {
  const Client = useContext(clientCtx);

  const [isEditing, setIsEditing] = useState(false);

  const [fullName, setFullName] = useState(props.client.fullname);
  const [email, setemail] = useState(props.client.email);

  const setFullNameHandler = (event) => {
    setFullName(event.target.value);
  };
  const setEmailHandler = (event) => {
    setemail(event.target.value);
  };

  const openForm = () => {
    setIsEditing(true);
  };

  const closeForm = () => {
    setIsEditing(false);
  };

  const editClient = (event) => {
    if (event) event.preventDefault();
    if (fullName.trim() === "") return;
    if (email.trim() === "") return;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.trim()))
      return;
    Client.edit(props.client.id, fullName.trim(), email.trim());
    closeForm();
  };

  return (
    <tr style={isEditing ? { backgroundColor: "#aaa" } : {}}>
      <td>{props.iteration}</td>
      <td>
        {isEditing ? (
          <form onSubmit={editClient} action="POST">
            <input
              className="input-group-text"
              type="text"
              placeholder="Full name"
              onChange={setFullNameHandler}
              value={fullName}
            />
          </form>
        ) : (
          props.client.fullname
        )}
      </td>

      <td>
        {isEditing ? (
          <form onSubmit={editClient} action="POST">
            <input
              className="input-group-text"
              type="email"
              placeholder="Email"
              onChange={setEmailHandler}
              value={email}
            />
          </form>
        ) : (
          props.client.email
        )}
      </td>

      {isEditing ? (
        <>
          <td></td>
          <td className="text-center">
            <Button
              onClick={editClient}
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
              cars
            </Button>
          </td>
          <td className="text-center">
            <Button onClick={openForm} variant="warning" className="text-white">
              Edit
            </Button>
          </td>
          <td className="text-center">
            <Button
              variant="danger"
              onClick={() => Client.delete(props.client.id)}
            >
              Delete
            </Button>
          </td>
        </>
      )}
    </tr>
  );
};

export default ClientEntry;
