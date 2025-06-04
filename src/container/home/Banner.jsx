import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { collection, addDoc, getDoc, doc } from 'firebase/firestore';
import { db, auth } from '../../firebase/firebase';

const tempdata = {
  place: 'Clt',
  service: 'Basic',
  pickupdate: new Date().toISOString().split('T')[0],
  phone: '7894561230',
  createdAt: new Date() // 👈 required for TTL
}

export default function Banner() {
  const bannerRef = useRef(null);
  const model = {
    place: '',
    service: 'Basic',
    pickupdate: new Date().toISOString().split('T')[0],
    phone: '',
    createdAt: new Date() // 👈 required for TTL
  }
  const [input, setInput] = useState(model);
  const adminUid = "admin@buffandgo.com"; // replace with real UID

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "bookings"), input); // 'bookings' is the collection name
      alert("Data saved successfully!");
      let tempinput = input;
      sendAdminNotification(tempinput);
      setInput(model);
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data.");
    }
  };

  const sendAdminNotification = async (data) => {

    // 🔐 Get admin FCM token from Firestore
    const tokenDoc = await getDoc(doc(db, "adminTokens", adminUid));
    const adminFcmToken = tokenDoc.exists() ? tokenDoc.data().fcmToken : null;

    if (!adminFcmToken) {
      console.error("Admin FCM token not found");
      return;
    }

    // 🔐 Replace with your actual Server Key (keep it secret!)
    const serverKey = "BGqqIYRKc602HAbCFtunWRWoFir_chwGWWCv8VIsDX2zdrNRMK97uTeHJhhytcaPvtOf9er8Xyw1T3GY2h1Pr00";

    await fetch("https://fcm.googleapis.com/fcm/send", {
      method: "POST",
      headers: {
        Authorization: `key=${serverKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: adminFcmToken,
        notification: {
          title: "New Booking Received",
          body: `${data?.service} at ${data?.place} - ${data?.pickupdate}`,
          icon: "/logo192.png", // optional
        },
      }),
    });
  };

  return (
    <div className="hero-area">
      <div className="container-fluid">
        <div className="hero-content">
          <span>MODERN EQUIPMENT</span>
          <h1>We bring the shine, You stay inside</h1>
          <p>
            Tired of waiting at car wash centers? With Buff & Go, professional
            car cleaning comes straight to your doorstep—whether you're at home,
            the office, or anywhere in between. Just book a slot, and we’ll take
            care of the rest.
          </p>

          <Link to="services" className="deafult-btn1">
            Browse Services
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="/images/banner/banner-shape1.png"
            className="car-man"
            alt="image"
          />
        </div>

        <form onSubmit={handleSubmit}>
          <ul className="hero-search-box d-flex">
            <li>
              <label>
                <i class="bx bx-map"></i>
                Where
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Place"
                onChange={handleInputChange}
                value={input?.place}
                name="place"
                required
              />
            </li>
            <li>
              <label>
                <i className="flaticon-car-wash"></i>
                Type of Service
              </label>
              <div className="languages-switcher">
                <select onChange={handleInputChange}
                  value={input?.service}
                  name="service"
                  required
                >
                  <option value="Basic">Basic</option>
                  <option value="Standard">Standard</option>
                  <option value="Permium">Permium</option>
                  <option value="Basic-Monthly">Basic-Monthly</option>
                  <option value="Standard-Monthly">Standard-Monthly</option>
                  <option value="Permium-Monthly">Permium-Monthly</option>
                  <option value="Ultimate-Monthly">Ultimate-Monthly</option>
                </select>
              </div>
            </li>
            <li>
              <label>
                <i className="flaticon-calendar-1"></i>
                Pick-up Date
              </label>
              <input
                type="date"
                className="form-control"
                id="datepicker1"
                onChange={handleInputChange}
                value={input?.pickupdate}
                name="pickupdate"
                required
              />
            </li>
            <li>
              <label>
                <i class="bx bx-phone"></i>
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Phone"
                onChange={handleInputChange}
                value={input?.phone}
                name="phone"
                required
              />
            </li>
            {/* <li className="last-box last-box2">
              <label>
                <i className="flaticon-calendar-1"></i>
                Return Date
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="22/07/2024"
                id="datepicker2"
              />
            </li> */}
            <li className="last-box">
              <button type="submit" className="deafult-btn1 style3">
                Book Services
              </button>
              <button type="button" className="deafult-btn1 style3 testbutton" style={{ display: 'none' }} onClick={() => sendAdminNotification(tempdata)}>
                test Services
              </button>
            </li>
          </ul>
        </form>

        <div className="hero-shape">
          <img
            src="/images/shapes/banner-shaoe1.png"
            className="hero-s-1"
            alt="image"
          />
          <img
            src="/images/shapes/banner-shaoe2.png"
            className="hero-s-2"
            alt="image"
          />
          <img
            src="/images/shapes/banner-shaoe3.png"
            className="hero-s-3"
            alt="image"
          />
          <img
            src="/images/shapes/banner-shaoe4.png"
            className="hero-s-4"
            alt="image"
          />
          <img
            src="/images/shapes/banner-shaoe5.png"
            className="hero-s-5"
            alt="image"
          />
          <img
            src="/images/shapes/banner-shaoe2.png"
            className="hero-s-6"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}
