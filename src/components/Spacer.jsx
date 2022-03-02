import React from "react";

function Spacer({ texto }) {
  return (
    <>
      <div className="  mx-auto my-4 py-2 text-center bg-primary container-sm rounded" style={{ borderBottom: "solid 3px orange", width: "95%" }}>
        <h4 className="text-light m-0 p-0">{texto}</h4>
      </div>
    </>
  );
}

export default Spacer;
