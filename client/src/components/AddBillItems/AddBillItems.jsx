import "./AddBillItems.scss";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import FriendSplit from "../FriendSplit/FriendSplit";

const API_URL = import.meta.env.VITE_API_URL;

export default function AddBillItems() {
  const { bill_id } = useParams();
  const location = useLocation();
  const billName = location.state.billName;

  const [qty, setQty] = useState(1);
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState(0);

  const [items, setItems] = useState([]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [itemFriends, setItemFriends] = useState([]);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleSelectedFriends = (friends) => {
    setItemFriends(friends);
  };

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
        item_price: parseFloat(price),
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
          item_price: parseFloat(price),
          friends: [],
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

  const subtotal = items.reduce(
    (acc, item) => acc + parseFloat(item.item_price),
    0
  );
  const tax = 0.13;
  const hst = subtotal * tax;
  const total = subtotal + hst;

  return (
    <div className="add-bill-items-wrapper">
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
                <h5>{item.qty}x</h5>
                <h5>{item.item_name}</h5>
                <h5>{item.item_price.toFixed(2)}</h5>
              </div>
              <div className="items-list__users">
                {/* Conditional render  */}
                {itemFriends.map((friend) => (
                  <div key={friend.name} className="items-list__circle">
                    <img
                      className="items-list__selected-friends"
                      src={`${API_URL}${friend.photo}`}
                    />
                  </div>
                ))}
                <button
                  className="items-list__add-user"
                  onClick={() => handleOpenModal(item)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
          {isModalOpen && (
            <FriendSplit
              itemName={selectedItem.item_name}
              itemQty={selectedItem.qty}
              closeModal={() => setModalOpen(false)}
              handleSelectedFriends={handleSelectedFriends}
              selectedFriends={selectedItem.friends}
              itemId={selectedItem.item_id}
            />
          )}
        </div>
        <div className="totals">
          <div className="totals__wrapper">
            <p className="totals__label">Subtotal</p>
            <p className="totals__value">${subtotal.toFixed(2)}</p>
          </div>
          <div className="totals__wrapper">
            <p className="totals__label">HST</p>
            <p className="totals__value">${hst.toFixed(2)}</p>
          </div>
          <div className="totals__wrapper">
            <p className="totals__label">Total Bill</p>
            <p className="totals__value">${total.toFixed(2)}</p>
          </div>
        </div>
        <button>Create Bill</button>
      </div>
    </div>
  );
}
