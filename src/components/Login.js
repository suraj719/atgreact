import React, { useState } from "react";
import "..//styles.css";

export default function Login() {
  const [visible, setVisible] = useState(false);
  const saved = () => {
    localStorage.setItem("loggedin", "yes");
  }
  return (
    <>
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div
            className="modal-heade pt-3 text-center"
            style={{ backgroundColor: "#EFFFF4" }}
          >
            <p
              className="text-center fs-5 fw-semibold"
              style={{ color: "#008A45" }}
            >
              Let&apos;s learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </p>
          </div>
          <div className="modal-body">
            <div className="modal-b d-flex mb-5">
              <div className="mr" style={{ marginRight: "150px" }}>
                <div className="md" style={{ marginLeft: "70px" }}>
                  <p className="mtts fs-3 fw-bold">Sign In</p>
                  <p className="mtt fs-3 fw-bold">Welcome Back</p>

                  <div>
                    <form className="signup-form text-mute fs-5">
                      <input
                        placeholder="Email"
                        type={"email"}
                        required
                        style={{
                          width: "100%",
                          backgroundColor: "#F7F8FA",
                          borderBottom: "0",
                        }}
                      ></input>
                      <div className="d-flex">
                        <input
                          placeholder="Password"
                          required
                          type={visible ? "text" : "password"}
                          style={{
                            width: "100%",
                            backgroundColor: "#F7F8FA",
                            borderRight: "none",
                          }}
                        ></input>
                        <div
                          style={{
                            paddingTop: "0.8rem",
                            paddingBottom: "0.5rem",
                            paddingRight: "0.5rem",
                            backgroundColor: "#F7F8FA",
                            borderTop: "2px solid #D9D9DB",
                            borderRight: "2px solid #D9D9DB",
                            borderBottom: "2px solid #D9D9DB",
                          }}
                        >
                          <img
                          onClick={() => setVisible(!visible)}
                            src="../eye-icon.png"
                            alt="toggle type"
                            style={{
                              float: "right",
                              width: "1.7rem",
                              height: "1.2rem",
                              outline: "none",
                              border: "none",
                              backgroundColor: "#F7F8FA",
                            }}
                          ></img>
                        </div>
                      </div>
                      <button
                        className="mobcreatebtn mt-3 btn btn-primary rounded-pill text-center"
                        type={"submit"}
                        style={{ width: "100%"}}
                        onClick={saved}
                      >
                        Sign In
                      </button>
                      <span
                    className="mobsigninbtn text-dark fw-semibold"
                    data-bs-toggle="modal"
                    data-bs-target="#SignupModal"
                    style={{cursor: "pointer",textDecoration:"underline" }}
                  >
                    or, create account
                  </span>
                    </form>
                  </div>
                  <div>
                    <button
                      className="fw-semibold mt-3 btn border border-2"
                      style={{ width: "100%" }}
                    >
                      <img src="../fb-logo.png" alt="fb-logo"></img> Sign in
                      with Facebook
                    </button>
                    <button
                      className="mt-2 fw-semibold btn border border-2"
                      style={{ width: "100%" }}
                    >
                      <img src="../google-logo.png" alt="google-logo"></img>{" "}
                      Sign in with Google
                    </button>
                    <p className="text-center mt-4 fw-bold text-dark fs-6">
                      Forgot Password?
                    </p>
                  </div>
                </div>
              </div>
              <div className="mobile-signup-right">
              <div className="me-5" style={{ float: "right" }}>
                  <span className="me- fw-semibold fs-6">
                    Don&apos;t have an account yet?{" "}
                  </span>
                  <span
                    className=" text-primary fw-bold"
                    data-bs-toggle="modal"
                    data-bs-target="#SignupModal"
                    style={{ cursor: "pointer" }}
                  >
                    Create new for free!
                  </span>
                </div>
                <img className="mt-4" style={{marginRight:"-200px"}} src="../signup.png" alt="signup"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
