import "./Register.scss";

const Register = ({ selectedForm, setSelectedForm }) => {
  return (
    <div
      className="register-title"
      style={
        selectedForm === "register"
          ? { backgroundColor: "white", color: "black" }
          : {}
      }
      onClick={() => {
        if (selectedForm !== "register") {
          setSelectedForm("register");
        }
      }}
    >
      <p>ԳՐԱՆՑՎԵԼ</p>
    </div>
  );
};

export default Register;
