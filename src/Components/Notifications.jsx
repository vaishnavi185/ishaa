import React from "react";
import styled from "styled-components";

const NotificationsContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NotificationItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  & img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

function Notifications() {
  const notifications = [
    { name: "Ellie", action: "joined team developers", date: "04 April, 2021 | 04:00 PM" },
    { name: "Jenny", action: "joined team HR", date: "04 April, 2021 | 04:00 PM" },
    { name: "Adam", action: "got employee of the month", date: "03 April, 2021 | 02:00 PM" },
    { name: "Robert", action: "joined team design", date: "02 April, 2021 | 02:00 PM" },
    { name: "Jack", action: "joined team design", date: "01 April, 2021 | 03:00 PM" },
  ];

  return (
    <NotificationsContainer>
      <h2>Notifications</h2>
      {notifications.map((notification, index) => (
        <NotificationItem key={index}>
          <img src="./Person2.jpg" alt="Profile" />
          <div>
            <p><strong>{notification.name}</strong> {notification.action}</p>
            <p>{notification.date}</p>
          </div>
        </NotificationItem>
      ))}
    </NotificationsContainer>
  );
}

export default Notifications;
