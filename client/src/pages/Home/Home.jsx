import { Link } from "react-router-dom";
import "./Home.scss";

export default function Home() {
  return (
    <Link to="/createNewBill">
      <button>Create New Bill</button>
    </Link>
  );
}
