import { useState } from "react";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/logo.svg";
import styles from "./styles.module.css";
export default function Login(params) {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();
  const onSubmit = () => {
    localStorage.setItem("token", "123");
    navigate("/dashboard");
  };
  return (
    <>
      <div
        style={{ background: "#D9D9D9", height: "100vh", position: "relative" }}
      >
        <div>
          <div
            className={
              styles["card"] +
              " px-5 py-4 col-xl-3 col-lg-4 col-md-5 col-sm-6 col-11 mx-auto"
            }
          >
            <Logo className="d-block mx-auto" />
            <p className="fw-bold blue mt-2">Bahcode</p>
            <h6 className="mt-3 orange fw-bold">Sign in</h6>
            <br />
            <div>
              <div className="textOnInput">
                <label for="inputText">User ID/Phone Number</label>
                <input
                  className="form-control col-12"
                  name="id"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  style={{
                    borderRadius: "2.375rem",
                    border: "1px solid #757575",
                  }}
                  type="text"
                  placeholder="Phone Number"
                />
                <h6 className="fw-bold black text-start mt-3">Enter a Pin</h6>
                <OtpInput
                  value={pwd}
                  placeholder={"*"}
                  containerStyle={{ justifyContent: "between" }}
                  inputStyle={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "25%",
                    border: "1px solid #757575",
                    margin: "0.8rem",
                    display: "block",
                  }}
                  onChange={(e) => setPwd(e)}
                  numInputs={4}
                />
                <div>
                  <button
                    style={{
                      background: "#D94D0D",
                      width: "90%",
                      border: "none",
                      borderRadius: "10px",
                      color: "white",
                      fontWeight: "bold",
                      padding: "0.5rem 0rem",
                      marginTop: "1.5rem",
                    }}
                    type={"button"}
                    onClick={onSubmit}
                    disabled={pwd==="" && id===""}
                  >
                    Sign in
                  </button>
                  <small className="d-block mx-auto gray mt-2">
                    Forgot pin?
                  </small>
                </div>
                {console.log("pwd", pwd)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
