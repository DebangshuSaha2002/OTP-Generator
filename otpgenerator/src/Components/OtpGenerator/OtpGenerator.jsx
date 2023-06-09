import { useState } from "react";
import React from "react";
import "./OtpGenerator.css";
const OtpGenerator = () => {
  const [otp, otpValue] = useState("");
  const onClickHandler = () => {
    const random = Math.ceil(Math.random() * 9000 + 1000);
    otpValue(random);
  };

  const otpValueMessage = (
    <p className="design-it">
      Generated OTP is :<span className="design-it-back">{otp && otp}</span>{" "}
    </p>
  );

  const noOtpValueMessage = (
    <p className="design">Press the above button to Generate OTP</p>
  );
  return (
    <>
      <div className="row mt-4">
        <div className="col-md d-flex justify-content-center mt-4">
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={onClickHandler}
          >
            <p className="mt-3">Generate</p>
          </button>
        </div>
        <div>
          {otp && otpValueMessage}
          {!otp && noOtpValueMessage}
        </div>
      </div>
    </>
  );
};

export default OtpGenerator;
