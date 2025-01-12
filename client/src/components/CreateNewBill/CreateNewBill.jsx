import "./CreateNewBill.scss";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

export default function CreateNewBill() {
  const [billName, setBillName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("bill Name:", billName);

    if (!billName) {
      alert("please enter a name for the bill.");
      return;
    }
    try {
      const response = await axios.post(`${API_URL}/bills`, {
        bill_name: billName,
      });
      alert("bill created successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-bill">
      <h2 className="create-bill__header">Create New Bill</h2>
      <div className="create-bill__top">
        <label htmlFor="create-bill__label">
          Name the Bill
          <input
            type="text"
            name="billName"
            className="create-bill__input"
            placeholder="e.g Cheesecake Factory"
            onChange={(event) => {
              setBillName(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="create-bill__bottom">
        <Link to="/addBillItems">
          <button type="submit" className="create-bill__button">
            next
          </button>
        </Link>
      </div>
    </form>
  );
}
