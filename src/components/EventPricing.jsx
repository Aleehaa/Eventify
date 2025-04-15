import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

export default function EventPricing() {
  const [eventPrice, setEventPrice] = useState(100);
  const [decorMultiplier, setDecorMultiplier] = useState(0.2);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const total = eventPrice + eventPrice * decorMultiplier;
    setTotalPrice(total.toFixed(2));
  }, [eventPrice, decorMultiplier]);

  const handleConfirm = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4000);
  };

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <Navbar />
      <style>{`
        body {
          font-family: Arial, sans-serif;
          background-color: #f8f9fa;
          margin: 0;
          padding: 0;
        }
        .header {
          background-color: #14213d;
          color: white;
          padding: 30px 0;
          text-align: center;
          margin-top: 0px;
        }
        .pricing-section {
          margin-top: 40px;
        }
        .pricing-card {
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 8px;
          background-color: #fff;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .btn-custom {
          background-color: #e67e00;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 16px;
          border: none;
        }
        .btn-custom:hover {
          background-color: #d35400;
        }
        .form-select {
          width: 100%;
          padding: 10px;
          margin-bottom: 20px;
        }
        .total-price {
          font-size: 24px;
          color: #e67e00;
          font-weight: bold;
        }
        .spacing-top {
          margin-top: 0px;
        }
        .success-card {
          margin: 30px auto 0;
          padding: 20px;
          background: #d1fae5;
          color: #065f46;
          border-left: 6px solid #10b981;
          border-radius: 10px;
          max-width: 500px;
          font-size: 18px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
      `}</style>

      <div className="header">
        <h1>Select Your Event Options</h1>
        <p>Choose an event type and decor to get the final price.</p>
      </div>

      <div className="container pricing-section mt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5 col-12 mb-4">
            <div className="pricing-card">
              <h3>Event Type</h3>
              <select
                className="form-select"
                value={eventPrice}
                onChange={(e) => setEventPrice(parseFloat(e.target.value))}
              >
                <option value="100">Birthday - $100</option>
                <option value="300">Wedding - $300</option>
                <option value="150">Party - $150</option>
                <option value="200">Corporate Event - $200</option>
                <option value="250">Anniversary - $250</option>
              </select>
            </div>
          </div>

          <div className="col-md-5 col-12 mb-4">
            <div className="pricing-card">
              <h3>Decor Type</h3>
              <select
                className="form-select"
                value={decorMultiplier}
                onChange={(e) => setDecorMultiplier(parseFloat(e.target.value))}
              >
                <option value="0.2">Basic Decor - 20%</option>
                <option value="0.5">Standard Decor - 50%</option>
                <option value="1">Premium Decor - 100%</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6 col-12 text-center">
          <div className="pricing-card">
            <h3>Total Price</h3>
            <p>Your total event price is:</p>
            <div className="total-price">${totalPrice}</div>
          </div>
        </div>
      </div>

      <div className="text-center spacing-top">
        <button className="btn-custom" onClick={handleConfirm}>
          Confirm Selection
        </button>
      </div>

      {showSuccess && (
        <div className="success-card">
          Your event selection has been confirmed!
        </div>
      )}
    </>
  );
}
