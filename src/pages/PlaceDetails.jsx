import React from "react";
import costarica from "../costarica.png";
import { useEffect } from "react";
import { GoogleMaps } from "./GoogleMaps";
export const PlaceDetails = () => {
  // overall, cost,internet, fun,safety

  useEffect(() => {}, []);

  return (
    <>
      <div className="container mt-4">
        <img src={costarica} alt="" className="img-fluid" />
        <h2 className="mt-3">Costa Rica</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="container mt-4">
        <div className="row align-items-center justify-content-around">
          <div className="col-2 p-0">Overall</div>
          <div class="progress col-9 p-0">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "75%" }}
            ></div>
          </div>
          {/* <div className="col">Cost</div>
          <div className="col">Internet</div>
          <div className="col">Fun</div>
          <div className="col">Safety</div> */}
        </div>
        <div className="row align-items-center justify-content-around">
          <div className="col-2 p-0">Cost</div>
          <div class="progress col-9 p-0">
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "35%" }}
            ></div>
          </div>
        </div>
        <div className="row align-items-center justify-content-around">
          <div className="col-2 p-0">Internet</div>
          <div class="progress col-9 p-0">
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "55%" }}
            ></div>
          </div>
        </div>
        <div className="row align-items-center justify-content-around">
          <div className="col-2 p-0">Fun</div>
          <div class="progress col-9 p-0">
            <div
              class="progress-bar "
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "45%" }}
            ></div>
          </div>
        </div>
        <div className="row align-items-center justify-content-around">
          <div className="col-2 p-0">Safety</div>
          <div class="progress col-9 p-0">
            <div
              class="progress-bar bg-danger"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "25%" }}
            ></div>
          </div>
        </div>
      </div>
      <GoogleMaps />
    </>
  );
};
