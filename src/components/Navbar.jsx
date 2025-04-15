import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Button = ({ children, className = "", style = {}, ...props }) => (
  <button className={`custom-button ${className}`} style={style} {...props}>
    {children}
  </button>
);

export default function Navbar() {
  return (
    <header className="header">
      <div className="logo">Eventify</div>
      <nav className="nav">
        <Button className="header-button">Home</Button>
        <Link to="/EventHistoryTable"><Button className="-button">Dashboard</Button></Link>
        <Link to="/signup"><Button className="-button">Sign Up</Button></Link>
        <Link to="/login"><Button className="-button">Login</Button></Link>
      </nav>
    </header>
  );
}
