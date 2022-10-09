import Register from "./components/registerLogin/Register";
import Login from "./components/registerLogin/login";
import Reservation from "./components/reservations/Reservations";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import CreateMeal from "./components/meals/meal";
import Message from "./components/Message/Messages";
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
          <Route path="/message" element={<Message />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
