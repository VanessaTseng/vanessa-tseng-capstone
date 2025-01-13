import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBillItems from "./components/AddBillItems/AddBillItems";
import CreateNewBill from "./components/CreateNewBill/CreateNewBill";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="createNewBill" element={<CreateNewBill />} />
          <Route path="addBillItems/:bill_id" element={<AddBillItems />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
