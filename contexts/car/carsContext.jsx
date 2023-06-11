const carCtx = React.createContext({
  cars: [],
  searchedCars: [],
  isSearching: false,
  isLoading: false,
  isAddLoading: false,
  fetch: () => {},
  add: (plateNumber, colorId, brandId, typeId) => {},
  edit: (plateNumber, colorId, brandId, typeId) => {},
  delete: (plateNumber) => {},
  search: (key) => {},
});

export default carCtx;
