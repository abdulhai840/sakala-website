import Navbar from "../../components/Navbar/Navbar";
import help from "../../assests/help.png";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
export default function Help(params) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
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
            <small className="gray">
              Access and manage your orders from your computer, laptop, tablet
              or smart anytime you choosen. Create access previlages so that
              your colleagues can login and work with your data online.{" "}
            </small>
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
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
