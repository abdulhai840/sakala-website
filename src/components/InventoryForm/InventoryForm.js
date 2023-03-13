import React, { useState } from "react";
import { Controller } from "react-hook-form";
import FormValidationError from "../FormValidationError";
import Sidebar from "../Sidebar/Sidebar";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
export default function InventoryForm({
  mode,
  control,
  errors,
  onSubmit,
  onSpendSubmit,
}) {
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };
  return (
    <>
      <div className="d-flex" style={{ background: "#F5F6F9", height:"100vh" }}>
        <Sidebar type={62} />
        <div className="col-9 mx-auto mt-5 mb-3">
          <div>
            <h4 className="fw-bold black mb-0">Inventory</h4>
            <p className="mb-0 gray">Manage your inventory</p>
          </div>
          <div>
            <MDBTabs style={{ background: "#D2DBD9", height: "2.5rem", marginTop:"1rem" }}>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleBasicClick("tab1")}
                  active={basicActive === "tab1"}
                  style={{
                    background: "#D2DBD9",
                    border: "none",
                    height: "2.5rem",
                  }}
                >
                  Product ID
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleBasicClick("tab2")}
                  active={basicActive === "tab2"}
                  style={{
                    background: "#D2DBD9",
                    border: "none",
                    height: "2.5rem",
                  }}
                >
                  Item Name
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem></MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
              <MDBTabsPane show={basicActive === "tab1"}>
              <div className="col-12 mx-auto p-4 bg-white">
                  <div className="col-md-9 col-11 mx-auto">
                    <div className="col-md-6 col-12 mx-auto my-5 py-5">
                      <div className=" col-12 mx-auto textOnInput my-4">
                        <label for="inputText">Product ID</label>
                        <Controller
                          control={control}
                          name="productId"
                          render={({ field: { onChange, value } }) => (
                            <input
                              className={`form-control col-12 ${
                                errors.productId && "invalid-input"
                              }`}
                              onChange={onChange}
                              value={value}
                              type="text"
                              placeholder="1234"
                            />
                          )}
                        />
                        <FormValidationError
                          errorMessage={errors.productId?.message}
                        />
                      </div>
                      <div className=" col-12 mx-auto textOnInput my-4">
                        <label for="inputText">Quantity</label>
                        <Controller
                          control={control}
                          name="quantity"
                          render={({ field: { onChange, value } }) => (
                            <input
                              className={`form-control col-12 ${
                                errors.quantity && "invalid-input"
                              }`}
                              onChange={onChange}
                              value={value}
                              type="text"
                              placeholder="32"
                            />
                          )}
                        />
                        <FormValidationError
                          errorMessage={errors.quantity?.message}
                        />
                      </div>
                    </div>
                    <div className="row col-8 mx-auto mb-4">
                      <button
                        className="col-md-5 col-12 mx-auto my-2"
                        style={{
                          background: "#ECECEC",
                          border: "2px solid #757575",
                          borderRadius: "25px",
                          color: "#757575",
                          padding: "0.4rem 0rem",
                        }}
                        type={"button"}
                      >
                        Cancel
                      </button>
                      <button
                        className="col-md-5 col-12 mx-auto my-2"
                        style={{
                          background: "#ECECEC",
                          border: "2px solid #D94D0D",
                          borderRadius: "25px",
                          color: "#D94D0D",
                          padding: "0.4rem 0rem",
                        }}
                        type={"button"}
                        onClick={onSpendSubmit}
                      >
                        {mode === "EDIT" ? "Update" : "Create"}
                      </button>
                    </div>
                  </div>
                </div>
              </MDBTabsPane>
              <MDBTabsPane show={basicActive === "tab2"}>
                <div className="col-12 mx-auto p-4 bg-white">
                  <div className="col-md-9 col-11 mx-auto">
                    <div className="col-md-6 col-12 mx-auto my-5 py-5">
                      <div className=" col-12 mx-auto textOnInput my-4">
                        <label for="inputText">Item Name</label>
                        <Controller
                          control={control}
                          name="itemName"
                          render={({ field: { onChange, value } }) => (
                            <input
                              className={`form-control col-12 ${
                                errors.itemName && "invalid-input"
                              }`}
                              onChange={onChange}
                              value={value}
                              type="text"
                              placeholder="Item Name"
                            />
                          )}
                        />
                        <FormValidationError
                          errorMessage={errors.itemName?.message}
                        />
                      </div>
                      <div className=" col-12 mx-auto textOnInput my-4">
                        <label for="inputText">Quantity</label>
                        <Controller
                          control={control}
                          name="quantity"
                          render={({ field: { onChange, value } }) => (
                            <input
                              className={`form-control col-12 ${
                                errors.quantity && "invalid-input"
                              }`}
                              onChange={onChange}
                              value={value}
                              type="text"
                              placeholder="32"
                            />
                          )}
                        />
                        <FormValidationError
                          errorMessage={errors.quantity?.message}
                        />
                      </div>
                    </div>
                    <div className="row col-8 mx-auto mb-3">
                      <button
                        className="col-md-5 col-12 mx-auto my-2"
                        style={{
                          background: "#ECECEC",
                          border: "2px solid #757575",
                          borderRadius: "25px",
                          color: "#757575",
                          padding: "0.4rem 0rem",
                        }}
                        type={"button"}
                      >
                        Cancel
                      </button>
                      <button
                        className="col-md-5 col-12 mx-auto my-2"
                        style={{
                          background: "#ECECEC",
                          border: "2px solid #D94D0D",
                          borderRadius: "25px",
                          color: "#D94D0D",
                          padding: "0.4rem 0rem",
                        }}
                        type={"button"}
                        onClick={onSpendSubmit}
                      >
                        {mode === "EDIT" ? "Update" : "Create"}
                      </button>
                    </div>
                  </div>
                </div>
              </MDBTabsPane>
            </MDBTabsContent>
          </div>
        </div>
      </div>
    </>
  );
}
