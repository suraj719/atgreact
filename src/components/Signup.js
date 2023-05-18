import React, { useState } from "react";
import "../styles.css";
export default function Signup() {
  const [visible, setVisible] = useState(false);
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
            <div className=" modal-b d-flex mb-5">
              <div className="mr" style={{ marginRight: "150px" }}>
                <div className="md" style={{ marginLeft: "70px" }}>
                  <p className="fs-3 fw-bold">Create Account</p>
                  <div>
                    <form name="fomrcontrol" className="signup-form text-mute mt-4 fs-5">
                      <div className="d-flex flex-wrap">
                        <input
                          placeholder="First Name"
                          style={{ width: "50%", backgroundColor: "#F7F8FA" }}
                          type={"text"}
                          required
                        ></input>
                        <input
                          placeholder="Last Name"
                          style={{
                            width: "50%",
                            backgroundColor: "#F7F8FA",
                            borderLeft: "0",
                          }}
                          type={"text"}
                        ></input>
                      </div>
                      <input
                        placeholder="Email"
                        type={"email"}
                        required
                        style={{
                          width: "100%",
                          backgroundColor: "#F7F8FA",
                          borderTop: "0",
                          borderBottom: "0",
                        }}
                      ></input>
                      <div className="d-flex">
                        <input
                          key={"passinp"}
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
                      <input
                        placeholder="Confirm Password"
                        type={"password"}
                        required
                        style={{
                          width: "100%",
                          backgroundColor: "#F7F8FA",
                          borderTop: "0",
                        }}
                      ></input>
                      <button
                        className="mobcreatebtn btn btn-primary rounded-pill text-center"
                        type={"submit"}
                        style={{ width: "100%",marginTop:"20px"}}
                      >
                        Create Account
                      </button>
                      <span
                    className="mobsigninbtn text-dark fw-semibold"
                    data-bs-toggle="modal"
                    data-bs-target="#LoginModal"
                    style={{cursor: "pointer",textDecoration:"underline" }}
                  >
                    or, Sign In
                  </span>
                    </form>
                  </div>
                  <div>
                    <button
                      className="mt-3 fw-semibold btn border border-2"
                      style={{ width: "100%" }}
                    >
                      <img src="../fb-logo.png" alt="fb-logo"></img> Sign up
                      with Facebook
                    </button>
                    <button
                      className="mt-2 fw-semibold btn border border-2"
                      style={{ width: "100%" }}
                    >
                      <img src="../google-logo.png" alt="google-logo"></img>{" "}
                      Sign up with Google
                    </button>
                    <p className="mobsignupbottom mt-4 text-center fs-6 fw-semibold text-muted">By signing up, you agree to our Terms & conditions, Privacy policy</p>
                  </div>
                </div>
              </div>
              <div className="mobile-signup-right">
                <div className="me-5" style={{ float: "right" }}>
                  <span className="me- fw-semibold fs-6">
                    Already have an account?{" "}
                  </span>
                  <span
                    className=" text-primary fw-bold"
                    data-bs-toggle="modal"
                    data-bs-target="#LoginModal"
                    style={{ cursor: "pointer" }}
                  >
                    Sign In
                  </span>
                </div>
                <img className="ms-5" src="../signup.png" alt="signup"></img>
                <p className="text-muted fs-6">
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
