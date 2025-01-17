import { Link } from "react-router-dom";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="home">
        <div className="home__user">
          <div className="home__img"></div>
          <h2 className="home__header">
            Welcome back,<br></br> Vanessa!
          </h2>
        </div>
        <div className="owing">
          <h5 className="owing__header">Your Balance Owing</h5>
          <p className="owing__amount">$25.31</p>
          <button className="owing__payback">pay back</button>
        </div>
        <div className="friends">
          <h3 className="friends__header">Friends</h3>
          <p className="friends__see-all">See all</p>
          <div className="friends__add">+</div>
          <div className="friends__circle">
            <div className="friends__img">friend 1</div>
          </div>
        </div>
        <div className="recent-bills">
          <h3 className="recent-bills__header">Recent</h3>
          <p className="recent-bills__see-all">See all</p>
          <div className="bill">
            <p className="bill__date">December 6th, 2024</p>
            <h4 className="bill_name">Kinka Izakaya</h4>
            <p className="bill__total">$88.90</p>
            <div className="bill__circle">
              <div className="bill__img">friend 1</div>
            </div>
            <p className="bill_persons">1 persons</p>
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
