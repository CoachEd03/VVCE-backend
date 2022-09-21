import Register from "./components/Register";
import Login from "./components/login";
import Reservation from "./components/Reservations";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

import { Route, Routes } from "react-router-dom";
import "./styles.scss";
function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
