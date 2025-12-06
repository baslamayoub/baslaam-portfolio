import React from "react";

const Notification = ({ notification }) => {


  return (
    <div className={`notification ${notification.type} ${notification.active}`}>
      {notification.message}
    </div>
  );
};

export default Notification;
