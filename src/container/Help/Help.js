import Navbar from "../../components/Navbar/Navbar";
import help from "../../assests/help.png";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import {
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
} from "mdb-react-ui-kit";
import tick from "../../assests/tick.png";
export default function Help(params) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [basicModal, setBasicModal] = useState(false);
  const [open, setOpen] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName: firstname,
      lastName: lastname,
      email: email,
      enquiry: query,
    };
    setLoading(true);
    fetch("https://staging.bahcode.com/api/Enquiry", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setLoading(false);
        setOpen(true);
        setBasicModal(true);
        setTimeout(() => {
          setBasicModal(false);
          setOpen(false);
        }, 3000);
        setFirstname("");
        setLastname("");
        setEmail("");
        setQuery("");
      })
      .catch((error) => {
        setLoading(false);
        setOpen(true);
        setBasicModal(true);
        setTimeout(() => {
          setBasicModal(false);
          setOpen(false);
        }, 3000);
        setFirstname("");
        setLastname("");
        setEmail("");
        setQuery("");
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <Navbar help={true} />
      <div className="my-5">
        <div className="row mx-auto align-items-center pt-5 col-11">
          <div className="col-md-6 col-12 mx-auto">
            <h1 className="fw-bold orange">24 Hours</h1>
            <h1 style={{ color: "#324178", fontWeight: "bold" }}>
              Help & Support
            </h1>
            <br />
            <p className="black fs-6 fw500">
              At Bahcode, we're committed to providing our users with the best
              possible experience. That's why we offer comprehensive help and
              support options to ensure that you always have the help you need,
              when you need it.
            </p>
            <p className="black fs-6 fw500">
              Our support team is available 24/7 to answer your questions,
              troubleshoot issues, and provide guidance on how to make the most
              of our platform. We offer a variety of support channels, including
              email, phone, and live chat, so you can choose the option that
              works best for you.
            </p>
            <p className="black fs-6 fw500">
              In addition to our support team, we also offer a range of
              resources to help you get the most out of Bahcode. This includes a
              comprehensive knowledge base, with articles and tutorials on all
              of our features.
            </p>
            <p className="black fs-6 fw500">
              At Bahcode, we're here to help you succeed. So whether you're just
              getting started or you're a seasoned pro, we're always here to
              support you every step of the way.
            </p>
          </div>
          <div className="col-md-6 col-12 mx-auto">
            <img src={help} alt="" className="w-100" />
          </div>
        </div>
      </div>
      <div className="mb-0">
        <div style={{ background: "#F5F6F9", padding: "1.5rem" }}>
          <h1 className="orange fw-bold text-center">General Enquires</h1>
          <small className="text-center gray d-block mx-auto">
            Fill out the form below and we’ll make sure the right person gets in
            touch as soon as we can
          </small>
          <form
            className="my-3 col-lg-4 col-md-6 col-12 mx-auto"
            onSubmit={onSubmit}
          >
            <input
              name="firstname"
              required
              value={firstname}
              style={{ border: "1px solid #D94D0D" }}
              placeholder="First Name"
              type="text"
              className="form-control"
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              name="lastname"
              required
              placeholder="Last Name"
              style={{ border: "1px solid #D94D0D" }}
              type={"text"}
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="form-control my-2"
            />
            <input
              name="email"
              required
              type={"email"}
              placeholder="Email"
              style={{ border: "1px solid #D94D0D" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control my-2"
            />
            <textarea
              name="query"
              required
              type={"text"}
              placeholder="Enter Query"
              value={query}
              rows={3}
              style={{ border: "1px solid #D94D0D", resize: "none" }}
              onChange={(e) => setQuery(e.target.value)}
              className="form-control my-2"
            />
            <button
              style={{
                background: "#D94D0D",
                color: "white",
                border: "none",
                borderRadius: "5px",
                display: "block",
                margin: "auto",
                padding: "0.2rem 1rem",
                width: "8rem",
              }}
              type={"submit"}
              disabled={loading}
            >
              {loading ? (
                <div className="spinner-grow text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
      <Footer />
      {!!open && (
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
          <MDBModalDialog centered>
            <MDBModalContent>
              <MDBModalBody>
                <img src={tick} alt="" className="d-block mx-auto w-25" />
                <div className="my-3">
                  <h6 className="black text-center fw-bold">
                    Query Submitted Successfully!
                  </h6>
                  <p className="black text-center mb-0">
                    Thanks for reaching us we will get back to you soon.
                  </p>
                </div>
              </MDBModalBody>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      )}
    </>
  );
}
