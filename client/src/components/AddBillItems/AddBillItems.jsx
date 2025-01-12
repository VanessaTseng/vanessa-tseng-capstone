import "./AddBillItems.scss";
import { useState } from "react";

export default function AddBillItems() {
  const [qty, setQty] = useState("");
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!qty || !itemName || !price) {
      alert("please enter all fields!");
    }

    const newBillItem = { qty, itemName, price };
    console.log(newBillItem);
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
              type="text"
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
              type="text"
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
        <h4 className="items-list__header">Cheesecake Factory</h4>
        <div className="items-list__item">
          <div className="items-list__data">
            <p>38x</p>
            <p>steam soup dumpling pork</p>
            <p>$189.62</p>
          </div>
          <div className="items-list__users">
            <div className="items-list__circle"></div>
            <div className="items-list__add-user"></div>
          </div>
          <p>5 persons</p>
        </div>
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
