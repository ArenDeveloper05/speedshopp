import "./Login.scss";

const Login = ({ selectedForm, setSelectedForm }) => {
  return (
    <div
      className="login-title"
      style={
        selectedForm === "login"
          ? { backgroundColor: "white", color: "black" }
          : {}
      }
      onClick={() => {
        if (selectedForm !== "login") {
          setSelectedForm("login");
        }
      }}
    >
      <p>ՄՈՒՏՔ</p>
    </div>
  );
};

export default Login;
