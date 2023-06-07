import { useContext, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import clientCtx from "../../../contexts/client/clientsContext";

const AddClient = () => {
  const Client = useContext(clientCtx);
  const fullNameRef = useRef();
  const emailRef = useRef();
  const [isEntering, setIsEntering] = useState(false);

  const openForm = () => {
    setIsEntering(true);
  };

  const closeForm = () => {
    setIsEntering(false);
  };

  const addClientHandler = (event) => {
    if (event) event.preventDefault();
    if (fullNameRef.current.value.trim() === "") return;
    if (emailRef.current.value.trim() === "") return;
    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        emailRef.current.value.trim()
      )
    )
      return;
    Client.add(fullNameRef.current.value.trim(), emailRef.current.value.trim());
    fullNameRef.current.value = "";
    emailRef.current.value = "";
    fullNameRef.current.focus();
  };

  return (
    <tr className="bg-light">
      {isEntering ? (
        <>
          <th></th>
          <th>
            <form onSubmit={addClientHandler} action="POST">
              <input
                ref={fullNameRef}
                className="input-group-text"
                type="text"
                placeholder="Full name"
              />
            </form>
          </th>
          <th>
            <form onSubmit={addClientHandler} action="POST">
              <input
                ref={emailRef}
                className="input-group-text"
                type="email"
                placeholder="email"
              />
            </form>
          </th>
          <th></th>
          
          <th className="text-center">
            <Button
              onClick={addClientHandler}
              variant="success"
              className="text-white"
              disabled={Client.isAddLoading}
            >
              {Client.isAddLoading ? "Loading..." : "ADD"}
            </Button>
          </th>
          <th className="text-center">
            <Button onClick={closeForm} variant="danger" className="">
              Close
            </Button>
          </th>
        </>
      ) : (
        <th className="text-center" colSpan={6}>
          <Button onClick={openForm} variant="success">
            ADD
          </Button>
        </th>
      )}
    </tr>
  );
};

export default AddClient;
