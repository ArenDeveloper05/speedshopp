import { useState } from "react";
import Login from "./login/Login";
import LorginForm from "./login/login-form/LoginForm";
import Register from "./register/Register";
import RegisterForm from "./register/register-form/RegisterForm";

import "./Sign.scss";

const Sign = () => {
  const [selectedForm, setSelectedForm] = useState("login");

  return (
    <div className="sign">
      <div className="sign-form">
        <div className="sign-top">
          <Login
            selectedForm={selectedForm}
            setSelectedForm={setSelectedForm}
          />
          <Register
            selectedForm={selectedForm}
            setSelectedForm={setSelectedForm}
          />
        </div>
        <div className="sign-content">
          {selectedForm === "login" ? <LorginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
};

export default Sign;
