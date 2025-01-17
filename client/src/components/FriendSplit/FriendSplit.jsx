import "./FriendSplit.scss";
import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export default function FriendSplit({
  itemName,
  closeModal,
  itemQty,
  handleSelectedFriends,
  currentFriends = [],
  itemId,
}) {
  const [searchFriend, setSearchFriend] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFriends, setSelectedFriends] = useState(currentFriends);

  const handleSave = async () => {
    console.log("searchFriend:", searchFriend);
    console.log("SearchResults", searchResults);
    console.log("selectedFriends", selectedFriends);
    try {
      console.log({
        item_id: itemId,
        friends: selectedFriends.map((friend) => friend.id),
      });
      const friendsArray = selectedFriends.map((friend) => friend.id);
      await axios.post(`${API_URL}/cost_distribution`, {
        item_id: itemId,
        friends: friendsArray,
      });
    } catch (error) {
      console.error(error);
      alert("did not save cost distribution");
    }
    try {
      const response = await axios.get(
        `${API_URL}/cost_distribution/${itemId}`
      );
      handleSelectedFriends(response.data);
    } catch (error) {
      console.error(error);
    }
    closeModal();
  };

  const handleChange = async (event) => {
    event.preventDefault();
    const value = event.target.value;
    console.log("value:", value);
    setSearchFriend(value);

    if (value.length > 0) {
      try {
        const response = await axios.get(`${API_URL}/users`, {
          params: { query: value },
        });
        const filteredResults = response.data.filter(
          (user) => !selectedFriends.some((friend) => friend.id === user.id)
        );
        setSearchResults(filteredResults);
        console.log("response data", response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleSelect = (user) => {
    console.log("user:", user);
    setSelectedFriends((prev) => [...prev, user]);
    setSearchFriend("");
    setSearchResults([]);
  };

  console.log(selectedFriends);

  return (
    <div className="modal">
      <div className="friend-split">
        <p onClick={closeModal}>close</p>
        <div className="friend-split__container">
          <h3>{`Add friends to split "x${itemQty} ${itemName}"`}</h3>
          <label>
            Search
            <input
              type="text"
              placeholder="e.g. John Doe"
              onChange={handleChange}
              value={searchFriend}
            />
          </label>
          <div className="friend-split__dropdown">
            {searchResults.map((user) => (
              <div
                key={user.id}
                className="friend-split__dropdown-item"
                onClick={() => handleSelect(user)}
              >
                {user.name}
              </div>
            ))}
          </div>
        </div>
        <div className="friend-split__friends">
          <h4 className="friend-split__friends-header">Friends</h4>
          {selectedFriends.map((user) => (
            <div key={user.id} className="friend-split__list">
              <p className="friend-split__friend-name">{user.name}</p>
              <div className="friendsplit__check">✓</div>
            </div>
          ))}
          <button onClick={handleSave}>Confirm</button>
        </div>
      </div>
    </div>
  );
}
