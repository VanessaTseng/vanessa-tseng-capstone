import "./Signup.scss";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate("/sign-in");
  };

  const handleCreateAccount = () => {
    navigate("/sign-in");
    alert("Account Successfully Created!");
  };
  return (
    <>
      <div className="sign-up-wrapper">
        <div className="sign-up">
          <div className="sign-up__banner">
            <h1 className="sign-up__logo">Splitly</h1>
          </div>
          <div className="sign-up__upper">
            <h3 className="sign-up__header">
              Create your <br />
              free account
            </h3>
            <p className="sign-up__signup">
              Already have an account?{" "}
              <span onClick={handleLogIn} className="sign-up__span">
                Sign In
              </span>
            </p>
          </div>
          <div className="sign-up__lower">
            <h5 className="sign-up__title">Name</h5>
            <input
              type="text"
              className="sign-up__input"
              placeholder="John Doe"
            />
            <h5 className="sign-up__title">Email</h5>
            <input
              type="text"
              className="sign-up__input"
              placeholder="user@gmail.com"
            />
            <h5 className="sign-up__title">Password</h5>
            <input
              type="password"
              className="sign-up__input"
              placeholder="6 characters or more"
            />
          </div>
        </div>
        <button onClick={handleCreateAccount} className="sign-up__button">
          Create Account
        </button>
      </div>
    </>
  );
}
