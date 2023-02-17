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
          <div className="chatMsg" style={alignLeft}>
            <p style={msg}>Hey there</p>
            <p className="date">02-August-2023 </p>
          </div>
        </div>
      </div>
    </>
  );
};

let msg = {
  background: "#F1F1F1",
};

let alignRight = {
  justifyContent: "flex-end",
};
let alignLeft = {
  justifyContent: "flex-start",
};
export default Chat;
