import React from 'react';

export default function Nav() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
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
              <a className="dropdown-item" href="/courses/" >Featured </a>
              <a className="dropdown-item" href="#">Categories <i className="fas fa-list"></i></a>
              <a className="dropdown-item" href="#">Tags <i className="fas fa-tags"></i></a>
              <a className="dropdown-item" href="/courses">Popular <i className="fas fa-fire"></i></a>
              <a className="dropdown-item" href="/course/new">Create course</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>)

}
