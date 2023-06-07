import { useEffect, useState } from "react";

const DropDownFetcher = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(props.selectedValue);

  useEffect(() => {
    setIsLoading(true);
    fetch(props.link, {
      method: "GET",
      mode: "cors",
    })
      .then((result) => result.json())
      .then((data) => {
        setItems(data);

        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const setValue = (event) => {
    const selectedItem = items.filter(
      (item) => item.id === +event.target.value
    );
    setSelected(event.target.value);
    props.onChange(selectedItem[0]);
  };

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <select
          onChange={setValue}
          className="form-select"
          value={props.selectedValue === undefined ? -1 : selected}
        >
          <option value={"-1"}>{props.dispValue}</option>
          {items.map((item, i) => (
            <option key={i} value={item[props.valName]}>
              {item[props.dispName]}
            </option>
          ))}
        </select>
      )}
    </>
  );
};

export default DropDownFetcher;
