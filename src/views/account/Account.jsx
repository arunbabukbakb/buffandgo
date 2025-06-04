import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc, setDoc } from "firebase/firestore";
import { db, messaging } from "../../firebase/firebase"; // make sure to export db from firebase.js
import { getToken, onMessage } from "firebase/messaging";


const adminUid = "admin@buffandgo.com"; // Your hardcoded or real admin UID

export default function Account() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "bookings"));
                const bookingsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setBookings(bookingsData);
            } catch (error) {
                console.error("Error fetching bookings:", error);
            }
        };

        fetchBookings();

        //Set show notification
        const requestPermissionAndSaveToken = async () => {
            try {
                const status = await Notification.requestPermission();
                if (status === "granted") {
                    // ✅ Get FCM token
                    const token = await getToken(messaging, {
                        vapidKey: "BGqqIYRKc602HAbCFtunWRWoFir_chwGWWCv8VIsDX2zdrNRMK97uTeHJhhytcaPvtOf9er8Xyw1T3GY2h1Pr00" // replace with your actual VAPID key
                    });

                    console.log("Admin FCM Token:", token);

                    // Save admin token to Firestore
                    await setDoc(doc(db, "adminTokens", adminUid), { fcmToken: token });
                } else {
                    console.warn("Permission not granted for Notifications");
                }
            } catch (error) {
                console.error("Unable to get permission or token", error);
            }
        };

        requestPermissionAndSaveToken();

        // Listen for messages when tab is open
        onMessage(messaging, (payload) => {
            console.log("📩 Foreground notification:", payload);
            alert(`🔔 ${payload.notification.title}\n${payload.notification.body}`);
        });


    }, []);

    // Handle Delete
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this booking?");
        if (!confirmDelete) return;

        try {
            await deleteDoc(doc(db, "bookings", id));
            setBookings((prev) => prev.filter((booking) => booking.id !== id));
        } catch (error) {
            console.error("Error deleting booking:", error);
            alert("Failed to delete booking. Try again.");
        }
    };


    return (
        <div className="container mt-4">
            <h3 className="mb-3">Booking List</h3>
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Place</th>
                        <th>Service</th>
                        <th>Pick-up Date</th>
                        <th>Phone</th>
                        <th>Created At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking, index) => (
                        <tr key={booking.id}>
                            <td>{index + 1}</td>
                            <td>{booking.place}</td>
                            <td>{booking.service}</td>
                            <td>{booking.pickupdate}</td>
                            <td>{booking.phone}</td>
                            <td>
                                {booking.createdAt?.toDate
                                    ? booking.createdAt.toDate().toLocaleString()
                                    : "—"}
                            </td>
                            <td>
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => handleDelete(booking.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
