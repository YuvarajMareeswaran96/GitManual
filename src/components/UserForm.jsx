// src/components/UserForm.jsx
import React, { useState } from "react";
import "./UserForm.css"; // Keep this import

export default function UserForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && place.trim()) {
      onSubmit({ name, place });
    } else {
      alert("Please fill both fields");
    }
  };

  return (
    <div className="user-form__container">
      <div className="user-form__wrapper">
        <h2 className="user-form__title">Enter Your Details</h2>
        <form onSubmit={handleSubmit} className="user-form">
          <div className="user-form__group">
            <label className="user-form__label">
              Name:
              <br />
              <br />
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="user-form__input"
              />
            </label>
          </div>
          <div className="user-form__group">
            <label className="user-form__label">
              Place:
              <br />
              <br />
              <input
                type="text"
                placeholder="Your Place"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                className="user-form__input"
              />
            </label>
          </div>
          <div className="user-form__group">
            <button type="submit" className="user-form__button">
              Open
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
