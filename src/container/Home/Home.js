import Navbar from "../../components/Navbar/Navbar";
import styles from "./style.module.css";
import header from "../../assests/header.png";
import { ReactComponent as Time } from "../../assests/time.svg";
import { ReactComponent as Sale } from "../../assests/sale.svg";
import { ReactComponent as Decision } from "../../assests/decision.svg";
import { ReactComponent as Data } from "../../assests/data.svg";
import { ReactComponent as Res } from "../../assests/res.svg";
import { ReactComponent as Handi } from "../../assests/handi.svg";
import { ReactComponent as Mega } from "../../assests/mega.svg";
import { ReactComponent as Stores } from "../../assests/stores.svg";
import { ReactComponent as Supermarket } from "../../assests/supermarket.svg";
import { ReactComponent as Pharmacies } from "../../assests/pharmacies.svg";
import { ReactComponent as Salons } from "../../assests/salons.svg";
import { ReactComponent as Fitness } from "../../assests/fitness.svg";
import { ReactComponent as Hotels } from "../../assests/hotels.svg";
import { ReactComponent as Bars } from "../../assests/bars.svg";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
export default function Home(params) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <Navbar home={true} />
      <div className={styles["hero-image"]}>
        <div className={styles["hero-text"]}>
          <div className="row mx-0">
            <div className="col-md-5 col-12 mx-auto mt-5">
              <h4 className="white fw-bold">
                Bahcode Your all-in-one business solution.
              </h4>
              <p className="white w-75 fw500">
                The all-in-one solution for managing your business. Our app and
                website make it easy to upload products, manage inventory,
                create coupons, and access analytics. Plus, customers can order
                products, qualify for coupons, and close transactions with our
                customer app. Sign up today and simplify your business
                operations with Bahcode!
              </p>
              <br />
              <br />

              <button
                style={{
                  background: "#D94D0D",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "0.2rem 0.5rem",
                }}
                type="button"
              >
                Register Free
              </button>
            </div>
            <div className="col-md-6 col-12 mx-auto">
              <img alt="" className="w-100" src={header} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-10 col-11 mx-auto mt-sm-5 mt-2 mb-3">
        <h3 className="text-center orange pt-3 mt-md-0 mt-5 fw-bold">Why Use Us?</h3>
        <p className="black fs-6 fw500 text-center d-block mx-auto col-md-6">
          At Bahcode, we believe that managing your business should be easy and
          hassle-free. That's why we've designed our platform to be intuitive
          and user-friendly, so you can focus on what you do best - serving your
          customers.
        </p>
        <div
          style={{
            boxShadow:
              "0px 4px 36px rgba(0, 0, 0, 0.1), 0px 1.20588px 10.8529px rgba(0, 0, 0, 0.0651589), 0px 0.500862px 4.50776px rgba(0, 0, 0, 0.05), 0px 0.181152px 1.63037px rgba(0, 0, 0, 0.0348411)",
            padding: "1rem",
          }}
        >
          <div className="row mx-auto">
            <div className="col-lg-3 col-md-6 col-12 mx-auto text-center">
              <Sale width={75} />
              <h6 className="fw-bold orange">Increase Sale</h6>
              <small className="gray">
                Our User friendly system speeds up checkout and increases sales
                for your business.
              </small>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mx-auto text-center">
              <Time width={75} />
              <h6 className="fw-bold orange">Save Time</h6>
              <small className="gray">
                Our automated system, help you save time
              </small>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mx-auto text-center">
              <Decision width={75} />
              <h6 className="fw-bold orange">Manage Inventory</h6>
              <small className="gray">know when you are low on inventory</small>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mx-auto text-center">
              <Data width={75} />
              <h6 className="fw-bold orange">Access Your Data</h6>
              <small className="gray">
                Access your data anytime anywhere for your security issue.
              </small>
            </div>
          </div>
        </div>
        <h2 className="orange fw-bold mt-5 text-center mb-0">
          The go-to business solution to grow smarter{" "}
        </h2>
        <small className="gray text-center d-block mx-auto my-3">
          The POS software for almost all businesses. Access and mange your
          products with Bahcode
        </small>
      </div>
      <div className={styles["res"] + " mt-3"}>
        <div className={styles["res-text"]}>
          <div className="row mx-5 py-5">
            <div
              className={
                " col-lg-2 mx-lg-3 col-md-4 col-sm-4 col-6 mx-auto text-center my-3"
              }
            >
              <div className={styles["card"]}>
                <Res width={85} />
                <h6 className="orange fw-bold">Restuarant</h6>
              </div>
            </div>
            <div
              className={
                " col-lg-2 mx-lg-3 col-md-4 col-sm-4 col-6 mx-auto text-center my-3"
              }
            >
              <div className={styles["card"]}>
                <Bars width={85} />
                <h6 className="orange fw-bold">Bars</h6>
              </div>
            </div>
            <div
              className={
                " col-lg-2 mx-lg-3 col-md-4 col-sm-4 col-6 mx-auto text-center my-3"
              }
            >
              <div className={styles["card"]}>
                <Mega width={85} />
                <h6 className="orange fw-bold">Shops</h6>
              </div>
            </div>
            <div
              className={
                " col-lg-2 mx-lg-3 col-md-4 col-sm-4 col-6 mx-auto text-center my-3"
              }
            >
              <div className={styles["card"]}>
                <Hotels width={85} />
                <h6 className="orange fw-bold">Hotels</h6>
              </div>
            </div>
            <div
              className={
                " col-lg-2 mx-lg-3 col-md-4 col-sm-4 col-6 mx-auto text-center my-3"
              }
            >
              <div className={styles["card"]}>
                <Stores height={100} />
                <h6 className="orange fw-bold">Online stores</h6>
              </div>
            </div>
            <div
              className={
                " col-lg-2 mx-lg-3 col-md-4 col-sm-4 col-6 mx-auto text-center my-3"
              }
            >
              <div className={styles["card"]}>
                <Supermarket width={85} />
                <h6 className="orange fw-bold">Supermarket</h6>
              </div>
            </div>
            <div
              className={
                " col-lg-2 mx-lg-3 col-md-4 col-sm-4 col-6 mx-auto text-center my-3"
              }
            >
              <div className={styles["card"]}>
                <Pharmacies width={85} />
                <h6 className="orange fw-bold">Pharmacies</h6>
              </div>
            </div>
            <div
              className={
                " col-lg-2 mx-lg-3 col-md-4 col-sm-4 col-6 mx-auto text-center my-3"
              }
            >
              <div className={styles["card"]}>
                <Salons width={85} />
                <h6 className="orange fw-bold">Beauty salons</h6>
              </div>
            </div>
            <div
              className={
                " col-lg-2 mx-lg-3 col-md-4 col-sm-4 col-6 mx-auto text-center my-3"
              }
            >
              <div className={styles["card"]}>
                <Handi width={85} />
                <h6 className="orange fw-bold">Handicraft</h6>
              </div>
            </div>
            <div
              className={
                " col-lg-2 mx-lg-3 col-md-4 col-sm-4 col-6 mx-auto text-center my-3"
              }
            >
              <div className={styles["card"]}>
                <Supermarket width={75} height={85} />
                <h6 className="orange fw-bold">Fitness centers</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
