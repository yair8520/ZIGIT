import React from "react";
import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div className="center-div">
      <ReactLoading type={"spin"} color="#030202" />
    </div>
  );
}
