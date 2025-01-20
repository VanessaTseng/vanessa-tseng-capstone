import "./SignIn.scss";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/");
  };

  const handleSignUp = () => {
    navigate("/sign-up");
  };

  return (
    <>
      <div className="sign-in-wrapper">
        <div className="sign-in">
          <div className="sign-in__banner">
            <h1 className="sign-in__logo">Splitly</h1>
          </div>
          <div className="sign-in__upper">
            <h3 className="sign-in__header">Sign In</h3>
            <p className="sign-in__signup">
              Don't have an account?{" "}
              <span onClick={handleSignUp} className="sign-in__span">
                Sign Up
              </span>
            </p>
          </div>
          <div className="sign-in__lower">
            <h5 className="sign-in__title">Email</h5>
            <input
              type="text"
              className="sign-in__input"
              placeholder="user@gmail.com"
            />
            <h5 className="sign-in__title">Password</h5>
            <input
              type="text"
              className="sign-in__input"
              placeholder="6 characters or more"
            />
          </div>
        </div>
        <button onClick={handleSignIn} className="sign-in__button">
          Sign In
        </button>
      </div>
    </>
  );
}
