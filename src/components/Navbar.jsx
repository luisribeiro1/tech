
import { CodeXml, Github, MoonStar } from 'lucide-react';
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary mb-5" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><CodeXml className="" size={24} /> Tech</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ms-auto me-auto">
            {/* <li className="nav-item">
              <a className="nav-link " href="#">
                Home <span className="visually-hidden">(current)</span>
              </a>
            </li> */}

            <li className="nav-item">
              <Link className="nav-link" to="/aulas">
                UC1
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">UC2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">UC3</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">UC4</a>
            </li>
          </ul>

          <div>
            <Github color="white" size={16} />
            <span className='px-2 text-white'>|</span>
            <MoonStar color="white" size={16} />
          </div>
          {/* <form className="d-flex">
            <input
              className="form-control me-sm-2"
              type="search"
              placeholder="Search"
            />
            <button
              className="btn btn-secondary my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}
