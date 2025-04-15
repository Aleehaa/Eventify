import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

// Button Component (either create or import your own UI button here)
const Button = ({ children, className, style, onClick }) => (
  <button
    className={className}
    style={style}
    onClick={onClick}
  >
    {children}
  </button>
);

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    backgroundColor: "black",
    fontWeight: "600",
    padding: "12px",
    textAlign: "left",
    borderBottom: "1px solid #eee",
  },
  td: {
    padding: "12px",
    borderBottom: "1px solid #eee",
    textAlign: "left",
  },
  btn: {
    marginRight: "8px",
    padding: "6px 12px",
    border: "none",
    borderRadius: "6px",
    fontSize: "14px",
    cursor: "pointer",
  },
  editBtn: {
    backgroundColor: "#f97316",
    color: "black",  // Changed text color to black
  },
  deleteBtn: {
    backgroundColor: "white",
    color: "black",  // Changed text color to black
    border: "1px solid #ccc",
  },
  link: {
    color: "#0073bb",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

const EventHistoryTable = ({ events = [], onEdit, onDelete }) => {
  return (
    <div>
      {/* Navbar */}
      <header className="header" style={{ background: "#0A2472", padding: "20px", display: "flex", justifyContent: "space-between", color: "white" }}>
        <div className="logo" style={{ fontWeight: "bold", fontSize: "24px" }}>Eventify</div>
        <nav className="nav" style={{ display: "flex", gap: "20px" }}>
          <Link to="/"><Button className="header-button" style={{ background: "#f97316", color: "black", padding: "10px", borderRadius: "6px" }}>Home</Button></Link>
          <Link to="/EventHistoryTable"><Button className="-button" style={{ background: "#f97316", color: "black", padding: "10px", borderRadius: "6px" }}>Dashboard</Button></Link>
          <Link to="/signup"><Button className="-button" style={{ background: "#f97316", color: "black", padding: "10px", borderRadius: "6px" }}>Sign Up</Button></Link>
          <Link to="/login"><Button className="-button" style={{ background: "#f97316", color: "black", padding: "10px", borderRadius: "6px" }}>Login</Button></Link>
        </nav>
      </header>

      {/* Event Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}></th>
            <th style={styles.th}>Event name</th>
            <th style={styles.th}>Event time</th>
            <th style={styles.th}>Event date</th>
            <th style={styles.th}>Event Name</th>
            <th style={styles.th}>User Name</th>
          </tr>
        </thead>
        <tbody>
          {events?.map((event) => (
            <tr key={event.id}>
              <td style={styles.td}><input type="checkbox" /></td>
              <td style={{ ...styles.td, ...styles.link }}>{event.eventName}</td>
              <td style={styles.td}>{`${event.startDate} - ${event.endDate}`}</td>
              <td style={styles.td}>{`${event.startTime} - ${event.endTime}`}</td>
              <td style={styles.td}>{`${event.firstName} ${event.lastName}`}</td>
              <td style={styles.td}>
                <button style={{ ...styles.btn, ...styles.editBtn }} onClick={() => onEdit(event)}>Edit</button>
                <button style={{ ...styles.btn, ...styles.deleteBtn }} onClick={() => onDelete(event.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventHistoryTable;
