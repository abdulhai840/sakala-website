import React from "react";
import { Controller } from "react-hook-form";
import FormValidationError from "../FormValidationError";
import Sidebar from "../Sidebar/Sidebar";
import { ReactComponent as PhotoIcon } from "../../assests/photo.svg";
export default function ProductForm({
  isEdit,
  mode,
  control,
  errors,
  onSubmit,
}) {
  return (
    <>
      <div className="d-flex" style={{ background: "#F5F6F9", height:"100vh" }}>
        <Sidebar type={22} />
        <div className="col-9 mx-auto mt-5">
          <div>
            <h4 className="fw-bold black mb-0">
              {mode === "EDIT" ? "Edit" : "Add"} Product{" "}
            </h4>
            <p className="mb-0 gray">{mode === "EDIT" ? "Edit" : "Add a new"} product</p>
          </div>
          <div className="col-12 mx-auto p-4 my-3 bg-white">
            <div className="col-md-9 col-11 mx-auto">
              <div className="col- mx-auto">
                <PhotoIcon width={100} className="d-block mx-auto" />
              </div>

              <div className="row mx-0">
                <div className="col-md-6 col-12">
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
                          placeholder="Enter item name here"
                        />
                      )}
                    />
                    <FormValidationError
                      errorMessage={errors.itemName?.message}
                    />
                  </div>
                  <div className=" col-12 mx-auto textOnInput my-4">
                    <label for="inputText">Group</label>
                    <Controller
                      control={control}
                      name="group"
                      render={({ field: { onChange, value } }) => (
                        <select
                          className={`form-select col-12 ${
                            errors.group && "invalid-input"
                          }`}
                          onChange={onChange}
                          value={value}
                        >
                          <option value={1}>Clothing</option>
                          <option value={2}>Clothing</option>
                          <option value={3}>Clothing</option>
                        </select>
                      )}
                    />
                    <FormValidationError errorMessage={errors.group?.message} />
                  </div>
                  <div className=" col-12 mx-auto textOnInput my-4">
                    <label for="inputText">Subgroup</label>
                    <Controller
                      control={control}
                      name="subGroup"
                      render={({ field: { onChange, value } }) => (
                        <select
                          className={`form-select col-12 ${
                            errors.subGroup && "invalid-input"
                          }`}
                          onChange={onChange}
                          value={value}
                        >
                          <option value={1}>Clothing</option>
                          <option value={2}>Clothing</option>
                          <option value={3}>Clothing</option>
                        </select>
                      )}
                    />
                    <FormValidationError
                      errorMessage={errors.subGroup?.message}
                    />
                  </div>
                  <div className=" col-12 mx-auto textOnInput my-4">
                    <label for="inputText">Brand</label>
                    <Controller
                      control={control}
                      name="brand"
                      render={({ field: { onChange, value } }) => (
                        <select
                          className={`form-select col-12 ${
                            errors.brand && "invalid-input"
                          }`}
                          onChange={onChange}
                          value={value}
                        >
                          <option value={1}>Clothing</option>
                          <option value={2}>Clothing</option>
                          <option value={3}>Clothing</option>
                        </select>
                      )}
                    />
                    <FormValidationError errorMessage={errors.brand?.message} />
                  </div>
                  <div className=" col-12 mx-auto textOnInput my-4">
                    <label for="inputText">Size</label>
                    <Controller
                      control={control}
                      name="size"
                      render={({ field: { onChange, value } }) => (
                        <select
                          className={`form-select col-12 ${
                            errors.size && "invalid-input"
                          }`}
                          onChange={onChange}
                          value={value}
                        >
                          <option value={1}>30</option>
                          <option value={2}>32</option>
                          <option value={3}>34</option>
                        </select>
                      )}
                    />
                    <FormValidationError errorMessage={errors.size?.message} />
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className=" col-12 mx-auto textOnInput my-md-4">
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
                          placeholder="$ 120"
                        />
                      )}
                    />
                    <FormValidationError errorMessage={errors.price?.message} />
                  </div>
                  <div className=" col-12 mx-auto textOnInput my-4">
                    <label for="inputText">Initial Stock</label>
                    <Controller
                      control={control}
                      name="initialStock"
                      render={({ field: { onChange, value } }) => (
                        <input
                          className={`form-control col-12 ${
                            errors.initialStock && "invalid-input"
                          }`}
                          onChange={onChange}
                          value={value}
                          type="number"
                          placeholder="20"
                        />
                      )}
                    />
                    <FormValidationError
                      errorMessage={errors.initialStock?.message}
                    />
                  </div>
                  <div className=" col-12 mx-auto textOnInput my-4">
                    <label for="inputText">Product Details</label>
                    <Controller
                      control={control}
                      name="productDetails"
                      render={({ field: { onChange, value } }) => (
                        <textarea
                          style={{ resize: "none" }}
                          rows={4}
                          className={`form-control col-12 ${
                            errors.productDetails && "invalid-input"
                          }`}
                          onChange={onChange}
                          value={value}
                          type="text"
                        />
                      )}
                    />
                    <FormValidationError
                      errorMessage={errors.productDetails?.message}
                    />
                  </div>
                </div>
              </div>
              <div className="row col-8 mx-auto">
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
