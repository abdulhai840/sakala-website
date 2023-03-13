import { useNavigate } from "react-router-dom";

export default function Footer(params) {
  const navigate = useNavigate();
  const d = new Date();
  let year = d.getFullYear();

  return (
    <>
      <div style={{ background: "rgba(0, 0, 0, 0.81)", padding: "1rem" }}>
        <h4 className="orange fw-bold text-center">Bahcode</h4>
        <h6 className="white fw-bold text-center">
          Discover the power of seamless business management
        </h6>
        <div className="col-11 mx-auto">
          <h6 className="white fw-bold">Quick Links</h6>
          <div className="d-flex flex-column">
            <small
              className="my-2 white cursor"
              onClick={() => navigate("/home")}
            >
              Home
            </small>
            <small
              className="my-2 white cursor"
              onClick={() => navigate("/features")}
            >
              Features
            </small>
            <small
              className="my-2 white cursor"
              onClick={() => navigate("/pricing")}
            >
              Pricing
            </small>
            <div className="d-sm-flex align-items-center justify-content-between">
              <small
                className="my-2 white cursor"
                onClick={() => navigate("/help")}
              >
                Help & Support
              </small>
              <div className="mt-3">
                <h4 className="fw-bold white mb-0">Contact</h4>
                <small className="white">support@bahcode.com</small>
              </div>
            </div>
          </div>
          <hr style={{ color: "white", background: "white", height: "3px" }} />
          <div className="d-sm-flex align-items-center justify-content-between">
            <small className="white fw-bold">
              &#169; {year} Bahcode&#174; Inc.
            </small>
            <div className="d-flex align-items-center">
              <small className="white me-4 fw-bold">Terms & Conditions</small>
              <small className="white fw-bold">Privacy Policy</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
