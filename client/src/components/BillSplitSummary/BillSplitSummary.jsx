import "./BillSplitSummary.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export default function BillSummary() {
  const { bill_id } = useParams();
  const [billData, setBillData] = useState({ bill_name: "", userSplits: {} });

  useEffect(() => {
    const getBillData = async () => {
      try {
        const response = await axios.get(`${API_URL}/bills/${bill_id}/splits`);
        setBillData(response.data);
      } catch (error) {
        console.error("Error getting bill splits:", error);
      }
    };

    getBillData();
  }, [bill_id]);

  return (
    <div>
      <div className="bill-split">
        <h3 className="bill-split__name">{billData.bill_name}</h3>
        {Object.entries(billData.userSplits).map(([userId, userData]) => (
          <div className="bill-split__user" key={userId}>
            <div className="user">
              <div className="user-left">
                <img
                  className="user__image"
                  src={`${API_URL}${userData.friend_photo}`}
                  alt={`${userData.friend_name}'s profile photo`}
                />
              </div>
              <div className="user__right">
                <div className="user__wrapper">
                  <h5 className="user__name">
                    {userData.friend_name}'s Total{" "}
                  </h5>
                  <h5 className="user__total">${userData.total.toFixed(2)}</h5>
                </div>
                <div className="user__wrapper">
                  <p className="user__tax">HST</p>
                  <p className="user__tax">${userData.hst.toFixed(2)}</p>
                </div>
              </div>
            </div>
            {userData.items.map((item, index) => (
              <div className="user__wrapper">
                <p className="user__fractions" key={index}>
                  {item.fraction} {item.item_name}
                </p>
                <p className="user__price">${item.item_price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div>
        <button>Confirm Split</button>
      </div>
    </div>
  );
}
