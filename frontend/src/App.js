import Register from "./components/Register";
import Login from "./components/login";
import Reservation from "./components/Reservations";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import CreateMeal from "./components/meal";

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
          <Route path="/createMeal" element={<CreateMeal />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
