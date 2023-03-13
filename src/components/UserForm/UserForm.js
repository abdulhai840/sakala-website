import React from "react";
import { Controller } from "react-hook-form";
import FormValidationError from "../FormValidationError";
import Sidebar from "../Sidebar/Sidebar";
export default function UserForm({ mode, control, errors, onSubmit }) {
  return (
    <>
      <div className="d-flex" style={{ background: "#F5F6F9", height:"100vh" }}>
        <Sidebar type={31} />
        <div className="col-9 mx-auto mt-5">
          <div>
            <h4 className="fw-bold black mb-0">
              {mode === "EDIT" ? "Edit" : "Add"} User{" "}
            </h4>
            <p className="mb-0 gray">
              {mode === "EDIT" ? "Edit" : "Add a new"} User
            </p>
          </div>
          <div className="col-12 mx-auto p-4 my-3 bg-white">
            <div className="col-md-9 col-11 mx-auto">
              <div className="col-md-6 col-12 mx-auto">
                <div className=" col-12 mx-auto textOnInput my-4">
                  <label for="inputText">First Name</label>
                  <Controller
                    control={control}
                    name="firstName"
                    render={({ field: { onChange, value } }) => (
                      <input
                        className={`form-control col-12 ${
                          errors.firstName && "invalid-input"
                        }`}
                        onChange={onChange}
                        value={value}
                        type="text"
                        placeholder="First Name"
                      />
                    )}
                  />
                  <FormValidationError
                    errorMessage={errors.firstName?.message}
                  />
                </div>
                <div className=" col-12 mx-auto textOnInput my-4">
                  <label for="inputText">Last Name</label>
                  <Controller
                    control={control}
                    name="lastName"
                    render={({ field: { onChange, value } }) => (
                      <input
                        className={`form-control col-12 ${
                          errors.lastName && "invalid-input"
                        }`}
                        onChange={onChange}
                        value={value}
                        type="text"
                        placeholder="Last Name"
                      />
                    )}
                  />
                  <FormValidationError
                    errorMessage={errors.lastName?.message}
                  />
                </div>
                <div className=" col-12 mx-auto textOnInput my-4">
                  <label for="inputText">Phone No</label>
                  <Controller
                    control={control}
                    name="phone"
                    render={({ field: { onChange, value } }) => (
                      <input
                        className={`form-control col-12 ${
                          errors.phone && "invalid-input"
                        }`}
                        onChange={onChange}
                        value={value}
                        type="text"
                        placeholder="+9265455565"
                      />
                    )}
                  />
                  <FormValidationError errorMessage={errors.phone?.message} />
                </div>
                <div className=" col-12 mx-auto textOnInput my-4">
                  <label for="inputText">Select Role</label>
                  <Controller
                    control={control}
                    name="role"
                    render={({ field: { onChange, value } }) => (
                      <select
                        className={`form-select col-12 ${
                          errors.role && "invalid-input"
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
                  <FormValidationError errorMessage={errors.role?.message} />
                </div>
              </div>
              <div className="row col-8 mx-auto my-5">
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
                  {mode === "EDIT" ? "Update" : "Add"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
