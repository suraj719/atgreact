"use client";
import "./styles.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
export default function Home() {

  let [isloggedin,setisloggedin] = useState(false);
  useEffect(() => {
    if(localStorage.getItem("loggedin")==="yes") {
      setisloggedin(true);
      return
    }
  
    return () => {
      setisloggedin(false);
      return
    }
  }, [])
  

  let [isjoined, setisjoined] = useState(false);
  let [isfollowed1, setisfollowed1] = useState(false);
  let [isfollowed2, setisfollowed2] = useState(false);
  let [isfollowed3, setisfollowed3] = useState(false);
  let [isfollowed4, setisfollowed4] = useState(false);

  return (
    <>
      <div className="header">
        <div className="text-white" style={{ position: "relative" }}>
          <img className="bg-pic" src="../bg-pic.png" alt="bg-pic"></img>
          <div className="tt">
            <p className="fw-bold" style={{ fontSize: "36px" }}>
              Computer Engineering
            </p>
            <p>142,765 Computer Engineers follow this</p>
          </div>
        </div>
        <div className="mobile-header">
          <img
            className="ms-4"
            src="../back-arrow-icon.png"
            alt="icon-back"
          ></img>
          <div
            className=""
            style={{
              float: "right",
              position: "absolute",
              right: "30px",
              top: "5px",
            }}
          >
            {isloggedin ? (
              <>
                {isjoined ? (
                  <button
                  onClick={() => setisjoined(false)}
                    className="btn border fw-bold text-white"
                    style={{ backgroundColor: "transparent" }}
                  >
                    Leave Group
                  </button>
                ) : (
                  <button
                  onClick={() => setisjoined(true)}
                    className="btn border fw-bold text-white"
                    style={{ backgroundColor: "transparent" }}
                  >
                    Join Group
                  </button>
                )}
              </>
            ) : (
              <>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#SignupModal"
                  className="btn border fw-bold text-white"
                  style={{ backgroundColor: "transparent" }}
                >
                  Join Group
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="whole-articles d-flex">
        <div className="mobile-articles">
          <div className="links fs-4">
            <Link
               to='/'
              className="text-dark fw-semibold border-bottom border-3 border-dark"
            >
              All Posts(32)
            </Link>
            <Link to='/'  >Article</Link>
            <Link to='/' >Event</Link>
            <Link to='/' >Education</Link>
            <Link  to='/'>Job</Link>
          </div>
          <div className="mobile-links">
            <p className="fw-bold fs-5 ms-3">Posts(368)</p>
            <button
              className="btn text-dark fw-bold"
              style={{
                backgroundColor: "#F1F3F5",
                position: "absolute",
                right: "15px",
              }}
            >
              {" "}
              Filter: ALL{" "}
              <img className="ms-2" src="down-arrow.png" alt="down-arrow"></img>
            </button>
          </div>
          <div>
            <hr />
            <div className="card mt-4">
              <div>
                <img className="ar-img" src="../ar1bg.png" alt="ar1bg"></img>
              </div>
              <div className="mx-4 mt-4">
                <div>
                  <img src="../artag1.png" alt="artag1"></img>
                </div>
                <div className="mt-3 d-flex">
                  <p className="fw-bold fs-4">
                    What if famous brands had regular fonts? Meet RegulaBrands!
                  </p>
                  <img
                    className=""
                    src="../ar-info.png"
                    alt="info"
                    style={{
                      height: "0.7rem",
                      width: "1.8rem",
                      position: "absolute",
                      right: "24.67px",
                    }}
                  ></img>
                </div>
                <p className="fs-5">
                  I&apos;ve worked in UX for the better part of a decade. From now
                  on, I plan to rei…
                </p>
                <div className="d-flex">
                  <p className="fw-bold">
                    <img className="me-3" src="../aruser1.png" alt="aruser1"></img>sarthak
                    Kamra
                  </p>
                  <div style={{ position: "absolute", right: "24.67px" }}>
                    <img src="../eye-icon.png" alt="view-icon"></img>
                    <span className="ms-2 fw-semibold text-muted">
                      1.4k views
                    </span>
                    <img
                      className="ms-5"
                      src="../arshare.png"
                      alt="article-share"
                    ></img>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mt-4">
              <div>
                <img className="ar-img" src="../ar2bg.png" alt="arimg"></img>
              </div>
              <div className="mx-4 mt-4">
                <div>
                  <img src="../artag2.png" alt="artag2"></img>
                </div>
                <div className="mt-3 d-flex">
                  <p className="fw-bold fs-4">
                    Tax Benefits for Investment under National Pension Scheme
                    launched by Government
                  </p>
                  <img
                    className=""
                    src="../ar-info.png"
                    alt="info"
                    style={{
                      height: "0.7rem",
                      width: "1.8rem",
                      position: "absolute",
                      right: "24.67px",
                    }}
                  ></img>
                </div>
                <p className="fs-5">
                  I&apos;ve worked in UX for the better part of a decade. From now
                  on, I plan to rei…
                </p>
                <div className="d-flex">
                  <p className="fw-bold">
                    <img className="me-3" src="../aruser2.png" alt="aruser2"></img>Sarah West
                  </p>
                  <div style={{ position: "absolute", right: "24.67px" }}>
                    <img src="../eye-icon.png" alt="view-icon"></img>
                    <span className="ms-2 fw-semibold text-muted">
                      1.4k views
                    </span>
                    <img
                      className="ms-5"
                      src="../arshare.png"
                      alt="article-share"
                    ></img>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mt-4">
              <div>
                <img className="ar-img" src="../ar3bg.png" alt="ar3bg"></img>
              </div>
              <div className="mx-4 mt-4">
                <div>
                  <img src="../artag3.png" alt="artag3"></img>
                </div>
                <div className="mt-3 d-flex">
                  <p className="fw-bold fs-4">
                    What if famous brands had regular fonts? Meet RegulaBrands!
                  </p>
                  <img
                    className=""
                    src="../ar-info.png"
                    alt="info"
                    style={{
                      height: "0.7rem",
                      width: "1.8rem",
                      position: "absolute",
                      right: "24.67px",
                    }}
                  ></img>
                </div>
                <div className="d-flex">
                  <div>
                    <img src="../calender-icon.png" alt="calender-icon"></img>
                    <span className="mt-5 fw-semibold"> Fri, 12Oct, 2018</span>
                  </div>
                  <div className="ms-5">
                    <img src="../location-icon.png" alt="location-icon"></img>
                    <span className="fw-semibold"> Ahmedabad, India</span>
                  </div>
                </div>
                <div className="rounded-5 my-3 fs-5 text-center fw-semibold py-2 border">
                  <a href="/" style={{ color: "#E56135", cursor: "pointer" }}>
                    visit Website
                  </a>
                </div>
                <div className="d-flex">
                  <p className="fw-bold">
                    <img className="me-3" src="../aruser3.png" alt="aruser3"></img>Ronal Jones
                  </p>
                  <div style={{ position: "absolute", right: "24.67px" }}>
                    <img src="../eye-icon.png" alt="view-icon"></img>
                    <span className="ms-2 fw-semibold text-muted">
                      1.4k views
                    </span>
                    <img
                      className="ms-5"
                      src="../arshare.png"
                      alt="article-share"
                    ></img>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mt-4">
              <div className="mx-4 mt-4">
                <div>
                  <img src="../artag4.png" alt="user4"></img>
                </div>
                <div className="mt-3 d-flex">
                  <p className="fw-bold fs-4">Software Developer</p>
                  <img
                    className=""
                    src="../ar-info.png"
                    alt="info"
                    style={{
                      height: "0.7rem",
                      width: "1.8rem",
                      position: "absolute",
                      right: "24.67px",
                    }}
                  ></img>
                </div>
                <div className="d-flex">
                  <div>
                    <img src="../suit-icon.png" alt="calender-icon"></img>
                    <span className="mt-5 fw-semibold">
                      {" "}
                      Innovaccer Analytics Private Ltd.
                    </span>
                  </div>
                  <div className="ms-5">
                    <img src="../location-icon.png" alt="location-icon"></img>
                    <span className="fw-semibold"> Noida, India</span>
                  </div>
                </div>
                <div className="rounded-5 my-3 fs-5 text-center fw-semibold py-2 border">
                  <a href="/" style={{ color: "#02B875", cursor: "pointer" }}>
                    Apply on TimesJobs
                  </a>
                </div>
                <div className="d-flex">
                  <p className="fw-bold">
                    <img className="me-3" src="../user-icon.png" alt="usericon"></img>Joseph
                    Gray
                  </p>
                  <div style={{ position: "absolute", right: "24.67px" }}>
                    <img src="../eye-icon.png" alt="view-icon"></img>
                    <span className="ms-2 fw-semibold text-muted">
                      1.4k views
                    </span>
                    <img
                      className="ms-5"
                      src="../arshare.png"
                      alt="article-share"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-right" style={{ marginLeft: "130px" }}>
          <div>
            <button
              className="btn text-dark fw-semibold"
              style={{ backgroundColor: "#EDEEF0" }}
            >
              Write a Post <img src="../down-arrow.png" alt="arrow-down"></img>
            </button>
            {isloggedin ? (
              <>
                {isjoined ? (
                  <button
                    onClick={() => setisjoined(false)}
                    className="ms-3  border border-3 text-muted fw-semibold"
                  >
                    <img src="../leave-icon.png" alt="join-icon"></img> Leave
                    Group
                  </button>
                ) : (
                  <button
                    onClick={() => setisjoined(true)}
                    className="ms-3 btn btn-primary"
                  >
                    <img src="../join-icon.png" alt="join-icon"></img> Join
                    Group
                  </button>
                )}
                )
              </>
            ) : (
              <>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#SignupModal"
                  style={{ cursor: "pointer" }}
                  className="ms-3 btn btn-primary"
                >
                  <img src="../join-icon.png" alt="join-icon"></img> Join Group
                </button>
              </>
            )}
          </div>
          <hr />
          <div className="mt-5">
            <img src="../location-icon.png" alt="location-icon"></img>{" "}
            <input
              onFocus={() =>
                (document.querySelector(".pencil-icon").src =
                  "../close-icon.png")
              }
              onBlur={() =>
                (document.querySelector(".pencil-icon").src =
                  "../pencil-icon.png")
              }
              className="location-input text-dark fw-semibold border-0"
              placeholder="Enter your location"
              defaultValue={"Noida, India"}
            ></input>{" "}
            <img
              className="ms-5 pencil-icon"
              src="../pencil-icon.png"
              alt="pencil-icon"
            ></img>
          </div>
          <hr />
          <div className="mt-5">
            <img src="../info-icon.png" alt="info-icon"></img>{" "}
            <span>
              {" "}
              Your location will help us serve better <br /> and extend a
              personalised experience.
            </span>
          </div>
          {isloggedin ? (
            <div>
              <div className="mt-5">
                <span className="text-muted fw-semibold fs-5">
                  <img src="../like-icon.png" alt="like-icon"></img> RECOMMENDED
                  GROUPS
                </span>
                <div className="mt-4 text-dark fw-semibold fs-5">
                  <p>
                    <img src="../rm1.png" alt="group1"></img> Leisure{" "}
                    {isfollowed1 ? (
                      <button
                        onClick={() => setisfollowed1(false)}
                        className="btn btn-dark text-white rounded-pill"
                        style={{ float: "right" }}
                      >
                        Followed
                      </button>
                    ) : (
                      <button
                        onClick={() => setisfollowed1(true)}
                        className="btn text-dark rounded-pill"
                        style={{ backgroundColor: "#EDEEF0", float: "right" }}
                      >
                        Follow
                      </button>
                    )}
                  </p>
                </div>
                <div className="mt-4 text-dark fw-semibold fs-5">
                  <p>
                    <img src="../rm2.png" alt="group1"></img> Activism{" "}
                    {isfollowed2 ? (
                      <button
                        onClick={() => setisfollowed2(false)}
                        className="btn btn-dark text-white rounded-pill"
                        style={{ float: "right" }}
                      >
                        Followed
                      </button>
                    ) : (
                      <button
                        onClick={() => setisfollowed2(true)}
                        className="btn text-dark rounded-pill"
                        style={{ backgroundColor: "#EDEEF0", float: "right" }}
                      >
                        Follow
                      </button>
                    )}
                  </p>
                </div>
                <div className="mt-4 text-dark fw-semibold fs-5">
                  <p>
                    <img src="../rm3.png" alt="group1"></img> MBA{" "}
                    {isfollowed3 ? (
                      <button
                        onClick={() => setisfollowed3(false)}
                        className="btn btn-dark text-white rounded-pill"
                        style={{ float: "right" }}
                      >
                        Followed
                      </button>
                    ) : (
                      <button
                        onClick={() => setisfollowed3(true)}
                        className="btn text-dark rounded-pill"
                        style={{ backgroundColor: "#EDEEF0", float: "right" }}
                      >
                        Follow
                      </button>
                    )}
                  </p>
                </div>
                <div className="mt-4 text-dark fw-semibold fs-5">
                  <p>
                    <img src="../rm4.png" alt="group1"></img> Philosophy{" "}
                    {isfollowed4 ? (
                      <button
                        onClick={() => setisfollowed4(false)}
                        className="btn btn-dark text-white rounded-pill"
                        style={{ float: "right" }}
                      >
                        Followed
                      </button>
                    ) : (
                      <button
                        onClick={() => setisfollowed4(true)}
                        className="btn text-dark rounded-pill"
                        style={{ backgroundColor: "#EDEEF0", float: "right" }}
                      >
                        Follow
                      </button>
                    )}
                  </p>
                </div>
              </div>
              <a
                href="/"
                className="fs-6 text-primary"
                style={{ float: "right", textDecoration: "none" }}
              >
                See More....
              </a>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
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
        <Login/>
      </div>
    </>
  );
}
