const carCtx = React.createContext({
  cars: [],
  searchedCars: [],
  isSearching: false,
  isLoading: false,
  isAddLoading: false,
  fetch: () => {},
  add: (plateNumber, pricePerDay, colorId, brandId, typeId) => {},
  edit: (plateNumber, pricePerDay, colorId, brandId, typeId) => {},
  delete: (plateNumber) => {},
  search: (key) => {},
});

export default carCtx;
