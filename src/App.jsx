import { useState } from "react";

import "./App.css";
import { Button } from "react-bootstrap";
import costarica from "./costarica.png";
import beach from "./mainbeach.png";
import beachvacation from "./beachvacation.png";
import { Link } from "react-router-dom";
import "./index.css";
import { useRef } from "react";

function App() {
  const ref = useRef(null);
  const handleUpClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="container" ref={ref}>
        <div
          class="collapse"
          id="navbarToggleExternalContent"
          // data-bs-theme="dark"
        >
          <div class="bg-info p-4 d-flex flex-column  ">
            <Link className="text-white text-decoration-none">Home</Link>
            <Link className="text-white text-decoration-none">Places</Link>
            {/* 
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            > */}
            <Link
              className="text-white text-decoration-none"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              {" "}
              Deals
            </Link>

            {/* </button> */}

            <div
              class="modal fade "
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog beachVacation  text-black">
                <div
                  class="modal-content bg-transparent "
                  style={{ height: "350px" }}
                >
                  <div class="modal-header">
                    <h1 class="modal-title fs-4" id="exampleModalLabel">
                      Safe Travels!
                    </h1>
                    <button
                      type="button"
                      class="btn-close "
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body ">
                    <div className="container h-100  ">
                      <div className="row h-100 align-content-around justify-content-center">
                        {/* <div className="col-6">Get Your Free Travel Guide</div> */}
                        <h1>Get Your Free Travel Guide</h1>
                        <h5 className="w-75 p-0">
                          {" "}
                          Learn everything you need to know to plan for your
                          next trip
                        </h5>
                        {/* <div className="col-12">
                          Learn everything you need to know to plan for your
                          next trip
                        </div> */}

                        {/* <input
                            type="text"
                            className="w-100 bg-white border-0 h-100 p-2 "
                            placeholder="Enter Your Email"
                          /> */}

                        <div
                          style={{ height: "40px" }}
                          class="form-floating mb-3 justify-content-center w-75 p-0"
                        >
                          <input
                            type="email"
                            class="form-control w-100  border-0 h-100 p-2 "
                            id="floatingInput"
                            placeholder="name@example.com"
                          />
                          <label for="floatingInput" className="bg-transparent">
                            Email address
                          </label>
                        </div>
                        <div
                          style={{ height: "40px" }}
                          className="justify-content-center w-75 p-0"
                        >
                          <button className="w-100 bg-info border-0 h-100 fs-4">
                            Get My Free Guide
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav class="navbar navbar-dark ">
          <div class="container-fluid">
            <button
              class="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </div>
      <div className="container position-relative" style={{ height: "250px" }}>
        <img src={beach} alt="" className="h-100 w-100 " />
        <h1 className="position-absolute top-50 translate-middle start-50 text-white">
          Safe Travels
        </h1>
      </div>
      <section className="">
        <div className="container mt-4 mb-4">
          <nav class="navbar">
            <div class="container-fluid">
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2 "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn border-white text-black" type="submit">
                  Search
                </button>
              </form>
            </div>
          </nav>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-6 mb-2 mt-2">
            <div className="card shadow">
              {/* <img src="..." className="card-img-top" alt="..."> */}
              <div className="card-body">
                <img src={costarica} alt="" className="img-fluid" />

                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-6  mb-2 mt-2">
            <div className="card shadow">
              {/* <img src="..." className="card-img-top" alt="..."> */}
              <div className="card-body">
                <img src={costarica} alt="" className="img-fluid" />

                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card shadow">
              {/* <img src="..." className="card-img-top" alt="..."> */}
              <div className="card-body">
                <img src={costarica} alt="" className="img-fluid" />

                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card shadow">
              {/* <img src="..." className="card-img-top" alt="..."> */}
              <div className="card-body">
                <img src={costarica} alt="" className="img-fluid" />

                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="accordion mt-5"
          id="accordionPanelsStayOpenExample"
          style={{ height: "550px" }}
        >
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Vacation Spots
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <ul class="list-group">
                <li class="list-group-item">North America Vacations</li>
                <li class="list-group-item">South America Vacations</li>
                <li class="list-group-item">Europe Vacations</li>
                <li class="list-group-item">Asia Vacations</li>
              </ul>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Airlines
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <ul class="list-group">
                <li class="list-group-item">American Airlines</li>
                <li class="list-group-item">Delta Airlines</li>
                <li class="list-group-item">Spirit Airlines</li>
                <li class="list-group-item">Southwest Airlines</li>
                <li class="list-group-item">Frontier Airlines</li>
              </ul>
            </div>
          </div>
        </div>

        <button
          className="w-100 bg-info border-0 text-white fixed-bottom "
          style={{ height: "60px" }}
          onClick={handleUpClick}
        >
          Go Back Up
        </button>
      </div>
    </>
  );
}

export default App;
