import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top nav-1b">
      <div className="container">
        {/* Navbar Header */}
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar-content"
            aria-expanded="false"
            aria-controls="navbar-content"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img src="img/portfolio/001.jpg" alt="GreenCodien Logo" />
            <span id="green">Green</span>Codien
          </a>
        </div>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbar-content">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#tutor" className="page-scroll">
                Tutor
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Programming Languages
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="btn-reg">
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
