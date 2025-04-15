import React from "react";
import { Link } from "react-router-dom";
import Navbar from './Navbar'; // Import the Navbar component

const Recommendations = () => {
  const themes = [
    {
      name: "Royal Blue Night",
      img: "https://symphonyevents.com.au/wp-content/uploads/2021/08/wedding-themes.jpg",
    },
    {
      name: "Boho Chic",
      img: "https://symphonyevents.com.au/wp-content/uploads/2021/08/garden-theme-wedding.jpg",
    },
    {
      name: "Vintage Glam",
      img: "https://symphonyevents.com.au/wp-content/uploads/2021/08/floral-wedding-theme-1024x666.jpg",
    },
    {
      name: "Tropical Fiesta",
      img: "https://symphonyevents.com.au/wp-content/uploads/2021/08/preppy.webp",
    },
    {
      name: "Vintage",
      img: "https://i.pinimg.com/736x/83/d5/b9/83d5b9aef25f2ae8c08cde9c496a8bdc.jpg",
    },
    {
      name: "Barn Love",
      img: "https://i.pinimg.com/736x/ea/8a/bd/ea8abdf74870273451507c23064708f5.jpg",
    },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Navbar */}
      <Navbar /> {/* Include Navbar here */}

      {/* Hero Image */}
      <img
        src="https://i.pinimg.com/736x/83/d4/22/83d422a1919ae1428cb59e514d9a0533.jpg"
        alt="Event"
        style={{ width: "100%", height: "700px", objectFit: "cover" }}
      />

      {/* Description */}
      <div style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Elegant Celebration Themes
        </h2>
        <p style={{ fontSize: "20px", marginBottom: "10px" }}>
          From intimate gatherings to grand celebrations, our expert planners
          and decorators handle every detail with creativity and precision.
        </p>
        <p style={{ fontSize: "20px", marginBottom: "20px" }}>
          We deliver stunning events at the best prices — tailored to your
          vision.
        </p>
        <p
          style={{
            color: "#0A2472",
            fontWeight: "600",
            marginTop: "20px",
            fontSize: "24px",
          }}
        >
          Starting from $999 for complete event coverage
        </p>
        <Link to="/EventForm">
          <button
            style={{
              backgroundColor: "#f97316",
              color: "white",
              padding: "12px 20px",
              border: "none",
              borderRadius: "4px",
              fontWeight: "600",
              marginTop: "20px",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            Book Now
          </button>
        </Link>
      </div>

      {/* Themes and Right Text */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "40px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {/* Left: Theme Cards */}
        <div style={{ flex: "3" }}>
          <h3
            style={{
              textAlign: "left",
              fontSize: "28px",
              marginBottom: "40px",
            }}
          >
            Recommended Themes
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "38px",
              padding: "0 20px",
            }}
          >
            {themes.map((theme, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
                }}
              >
                <img
                  src={theme.img}
                  alt={theme.name}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div style={{ padding: "16px", textAlign: "left" }}>
                  <h4
                    style={{
                      marginBottom: "12px",
                      color: "#0d1b2a",
                      fontSize: "18px",
                    }}
                  >
                    {theme.name}
                  </h4>
                  <button
                    style={{
                      backgroundColor: "#f97316",
                      color: "white",
                      padding: "12px 26px",
                      border: "none",
                      borderRadius: "4px",
                      fontWeight: "600",
                      cursor: "pointer",
                      fontSize: "16px",
                    }}
                  >
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Message Block */}
        <div
          style={{
            flex: "2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            style={{
              fontSize: "35px",
              fontWeight: "bold",
              color: "#0A2472",
              textAlign: "center",
              maxWidth: "300px",
              height: "400px",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Discover styles curated just for your event – handpicked to inspire
            and impress.
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          backgroundColor: "#0A2472",
          textAlign: "center",
          padding: "40px",
          fontSize: "16px",
          color: "white",
          height: "200px",
        }}
      >
        Contact us at <strong>info@eventify.com</strong> for custom themes <br></br>
        follow our social media for the latest updates. We are here to help you!
      </div>
    </div>
  );
};

export default Recommendations;
