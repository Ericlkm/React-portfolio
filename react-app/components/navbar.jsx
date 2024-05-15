import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const currentPage = useLocation().pathname;
  const styles = {
    btn: {
      backgroundColor: "rgba(255, 255, 255, 0.703)",
    },
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <h1>
          <img className="img" src="../src/img/image.gif" />
          <a href="/">
            <span className="name">Eric Lackram</span>
          </a>
          💻
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={styles.btn}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul>
            <li className="nav-item">
              <Link to="/" className={currentPage === "/" ? "one" : "two"}>
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={currentPage === "/contact" ? "one" : "two"}
              >
                Contact Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className={currentPage === "/portfolio" ? "one" : "two"}
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
