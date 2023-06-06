const carCtx = React.createContext({
  cars: [],
  isLoading: false,
  isAddLoading: false,
  fetch: () => {},
  add: (plateNumber, colorId, brandId,typeId) => {},
  edit: (plateNumber, colorId, brandId,typeId) => {},
  delete: (plateNumber) => {},
});

export default carCtx;
