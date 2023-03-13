import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/logo.svg";
export default function Navbar({home, about, feature, pricing, help}) {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
        <div className="container-fluid">
          <div className="d-flex align-items-center cursor" onClick={()=>navigate("/")}>
            <Logo />
            <h6 className="ms-3 orange fw-bold mb-0">BahCode</h6>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item mx-md-4">
                <h6
                  className={`${home===true && "active"} nav-link cursor mb-0 fw-bold`}
                  onClick={() => navigate("/home")}
                >
                  Home
                </h6>
              </li>
              <li className="nav-item  mx-md-4">
                <h6
                  className={`${feature===true && "active"} nav-link cursor mb-0 fw-bold`}
                  onClick={() => navigate("/features")}
                >
                  Features
                </h6>
              </li>
              <li className="nav-item  mx-md-4">
                <h6
                  className={`${pricing===true && "active"} nav-link cursor mb-0 fw-bold`}
                  onClick={() => navigate("/pricing")}
                >
                  Pricing
                </h6>
              </li>
              <li className="nav-item  mx-md-4">
                <h6
                  className={`${help===true && "active"} nav-link cursor mb-0 fw-bold`}
                  onClick={() => navigate("/help")}
                >
                  Help & Support
                </h6>
              </li>
              <li className="nav-item  mx-md-4">
                <button
                  type="button"
                  style={{
                    background: "#D94D0D",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding:"0.2rem 2rem"
                  }}
                  // onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
