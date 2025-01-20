import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBillItems from "./components/AddBillItems/AddBillItems";
import CreateNewBill from "./components/CreateNewBill/CreateNewBill";
import FriendSplit from "./components/FriendSplit/FriendSplit";
import BillSplitSummary from "./components/BillSplitSummary/BillSplitSummary";
import Home from "./pages/Home/Home";
import SplitSuccess from "./components/SplitSuccess/SplitSuccess";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <>
      {/* <FriendSplit /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="createNewBill" element={<CreateNewBill />} />
          <Route path="addBillItems/:bill_id" element={<AddBillItems />} />
          <Route path="/bills/:bill_id/splits" element={<BillSplitSummary />} />
          <Route path="/success" element={<SplitSuccess />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
