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
            <p style={msgReceive}>Hey there</p>
            <p style={dateSend} className="date">
              02-August-2023{" "}
            </p>
          </div>

          <div className="chatMsg" style={alignRight}>
            <p style={msgSend}>Hey there</p>
            <p style={dateReceive} className="date">
              02-August-2023{" "}
            </p>
          </div>

          <div className="chatMsg" style={alignLeft}>
            <p style={msgReceive}>Hey there</p>
            <p style={dateSend} className="date">
              02-August-2023{" "}
            </p>
          </div>

          <div className="chatMsg" style={alignRight}>
            <p style={msgSend}>Hey there</p>
            <p style={dateReceive} className="date">
              02-August-2023{" "}
            </p>
          </div>

          <div className="chatMsg" style={alignRight}>
            <p style={msgSend}>Hey there</p>
            <p style={dateReceive} className="date">
              02-August-2023{" "}
            </p>
          </div>

          <div className="chatMsg" style={alignLeft}>
            <p style={msgReceive}>Hey there</p>
            <p style={dateSend} className="date">
              02-August-2023{" "}
            </p>
          </div>

          <div className="chatMsg" style={alignRight}>
            <p style={msgSend}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p style={dateReceive} className="date">
              02-August-2023{" "}
            </p>
          </div>

          <div className="chatMsg" style={alignLeft}>
            <div style={msgReceive} className="chatImg">
              <img src="assets/images/login.png" />
            </div>
            <p style={dateSend} className="date">
              02-August-2023{" "}
            </p>
          </div>

          <div className="chatMsg" style={alignRight}>
            <div style={msgSend} className="chatImg">
              <img src="assets/images/login.png" />
            </div>
            <p style={dateReceive} className="date">
              02-August-2023{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

let msgReceive = {
  background: "#F1F1F1",
};

let msgSend = {
  background: "#5F35F5",
  color: "#fff",
};

let alignRight = {
  justifyContent: "flex-end",
};
let alignLeft = {
  justifyContent: "flex-start",
};

let dateSend = {
  left: "-40px",
};

let dateReceive = {
  right: "-40px",
};
export default Chat;
