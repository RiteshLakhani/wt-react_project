import { Link, Outlet } from "react-router-dom";

function Navbar() {
    return (
      <div>
        <div className="row">
          <div className="col border border-dark">
            <header className="bg-primary text-white text-center py-3">
              <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                  <Link className="navbar-brand" to="/">Ritesh</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/Contact">Contact</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/Slides">Slides</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/faculties">Faculties</Link>
                      </li>
                      <li className="nav-item" >
                          <Link className="nav-link" to="/hook">Hook_Example</Link>
                      </li>
                      <li className="nav-item" >
                          <Link className="nav-link" to="/api">Hook_API_Demo</Link>
                      </li>
                      <li className="nav-items">
                          <Link className="nav-link" to="/cal">Calculator</Link>
                      </li>
                      <li className="nav-items">
                          <Link className="nav-link" to="/ControllComponents">Controll_Component_Example</Link>
                      </li>
                      <li className="nav-items">
                        <Link className="nav-link" to="/fac">Fac_Detail_list</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </header>
          </div>
        </div>
      </div>
    );
}

export default Navbar;