const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container-lg">
        <a className="navbar-brand" href="#">
        <span className="text-info">E</span>
        <span className="text-warning">N</span>
          <span className="text-danger">N</span> CARS
        </a>
        
        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-item nav-link " href="#">
              Clients
            </a>
            <a className="nav-item nav-link" href="#">
              Cars
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
