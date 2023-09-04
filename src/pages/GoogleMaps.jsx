import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

import { useState, useRef, useEffect } from "react";

export const GoogleMaps = () => {
  const google = window.google;

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 9.7489,
    lng: -83.7534,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB2yFeDmk1oV5PxGvJ5ud8ofX5JfeNMpI8",
    libraries: ["places"],
  });

  const [map, setMap] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [directionsResponse, setDirectionsResponse] = useState(null);

  const originRef = useRef("");
  const destinationRef = useRef("");

  const calculateRoute = async () => {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }

    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    });
    console.log(directionsService);
    console.log(results);
    setDirectionsResponse(results);

    // setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  };

  return (
    <>
      <div className="container mt-4  ">
        <div className="row ">
          <div className="col-sm-12 col-md-4 pe-md-0">
            {google && (
              <Autocomplete>
                <input
                  type="text"
                  placeholder="Origin"
                  ref={originRef}
                  className="w-100"
                />
              </Autocomplete>
            )}
          </div>
          <div className="col-sm-12 col-md-4 pe-md-0 ps-md-0">
            {google && (
              <Autocomplete>
                <input
                  type="text"
                  placeholder="Destination"
                  ref={destinationRef}
                  className="w-100"
                />
              </Autocomplete>
            )}
          </div>
          <div className="col-sm-12 col-md-4  ps-md-0 ">
            <button
              className="w-100 bg-info text-white border-white"
              onClick={google && calculateRoute}
            >
              Take Me There!
            </button>
          </div>

          {/* <button className="col-3 p-0">go</button> */}
        </div>
      </div>
      <div className="container ">
        <div className="row align-items-center">
          <p className="col-6 m-0">
            {" "}
            Durations: {duration ? duration : "0 Minutes"}
          </p>
          <div className="col-6">
            <button
              className="w-100 bg-info text-white border-white"
              onClick={() => {
                map.panTo(center);
              }}
            >
              center
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={5}
            // onLoad={onLoad}
            onLoad={(map) => setMap(map)}
            // onUnmount={onUnmount}
          >
            <MarkerF position={center} />
            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
            {/* Child components, such as markers, info windows, etc. */}
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default GoogleMaps;
