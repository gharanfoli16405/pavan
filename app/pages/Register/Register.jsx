import { useState } from "react";
import OTPVerification from "./sections/OTPVerification";
import UserTypes from "./sections/UserTypes";

const Register = () => {
  const [step, setStep] = useState(1);

  return (
    <>
      <div className="w-10/12 xl:w-4/12 border border-blue-400">
        {step === 1 ? <UserTypes setStep={setStep} /> : <OTPVerification />}
      </div>
    </>
  );
};

export default Register;
