// src/components/notifications/Notifications.jsx
import React from "react";
import "./notifications.scss";

function Notifications() {
  const notifications = [
    { id: 1, message: "You have a new gym booking confirmation." },
    { id: 2, message: "Your membership will expire in 3 days." },
    { id: 3, message: "A new promotion is available for Gym X!" },
  ];

  return (
    <div className="notifications">
      {notifications.length > 0 ? (
        notifications.map((notification) => (
          <div key={notification.id} className="notificationItem">
            {notification.message}
          </div>
        ))
      ) : (
        <p>No new notifications</p>
      )}
    </div>
  );
}

export default Notifications;
