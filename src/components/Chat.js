import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Chat = () => {
  return (
    <>
      <div className="chat">
        <div className="topArea">
          <div className="info">
            <div className="img">
              <img src="assets/images/friends1.png" />
              <div className="roundImg"></div>
            </div>
            <div className="identity">
              <h3>Novel</h3>
              <p>Online/Offline</p>
            </div>
          </div>
          <div className="dots">
            <BsThreeDotsVertical />
          </div>
        </div>

        <div className="chatArea">
          <div className="chatMsg">
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
