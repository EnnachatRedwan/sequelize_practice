const clientCtx = React.createContext({
  clients: [],
  isLoading: false,
  isAddLoading: false,
  fetch: () => {},
  edit: (id, fullname, email) => {},
  add: (fullname, email) => {},
  delete: (id) => {},
});

export default clientCtx;
