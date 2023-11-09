import "./Registerform.scss";

const RegisterForm = () => {
  return (
    <div className="register-content">
      <div className="register">
        <div className="user-data">
          <div className="user-data-register name">
            <p>Անուն *</p>
            <input type="text" />
          </div>
          <div className="user-data-register surname">
            <p>Ազգանուն *</p>
            <input type="text" />
          </div>
          <div className="user-data-register phone-number">
            <p>Հեռախոսահամար *</p>
            <input type="tel" />
          </div>
        </div>
        <div className="online-data">
          <div className="user-data-register email">
            <p>Էլ-Փոստ *</p>
            <input type="email" />
          </div>
          <div className="user-data-register register-password">
            <p>Գաղտնաբառ *</p>
            <input type="password" />
          </div>
          <div className="user-data-register repeat-password">
            <p>Կրկնել Գաղտնաբառը *</p>
            <input type="password" />
          </div>
        </div>
      </div>
      <div className="button-register">
        <button className="register-button">ԳՐԱՆՑՎԵԼ</button>
      </div>
    </div>
  );
};

export default RegisterForm;
