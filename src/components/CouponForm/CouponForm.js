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
export default function CouponForm({
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
        <Sidebar type={52} />
        <div className="col-9 mx-auto mt-5 mb-3">
          <div>
            <h4 className="fw-bold black mb-0">Coupons</h4>
            <p className="mb-0 gray">Manage your coupon</p>
          </div>
          <div>
            <MDBTabs style={{ background: "#D2DBD9", height: "2.5rem" }}>
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
                  Item
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
                  Spend
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem></MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
              <MDBTabsPane show={basicActive === "tab1"}>
                <div className="col-12 mx-auto p-4 bg-white">
                  <div className="col-md-9 col-11 mx-auto">
                    <div className="col-md-6 col-12 mx-auto">
                      <div className=" col-12 mx-auto textOnInput my-4">
                        <label for="inputText">Item</label>
                        <Controller
                          control={control}
                          name="item"
                          render={({ field: { onChange, value } }) => (
                            <select
                              className={`form-select col-12 ${
                                errors.item && "invalid-input"
                              }`}
                              onChange={onChange}
                              value={value}
                            >
                              <option>Select</option>
                              <option value={1}>Item</option>
                              <option value={2}>Item</option>
                              <option value={3}>Item</option>
                            </select>
                          )}
                        />
                        <FormValidationError
                          errorMessage={errors.item?.message}
                        />
                      </div>
                      <div className=" col-12 mx-auto textOnInput my-4">
                        <label for="inputText">Quantity</label>
                        <Controller
                          control={control}
                          name="qty"
                          render={({ field: { onChange, value } }) => (
                            <select
                              className={`form-select col-12 ${
                                errors.qty && "invalid-input"
                              }`}
                              onChange={onChange}
                              value={value}
                            >
                              <option>Select</option>
                              <option value={1}>1</option>
                              <option value={2}>5</option>
                              <option value={3}>9</option>
                            </select>
                          )}
                        />
                        <FormValidationError
                          errorMessage={errors.qty?.message}
                        />
                      </div>
                      <div className=" col-12 mx-auto textOnInput my-4">
                        <label for="inputText">Expiring date</label>
                        <Controller
                          control={control}
                          name="expDate"
                          render={({ field: { onChange, value } }) => (
                            <input
                              className={`form-control col-12 ${
                                errors.expDate && "invalid-input"
                              }`}
                              onChange={onChange}
                              value={value}
                              type="text"
                              placeholder="25/12/2023"
                            />
                          )}
                        />
                        <FormValidationError
                          errorMessage={errors.expDate?.message}
                        />
                      </div>
                      <div className=" col-12 mx-auto textOnInput my-4">
                        <label for="inputText">Expiring quantity</label>
                        <Controller
                          control={control}
                          name="expQty"
                          render={({ field: { onChange, value } }) => (
                            <input
                              className={`form-control col-12 ${
                                errors.expQty && "invalid-input"
                              }`}
                              onChange={onChange}
                              value={value}
                              type="text"
                              placeholder="2100"
                            />
                          )}
                        />
                        <FormValidationError
                          errorMessage={errors.expQty?.message}
                        />
                      </div>
                      <div className=" col-12 mx-auto textOnInput my-4">
                        <label for="inputText">Free Item</label>
                        <Controller
                          control={control}
                          name="freeItem"
                          render={({ field: { onChange, value } }) => (
                            <select
                              className={`form-select col-12 ${
                                errors.freeItem && "invalid-input"
                              }`}
                              onChange={onChange}
                              value={value}
                            >
                              <option>Select</option>
                              <option value={1}>Admin</option>
                              <option value={2}>Admin</option>
                              <option value={3}>User</option>
                            </select>
                          )}
                        />
                        <FormValidationError
                          errorMessage={errors.freeItem?.message}
                        />
                      </div>
                      <div className=" col-12 mx-auto textOnInput my-4">
                        <label for="inputText">Price</label>
                        <Controller
                          control={control}
                          name="price"
                          render={({ field: { onChange, value } }) => (
                            <input
                              className={`form-control col-12 ${
                                errors.price && "invalid-input"
                              }`}
                              onChange={onChange}
                              value={value}
                              type="text"
                              placeholder="$ 2100"
                            />
                          )}
                        />
                        <FormValidationError
                          errorMessage={errors.price?.message}
                        />
                      </div>
                    </div>
                    <div className="row col-8 mx-auto mt-3">
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
                        onClick={onSubmit}
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
                        <label for="inputText">Enter Amount</label>
                        <Controller
                          control={control}
                          name="amount"
                          render={({ field: { onChange, value } }) => (
                            <input
                              className={`form-control col-12 ${
                                errors.amount && "invalid-input"
                              }`}
                              onChange={onChange}
                              value={value}
                              type="text"
                              placeholder="$ 5000"
                            />
                          )}
                        />
                        <FormValidationError
                          errorMessage={errors.amount?.message}
                        />
                      </div>
                      <div className=" col-12 mx-auto textOnInput my-4">
                        <label for="inputText">Expiring date</label>
                        <Controller
                          control={control}
                          name="date"
                          render={({ field: { onChange, value } }) => (
                            <input
                              className={`form-control col-12 ${
                                errors.date && "invalid-input"
                              }`}
                              onChange={onChange}
                              value={value}
                              type="text"
                              placeholder="25/12/2023"
                            />
                          )}
                        />
                        <FormValidationError
                          errorMessage={errors.date?.message}
                        />
                      </div>
                      <div className=" col-12 mx-auto textOnInput my-4">
                        <label for="inputText">Free Spend Amount</label>
                        <Controller
                          control={control}
                          name="spend"
                          render={({ field: { onChange, value } }) => (
                            <input
                              className={`form-control col-12 ${
                                errors.spend && "invalid-input"
                              }`}
                              onChange={onChange}
                              value={value}
                              type="text"
                              placeholder="$ 2100"
                            />
                          )}
                        />
                        <FormValidationError
                          errorMessage={errors.spend?.message}
                        />
                      </div>
                    </div>
                    <div className="row col-8 mx-auto mt-3">
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
