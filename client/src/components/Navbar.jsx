import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex", gap: "50px", border: "2px solid gray", height: "50px", justifyContent: "stretch", alignItems: "center", backgroundColor: "gray" }}>
      <Link to="/list" style={{ marginLeft: "20%", textDecoration: "none", color: "black", fontWeight: "bolder" }}>Contacts</Link>
      <Link to="/history" style={{ textDecoration: "none", color: "black", fontWeight: "bolder" }}>History</Link>
    </div>
  );
};

export { Navbar };
