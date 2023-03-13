import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { ReactComponent as FilterIcon } from "../../assests/filter.svg";
import { ReactComponent as Download } from "../../assests/download.svg";
import styles from "./styles.module.css";
import { MDBChart, MDBDatatable } from "mdb-react-ui-kit";
import AdminTopBar from "../../components/AdminTopBar/AdminTopBar";

export default function Dashboard({ type }) {
  const [no, setNo] = useState("");
  const [unit, setUnit] = useState("");
  const basicData = {
    columns: ["Group", "Subgroup", "Brand", "Details", "Global Sale"],
    rows: [
      [
        "Shoes",
        "footwear",
        "Nike",
        "Classice Shoes",
        "51811"
      ],
      [
        "Shoes",
        "footwear",
        "Nike",
        "Classice Shoes",
        "51811"
      ],
      [
        "Shoes",
        "footwear",
        "Nike",
        "Classice Shoes",
        "51811"
      ],
      [
        "Shoes",
        "footwear",
        "Nike",
        "Classice Shoes",
        "51811"
      ],
      [
        "Shoes",
        "footwear",
        "Nike",
        "Classice Shoes",
        "51811"
      ],
      [
        "Shoes",
        "footwear",
        "Nike",
        "Classice Shoes",
        "51811"
      ],
      [
        "Shoes",
        "footwear",
        "Nike",
        "Classice Shoes",
        "51811"
      ],
      [
        "Shoes",
        "footwear",
        "Nike",
        "Classice Shoes",
        "51811"
      ],
      [
        "Shoes",
        "footwear",
        "Nike",
        "Classice Shoes",
        "51811"
      ],
      [
        "Shoes",
        "footwear",
        "Nike",
        "Classice Shoes",
        "51811"
      ],
      [
        "Shoes",
        "footwear",
        "Nike",
        "Classice Shoes",
        "51811"
      ],
      
    ],
  };
  return (
    <>
      <div className="d-flex" style={{ background: "#F5F6F9", height:"100vh" }}>
        <Sidebar type={1} />
        <div className="col-md-9 col-8 mx-auto">
          {/* <AdminTopBar/> */}
          <div className="row mx-0 align-items-center">
            <div className="col-md-6 col-12 mx-auto my-2">
              <FilterIcon width={25} className="cursor" />
            </div>
            <div className="col-md-6 col-12 mx-auto my-2">
              <div className="d-flex align-items-center flex-end justify-content-md-end justify-content-between">
                <h6 className="fw-bold orange mb-0">Last</h6>
                <input
                  style={{
                    width: "15%",
                    margin: "0rem 1rem",
                    border: "2px solid #D94D0D",
                    borderRadius: "15px",
                  }}
                  name="no"
                  value={no}
                  onChange={(e) => setNo(e.target.value)}
                />
                <select
                  style={{
                    width: "18%",
                    border: "2px solid #D94D0D",
                    borderRadius: "15px",
                    padding: "0.2rem 0.2rem",
                  }}
                  name="unit"
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                >
                  <option value={"days"}>Days</option>
                  <option value={"month"}>Month</option>
                  <option value={"year"}>Year</option>
                </select>
                <Download className="ms-3" width={25} />
              </div>
            </div>
          </div>
          <div className="my-2">
            <div className="row mx-0">
              <div
                className={
                  styles["card"] +
                  " col-lg-3 col-md-4 col-sm-6 col-12  mx-auto px-0 my-2"
                }
              >
                <div className={styles["head"] + " py-1 mx-0 px-0"}>
                  Transactions
                </div>
                <div className="blue text-center py-3 fw-bold fs-5">1855</div>
              </div>
              <div
                className={
                  styles["card"] +
                  " col-lg-3 col-md-4 col-sm-6 col-12  mx-auto px-0 my-2"
                }
              >
                <div className={styles["head"] + " py-1 mx-0 px-0"}>Sales</div>
                <div className="blue text-center py-3 fw-bold fs-5">1855</div>
              </div>
              <div
                className={
                  styles["card"] +
                  " col-lg-3 col-md-4 col-sm-6 col-12 mx-auto px-0 my-2"
                }
              >
                <div className={styles["head"] + " py-1 mx-0 px-0"}>
                  New Customers
                </div>
                <div className="blue text-center py-3 fw-bold fs-5">1855</div>
              </div>
            </div>
          </div>
          <div className="my-3" >
            <div>
              <MDBChart
                type="bar"
                backgroundColor="#D94D0D"
                style={{
                  maxHeight: "22rem",
                  background: "white",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  padding: "2rem",
                }}
                data={{
                  labels: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  datasets: [
                    {
                      label: "",
                      backgroundColor: "#D94D0D",

                      data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
                    },
                  ],
                }}
              />
            </div>
            <div className="my-3">
            <MDBDatatable selectable pagination={false} sm multi fixedHeader maxHeight='460px' data={basicData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
