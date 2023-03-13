import React from "react";

export default function FormValidationError({errorMessage}) {
  return (
    <>
      {errorMessage ? (
        <div
          style={{
            // textAlign: "center",
            fontSize: "smaller",
            color: "red",
          }}
        >
          {errorMessage}
        </div>
      ) : null}
    </>
  );
}
