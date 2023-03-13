import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export default function Pricing(params) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <Navbar pricing={true} />
      <div className="row mx-3 mt-5 pt-5">
        <div className="col-md-6 col-12 mx-auto">
          <h2 className="orange fw-bold mb-0">The world is better</h2>
          <h2 className="blue fw-bold mb-0">without extra fees</h2>
          <div className="my-5 mx-3">
            <p className="black fs-5 fw500">
              At Bahcode, we are committed to providing our users with a
              comprehensive suite of business management tools at no cost.
              That's right - all of our features, including multiple user
              accounts, reporting, inventory management, order management,
              customer rewards, and periodic performance reports, are completely
              free to use.
            </p>
            <p className="black fs-5 fw500">
              The cost associated with using Bahcode is a small transaction fee
              for every closed order that goes through the system. This fee
              helps us cover the costs of maintaining our platform, providing
              support to our users, and continuously improving our features and
              functionality.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-11 mx-auto">
          <h2 className=" mb-0">
            <span className="orange fw-bold">This is how our</span>
            <span className="blue fw-bold"> pricing works!</span>
          </h2>
          <div className="my-5 mx-2">
            <div className="d-flex align-items-center justify-content-between my-3">
              <h6 className="blue fw-bold">Monthly fees</h6>
              <h6 className="orange fw-bold">No Fee</h6>
            </div>
            <div className="d-flex align-items-center justify-content-between my-3">
              <h6 className="blue fw-bold">Setup fees</h6>
              <h6 className="orange fw-bold">No Fee</h6>
            </div>
            <div className="d-flex align-items-center justify-content-between my-3">
              <h6 className="blue fw-bold">Cancellation fees</h6>
              <h6 className="orange fw-bold">No Fee</h6>
            </div>
            <div className="d-flex align-items-center justify-content-between my-3">
              <h6 className="blue fw-bold">Deposit fees</h6>
              <h6 className="orange fw-bold">No Fee</h6>
            </div>
            <div className="d-flex align-items-center justify-content-between my-3">
              <h6 className="blue fw-bold">PCI fees</h6>
              <h6 className="orange fw-bold">No Fee</h6>
            </div>
            <div className="d-flex align-items-center justify-content-between my-3">
              <h6 className="blue fw-bold">User fees</h6>
              <h6 className="orange fw-bold">No Fee</h6>
            </div>
            <hr />
            <div className="d-flex align-items-center justify-content-between my-3">
              {/* <h6 className="blue">Every Transaction entered into the app</h6>
              <h6 className="orange ">1.5%</h6> */}
              <small className="gray">
                A platform fee is charged of less that 1% with a maximum
                predefined value for each transaction entered into the app
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="my-3">
        <h5 className="orange fw-bold text-center">
          Unlock the full potential{" "}
        </h5>
        <h5 className="blue fw-bold text-center"> of your business</h5>
        <h5 className="blue fw-bold text-center">with Bahcode</h5>
      </div>
      <Footer />
    </>
  );
}
