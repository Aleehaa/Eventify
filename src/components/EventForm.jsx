import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"; // <-- imported Navbar

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px",
    background: "#f3f4f6",
    minHeight: "100vh",
  },
  container: {
    display: "flex",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
    overflow: "hidden",
    maxWidth: "1100px",
    width: "100%",
  },
  form: {
    flex: 1,
    padding: "50px 40px",
    backgroundColor: "white",
  },
  heading: {
    color: "Black",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "500",
    color: "black",
  },
  input: {
    width: "90%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  row: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  halfInput: {
    flex: "1",
    minWidth: "calc(50% - 10px)",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#f97316",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    marginTop: "10px",
    cursor: "pointer",
    fontSize: "16px",
  },
  imageSection: {
    flex: 1,
    backgroundColor: "#fafafa",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

const defaultFormData = {
  firstName: "",
  lastName: "",
  eventName: "",
  startDate: "",
  startTime: "",
  endDate: "",
  endTime: "",
  location: "",
};

const EventForm = ({ onSubmit, formData: initialFormData, onChange: parentOnChange, editingEvent }) => {
  const [formData, setFormData] = useState(initialFormData || defaultFormData);

  useEffect(() => {
    if (initialFormData) {
      setFormData(initialFormData);
    }
  }, [initialFormData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    if (parentOnChange) parentOnChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(e, formData);
  };

  return (
    <div>
      <Navbar />
      <div style={styles.wrapper}>
        <div style={styles.container}>
          <form style={styles.form} onSubmit={handleSubmit}>
            <h2 style={styles.heading}>Event Registration</h2>

            <div style={styles.formGroup}>
              <label style={styles.label}>Full Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Event Name</label>
              <input
                type="text"
                name="eventName"
                value={formData.eventName}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.row}>
              <div style={styles.halfInput}>
                <label style={styles.label}>Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.halfInput}>
                <label style={styles.label}>Start Time</label>
                <input
                  type="time"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.halfInput}>
                <label style={styles.label}>End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.halfInput}>
                <label style={styles.label}>End Time</label>
                <input
                  type="time"
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            <Link to="/EventPricing">
              <button type="submit" style={styles.button}>
                {editingEvent ? "Update Event" : "Submit"}
              </button>
            </Link>
          </form>

          <div style={styles.imageSection}>
            <img
              src="https://spotme.com/wp-content/uploads/2020/07/Hero-1.jpg"
              alt="Event Registration"
              style={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventForm;
