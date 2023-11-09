import "./loginForm.scss";
import { Link } from "react-router-dom";

const LorginForm = () => {
  return (
    <div className="username">
      <div className="username-form">
        <p>Մուտքանուն կամ էլ-փոստի հասցեն * </p>
        <input className="username-input" type="text" />
      </div>
      <div className="password">
        <p>Գաղտնաբառ *</p>
        <input className="password-input" type="text" />
      </div>
      <div className="remember-me">
        <div className="remember">
          <input className="remember-checkbox" type="checkbox" />
          <p>Հիշել ինձ</p>
        </div>
        <div className="to-forget">
          <Link to={"/"}>Մոռացել եմ գաղտնաբառը</Link>
        </div>
      </div>
      <div className="button-login">
        <button className="login-button">ՄՈՒՏՔ</button>
      </div>
    </div>
  );
};

export default LorginForm;
