import "./BillSplitSummary.scss";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const API_URL = import.meta.env.VITE_API_URL;

export default function BillSummary() {
  const { bill_id } = useParams();
  const [billData, setBillData] = useState({ bill_name: "", userSplits: {} });

  const navigate = useNavigate();

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

  const handleConfirmSplit = () => {
    navigate("/success");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="bill-split-wrapper">
      <div className="bill-split">
        <span className="material-symbols-outlined" onClick={goBack}>
          <ArrowBackIosIcon />
        </span>
        <div className="bill-split__header-wrapper">
          <h3 className="bill-split__name">{billData.bill_name}</h3>
        </div>
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
                  <h6 className="user__name">
                    {userData.friend_name}'s Total{" "}
                  </h6>
                  <h6 className="user__total">${userData.total.toFixed(2)}</h6>
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
      <div className="confirm-split">
        <button className="confirm-split__button" onClick={handleConfirmSplit}>
          Confirm Split
        </button>
      </div>
    </div>
  );
}
