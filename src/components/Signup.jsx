import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Signup successful!');
    navigate('/');
  };

  const imageUrl =
    'https://static.vecteezy.com/system/resources/previews/004/493/141/non_2x/wedding-studio-photo-flat-design-photographer-shooting-model-man-and-women-with-a-wedding-theme-or-bridal-couple-use-camera-in-cartoon-style-illustration-vector.jpg';

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body, html {
          height: 100%;
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
        }

        .background {
          background-size: cover;
          background-position: center;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .main-container {
          padding: 20px;
          background-color: rgba(255, 255, 255, 0.75);
          border-radius: 15px;
          display: flex;
          max-width: 1000px;
          width: 100%;
          box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
          justify-content: space-between;
        }

        .left-panel {
          flex: 1;
          background-size: cover;
          background-position: center;
          border-radius: 15px;
        }

        .right-panel {
          flex: 1;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        form {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(15px);
          border-radius: 20px;
          padding: 40px 30px;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.18);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        form:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }

        form h2 {
          font-size: 32px;
          color: black;
          margin-bottom: 25px;
          font-weight: 600;
        }

        input {
          width: 100%;
          padding: 15px 12px;
          margin-bottom: 20px;
          border: none;
          border-radius: 10px;
          outline: none;
          background: rgba(255, 255, 255, 0.7);
          font-size: 16px;
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
        }

        button {
          width: 100%;
          padding: 15px;
          background-color: #ff5722;
          color: #fff;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          font-size: 18px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        button:hover {
          background-color: #f57c00;
          transform: scale(1.05);
        }

        p {
          margin-top: 20px;
          color: #aaa;
          text-align: center;
        }

        span {
          color: #f57c00;
          font-weight: 500;
          cursor: pointer;
        }

        span:hover {
          color: #f57c00;
        }

        a {
          text-decoration: none;
          color: inherit;
        }
      `}</style>

      <div
        className="background"
        style={{
          backgroundImage: `url("${imageUrl}")`,
        }}
      >
        <div className="main-container">
          <div
            className="left-panel"
            style={{ backgroundImage: `url("${imageUrl}")` }}
          ></div>
          <div className="right-panel">
            <form onSubmit={handleSubmit}>
              <h2>Signup</h2>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Signup</button>
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
