import "./Sign.scss";
import Login from "./login/login";
import Register from "./register/register";
import LorginForm from "./login/login-form/loginForm";
import RegisterForm from "./register/register-form/registerform";

const Sign = () => {
  return (
    <div className="sign">
      <div className="sign-form">
        <div className="sign-top">
          <Login />
          <Register />
        </div>
        <div className="form">
          <LorginForm />
          <RegisterForm/>
        </div>
      </div>
    </div>
  );
};

export default Sign;
