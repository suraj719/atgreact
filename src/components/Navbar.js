import React, { useEffect, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import '../styles.css'
export default function Navbar() {
  let [isloggedin,setisloggedin] = useState(false);
  useEffect(() => {
    if(localStorage.getItem("loggedin")==="yes") {
      setisloggedin(true);
      return
    }
  
    // return () => {
    //   setisloggedin(false);
    //   return
    // }
  }, [])
  
  return (
    <>
      {/* <nav className=" navbar navbar-expand-lg bg-body-tertiary"> */}
      <div className="navbar my-3">
        <div>
          <a className="navbar-brand" href="/">
            <img src="../logo.png" alt="logo" />
          </a>
        </div>
        <div style={{ width: "350px" }}>
          <input
            className="form-control rounded-5 fw-bold"
            type="search"
            placeholder="search for your favourite groups in ATG"
            aria-label="Searh"
            style={{ color: "#5C5C5C", backgroundColor: "#F2F2F2" }}
          ></input>
        </div>
        <div>
          {isloggedin ? (
            <>
              <p>
                <img src="user-icon.png" alt="user-icon"></img> Siddharth Goyal
              </p>
            </>
          ) : (
            <>
              <p
                data-bs-toggle="modal"
                data-bs-target="#SignupModal"
                style={{ cursor: "pointer" }}
              >
                create account.{" "}
                <span className="text-primary">
                  It&apos;s free!{" "}
                  <img src="../down-arrow.png" alt="down-arrow"></img>
                </span>
              </p>
            </>
          )}
        </div>
      </div>
      {/* </nav> */}

      <div
        className="modal fade mt-5"
        id="SignupModal"
        aria-labelledby="SignupModalLabel"
        aria-hidden="true"
      >
        <button
          data-bs-dismiss="modal"
          className="closemodalbtn"
          style={{
            float: "right",
            marginRight: "170px",
            border: "none",
          }}
        >
          <img className="mb-1" src="../close-icon.png" alt="close-icon"></img>
        </button>
        <Signup />
      </div>
      <div
        className="modal fade mt-5"
        id="LoginModal"
        aria-labelledby="LoginModalLabel"
        aria-hidden="true"
      >
        <button
          data-bs-dismiss="modal"
          className="closemodalbtn"
          style={{
            float: "right",
            marginRight: "170px",
            border: "none",
          }}
        >
          <img className="mb-1" src="../close-icon.png" alt="close-icon"></img>
        </button>
        <Login />
      </div>
    </>
  );
}
