import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { List } from "./components/ListContact";
import { Show } from "./components/ShowContact";
import { History } from "./components/SendHistory";
import contacts from "./data/users.json";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List contacts={contacts} />} />
        <Route path="/info" element={<Show />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}
