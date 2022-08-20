import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/list">contacts</Link>
      <Link to="/history">Sent messages</Link>
    </div>
  );
};

export { Navbar };
