import { Link } from "react-router-dom";
import "./Home.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import profilePic from "../../../public/images/profile-pic.png";

const API_URL = import.meta.env.VITE_API_URL;

export default function Home() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const response = await axios.get(`${API_URL}/users`);
        setFriends(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getFriends();
  }, []);

  return (
    <div className="home-wrapper">
      <div className="home">
        <div className="home__user">
          <img src={profilePic} alt="" className="home__img" />
          <h2 className="home__header">
            <span>Welcome back,</span>
            <br></br> Vanessa!
          </h2>
        </div>
        <div className="owing">
          <p className="owing__header">Your Balance Owing</p>
          <p className="owing__amount">$25.31</p>
          <button className="owing__payback">pay back</button>
        </div>
        <div className="friends">
          <div className="friends__wrapper-header">
            <h3 className="friends__header">Friends</h3>
            <p className="friends__see-all">See All</p>
          </div>
          <div className="friends__wrapper-users">
            <div className="friends__circle">
              <div className="friends__add">+</div>
            </div>
            {friends.map(
              (friend, index) =>
                index < 4 && (
                  <img
                    className="friends__img"
                    key={friend.id}
                    src={`${API_URL}${friend.photo}`}
                    alt={`${friend.name}'s profile photo`}
                  />
                )
            )}
          </div>
        </div>
        <div className="recent-bills">
          <div className="recent-bills__wrapper-header">
            <h3 className="recent-bills__header">Recent</h3>
            <p className="recent-bills__see-all">See All</p>
          </div>
          <div className="bill">
            <p className="bill__date">December 6th, 2024</p>
            <div className="bill__wrapper">
              <h4 className="bill_name">Kinka Izakaya</h4>
              <h5 className="bill__total">$88.90</h5>
            </div>
            <div className="bill__count">
              <div className="bill__circle">
                {friends.map(
                  (friend, index) =>
                    index < 2 && (
                      <img
                        className="bill__img"
                        key={friend.id}
                        src={`${API_URL}${friend.photo}`}
                        alt={`${friend.name}'s profile photo`}
                      />
                    )
                )}
              </div>
              <p className="bill__persons">2 persons</p>
            </div>
          </div>
          <div className="bill">
            <p className="bill__date">November 21st, 2024</p>
            <div className="bill__wrapper">
              <h4 className="bill_name">Chipotle</h4>
              <h5 className="bill__total">$54.23</h5>
            </div>
            <div className="bill__count">
              <div className="bill__circle">
                {friends.map(
                  (friend, index) =>
                    index < 5 && (
                      <img
                        className="bill__img"
                        key={friend.id}
                        src={`${API_URL}${friend.photo}`}
                        alt={`${friend.name}'s profile photo`}
                      />
                    )
                )}
              </div>
              <p className="bill__persons">5 persons</p>
            </div>
          </div>
        </div>
      </div>
      <div className="home-wrapper__bottom">
        <Link to="/createNewBill">
          <button className="add-new-bill">+</button>
        </Link>
      </div>
    </div>
  );
}
