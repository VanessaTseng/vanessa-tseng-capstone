import "./AddBillItems.scss";

export default function AddBillItems() {
  return (
    <div className="add-items">
      <div className="add-items__container">
        <p className="add-items__title">qty</p>
        <input className="add-items__input" type="text" />
      </div>
      <div className="add-items__container">
        <p className="add-items__title">Item Name</p>
        <input className="add-items__input" type="text" />
      </div>
      <div className="add-items__container">
        <p className="add-items__title">Price</p>
        <input className="add-items__input" type="text" />
      </div>
      <button className="add-items__button">+ Add Item</button>
    </div>
  );
}
