import "./AddBillItems.scss";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export default function AddBillItems() {
  const { bill_id, bill_name } = useParams();
  console.log("bill id:", bill_id);
  const location = useLocation();
  const billName = location.state?.billName;

  const [qty, setQty] = useState(1);
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState(0);

  const [items, setItems] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!qty || !itemName || !price) {
      alert("please enter all fields");
    }
    try {
      const response = await axios.post(`${API_URL}/items`, {
        bill_id: bill_id,
        item_name: itemName,
        qty: qty,
        item_price: price,
      });

      console.log(response.data);
      console.log(response.data.item_id);

      setItems((prevItems) => [
        ...prevItems,
        {
          bill_id: bill_id,
          item_id: response.data.item_id,
          item_name: itemName,
          qty: qty,
          item_price: price,
        },
      ]);

      setItemName("");
      setQty(1);
      setPrice(0);
    } catch (error) {
      console.error(error);
      alert("failed to add item");
    }
  };

  return (
    <div className="add-bill-items">
      <div className="add-items">
        <h2 className="add-items__header">Add Bill Items</h2>
        <form onSubmit={handleSubmit} className="add-items__form">
          <div className="add-items__container">
            <p className="add-items__title">qty</p>
            <input
              className="add-items__input"
              type="number"
              name="qty"
              value={qty}
              onChange={(event) => setQty(event.target.value)}
            />
          </div>
          <div className="add-items__container">
            <p className="add-items__title">Item Name</p>
            <input
              className="add-items__input"
              type="text"
              name="itemName"
              value={itemName}
              onChange={(event) => setItemName(event.target.value)}
            />
          </div>
          <div className="add-items__container">
            <p className="add-items__title">Price</p>
            <input
              className="add-items__input"
              type="number"
              name="price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>
          <button className="add-items__button" type="submit">
            + Add Item
          </button>
        </form>
      </div>
      <div className="items-list">
        <h4 className="items-list__header">{billName}</h4>
        {items.map((item) => (
          <div key={item.item_id} className="items-list__item">
            <div className="items-list__data">
              <p>{item.qty}</p>
              <p>{item.item_name}</p>
              <p>{item.item_price}</p>
            </div>
            <div className="items-list__users">
              <div className="items-list__circle"></div>
              <div className="items-list__add-user"></div>
            </div>
            <p>5 persons</p>
          </div>
        ))}
      </div>
      <div className="totals">
        <div className="totals__wrapper">
          <p className="totals__label">Subtotal</p>
          <p className="totals__value">$241.54</p>
        </div>
        <div className="totals__wrapper">
          <p className="totals__label">HST</p>
          <p className="totals__value">$31.40</p>
        </div>
        <div className="totals__wrapper">
          <p className="totals__label">Total Bill</p>
          <p className="totals__value">$272.95</p>
        </div>
      </div>
      <button>Create Bill</button>
    </div>
  );
}
