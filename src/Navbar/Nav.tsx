import React from 'react';

export default function Nav() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src="static/openhead.png" width="30" height="30" className="d-inline-block align-top" alt=" " style={{ marginRight: 10 }} />
        Opencourse
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Browse
        </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#">Categories</a>
              <a className="dropdown-item" href="#">Tags</a>
              <a className="dropdown-item" href="/courses">Popular</a>
              <a className="dropdown-item" href="/newcourse">Create course</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>)

}
