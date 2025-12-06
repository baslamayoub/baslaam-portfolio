import React from "react";

const Notification = ({ notification }) => {
  console.log(notification.active);
  console.log(notification.type);

  return (
    <div className={`notification ${notification.type} ${notification.active}`}>
      {notification.message}
    </div>
  );
};

export default Notification;
