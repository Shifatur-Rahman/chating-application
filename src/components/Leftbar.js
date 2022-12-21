import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import {
  MdSms,
  MdNotificationsNone,
  MdSettings,
  MdLogout,
} from "react-icons/md";

const Leftbar = () => {
  return (
    <div className="leftbar">
      <img
        className="profilePic"
        src="assets/images/login.png"
        alt="user_img"
      />

      <div className="icons">
        <ul>
          <li className="active">
            <AiOutlineHome className="homeIcon" />
          </li>
          <li>
            {" "}
            <MdSms className="homeIcon" />
          </li>
          <li>
            {" "}
            <MdNotificationsNone className="homeIcon" />
          </li>
          <li>
            {" "}
            <MdSettings className="homeIcon" />
          </li>
          <li>
            {" "}
            <MdLogout className="homeIcon" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Leftbar;
