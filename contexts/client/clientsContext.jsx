const clientCtx = React.createContext({
  clients: [],
  searchedClients: [],
  isSearching: false,
  isLoading: false,
  isAddLoading: false,
  fetch: () => {},
  edit: (id, fullname, email) => {},
  add: (fullname, email) => {},
  delete: (id) => {},
  search: (key) => {},
});

export default clientCtx;
