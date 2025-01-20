import "./SplitSuccess.scss";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { useNavigate } from "react-router-dom";

export default function SplitSuccess() {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };

  return (
    <div className="success-split">
      <div className="success-split__upper">
        <h3 className="success-split__header">Bill Split Successfully!</h3>
        <span className="success-split__icon">
          <CelebrationIcon style={{ fontSize: "3.125rem" }} />
          <CelebrationIcon style={{ fontSize: "3.125rem" }} />
          <CelebrationIcon style={{ fontSize: "3.125rem" }} />
        </span>
        <p className="success-split__friends-notified">Friends Notified.</p>
      </div>
      <div className="success-split__lower">
        <button onClick={handleReturnHome}>Return Home</button>
      </div>
    </div>
  );
}
