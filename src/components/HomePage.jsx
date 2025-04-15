import React, { useState } from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"; // import navbar

const Button = ({ children, className = "", style = {}, ...props }) => (
  <button className={`custom-button ${className}`} style={style} {...props}>
    {children}
  </button>
);

const themes = {
  wedding: ["Barat", "Walima", "Nikkah", "Mehndi"],
  birthdays: ["Kids Theme", "Teen Theme", "Adult Theme", "Milestone Theme"],
  professional: ["Conferences", "Meetups", "Product Launch", "Networking"],
  festivals: ["Basant", "Cultural", "Concerts", "Christmas"]
};

const ThemeSection = ({ title, themes }) => {
  const themeImages = {
    barat: "https://tulipsevents.com/wp-content/uploads/2022/04/Enchanted-Forest-Wedding-Theme-Decorations-by-Tulips-Events-43-1014x487.jpg",
    walima: "https://book.hafla.com/cdn/shop/files/4_527ac721-b430-408e-b054-20c2064d1474.png?v=1718041125",
    nikkah: "https://flowerbouquet.pk/cdn/shop/articles/nikah-saperator-at-wedding-hall-in-lahore-1.webp?v=1719847034",
    mehndi: "https://static.vecteezy.com/system/resources/thumbnails/053/276/953/small/a-colorful-backdrop-with-flowers-and-candles-photo.jpeg",
    kidstheme: "https://static.wixstatic.com/media/b53f29_76696f54132d4b5cbb16a5bc9baa13fd~mv2.jpg/v1/fill/w_640,h_598,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b53f29_76696f54132d4b5cbb16a5bc9baa13fd~mv2.jpg",
    teentheme: "https://www.kirkbrae.com/images/sweet-16-birthday-party.webp",
    adulttheme: "https://curatedevents.com/wp-content/uploads/2024/10/photo-1604668915840-580c30026e5f-scaled.jpeg",
    milestonetheme: "https://deborahpearson123.wordpress.com/wp-content/uploads/2014/03/web_image_view.jpg",
    conferences: "https://4.imimg.com/data4/LP/LJ/MY-13007427/corporate-event-setup.jpg",
    meetups: "https://media.istockphoto.com/id/479977238/photo/table-setting-for-an-event-party-or-wedding-reception.jpg?s=612x612&w=0&k=20&c=yIKLzW7wMydqmuItTTtUGS5cYTmrRGy0rXk81AltdTA=",
    productlaunch: "https://i0.wp.com/blog.planningpod.com/wp-content/uploads/2020/06/best-event-design-ideas-and-tips.jpg?fit=1200%2C600&ssl=1",
    networking: "https://5.imimg.com/data5/KE/NU/JV/ANDROID-23299349/product-jpeg.jpg",
    basant: "https://cheetah.cherishx.com/uploads/1736056963_original.jpg",
    cultural: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp0mNX8jA2idtcuKo2Oh10l3cg5ocUTlFWrg&s",
    concerts: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq2_gZLg3wkjFxo7S_sF_rpbkbGv00qG9Y7A&s",
    christmas: "https://sloanes.co.th/wp-content/uploads/2022/10/800px-Christmas_Tree_56651310.jpeg"
  };

  return (
    <section className="section">
      <h2 className="section-title" style={{ color: "#0d3b66" }}>{title}</h2>
      <div className="theme-grid">
        {themes.map((theme, index) => {
          const key = theme.toLowerCase().replace(/\s/g, "");
          return (
            <div key={index} style={{ marginBottom: "30px" }}>
              <div
                className="theme-box"
                style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  height: "250px",
                  backgroundColor: "#fff",
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)"
                }}
              >
                {themeImages[key] && (
                  <img
                    src={themeImages[key]}
                    alt={theme}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                )}
              </div>
              <div style={{ textAlign: "left", marginTop: "10px" }}>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "#0d3b66",
                    marginBottom: "6px"
                  }}
                >
                  {theme}
                </div>
                <Link to="/recommendations">
                  <Button
                    style={{
                      backgroundColor: "#0d3b66",
                      color: "#fff",
                      padding: "6px 12px",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer"
                    }}
                  >
                    View All
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default function HomePage() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = [
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnQlMjBwbGFubmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    "https://www.qceventplanning.com/blog/wp-content/uploads/2015/12/Copy-of-Event-Feature-Event-Logo-Overlay-100x100-9.png",
    "https://image.wedmegood.com/resized/720X/uploads/member/4423446/1718179841_image8684.jpg?crop=9,212,2028,1140",
    "https://www.weddingsutra.com/images/wedding-images/blog-images/mosaic-events-oman/mosaic-events-oman-img1.webp"
  ];

  const handleNextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  return (
    <div className="container">
      <Navbar />

      <section className="banner" style={{ position: "relative" }}>
        <img
          key={currentBanner}
          src={banners[currentBanner]}
          alt="Event Banner"
          className="banner-img"
          style={{ height: "470px", width: "100%", objectFit: "cover" }}
        />
        <Button
          className="arrow-button"
          onClick={handleNextBanner}
          style={{
            color: "#fff",
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "24px",
            background: "#0d3b66",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
            boxShadow: "0 0 8px rgba(0,0,0,0.3)"
          }}
        >
          &gt;
        </Button>
      </section>

      <ThemeSection title="Wedding Themes" themes={themes.wedding} />
      <ThemeSection title="Birthday Themes" themes={themes.birthdays} />

      <section className="info-section reverse" style={{ backgroundColor: "#f0f8ff" }}>
        <div className="info-text">
          <h2 className="section-title" style={{ color: "#0d3b66" }}>Anything Related to Events</h2>
          <p style={{ color: "#ff6600" }}>
            From concept to execution, Eventify covers every detail to make
            your event unforgettable.
          </p>
        </div>
        <img
          src="https://sv2109.com/sites/default/files/field/image/bigstock-events-7444309.jpg"
          alt="Anything Events"
          className="info-img"
        />
      </section>

      <ThemeSection title="Professional Events" themes={themes.professional} />
      <ThemeSection title="Festival Events" themes={themes.festivals} />

      <section className="info-section" style={{ backgroundColor: "#f0f8ff" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Xuc5hDXl6WWuLOCcRZG4ei5zsC7hmldPwQ&s"
          alt="Why Choose Us"
          className="info-img"
        />
        <div className="info-text">
          <h2 className="section-title" style={{ color: "#0d3b66" }}>Why Choose Eventify?</h2>
          <p style={{ color: "#ff6600" }}>
            We bring your dream themes to life with expert decorators, creative
            ideas, and smooth event planning. Experience unforgettable moments
            with Eventify.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title" style={{ color: "#0d3b66" }}>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" style={inputStyle} />
          <input type="email" placeholder="Email" style={inputStyle} />
          <textarea placeholder="Message" rows="4" style={inputStyle}></textarea>
          <Button
            style={{
              backgroundColor: "#0d3b66",
              color: "#fff",
              padding: "8px 16px",
              border: "none"
            }}
          >
            Send
          </Button>
        </form>
      </section>

      <footer className="footer">
        &copy; 2025 Eventify. All rights reserved.
      </footer>
    </div>
  );
}

const inputStyle = {
  backgroundColor: "#fff",
  borderRadius: "5px",
  border: "1px solid #ccc",
  padding: "8px",
  marginBottom: "10px"
};
