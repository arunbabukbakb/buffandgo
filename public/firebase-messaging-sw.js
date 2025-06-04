/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyDxgBU9JnB-N0pgmBU7jEZW9r8nvJRCoG8",
    authDomain: "buffandgo-6111d.firebaseapp.com",
    projectId: "buffandgo-6111d",
    messagingSenderId: "363424446603",
    appId: "1:363424446603:web:86d7b6c7c8097cb06c3c8e",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log("[firebase-messaging-sw.js] Received background message ", payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
