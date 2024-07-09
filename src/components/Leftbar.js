import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import {
  MdSms,
  MdNotificationsNone,
  MdSettings,
  MdLogout,
} from "react-icons/md";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

const Leftbar = (props) => {
  let [name, setName] = useState();
  const auth = getAuth();
  let navigate = useNavigate();

  let handleLogout = () => {
    signOut(auth)
      .then(() => {
        //  console.log("sign out");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setName(user.displayName);
      }
    });
  }, []);
  
  return (
    <div className="leftbar">
      <img
        className="profilePic"
        src="assets/images/login.png"
        alt="user_img"
      />

      <h4>{name}</h4>

      <div className="icons">
        <ul>
          <li className={props.active === "home" && "active"}>
            <Link to="/home">
              {" "}
              <AiOutlineHome className="homeIcon" />
            </Link>
          </li>
          <li className={props.active === "message" && "active"}>
            {" "}
            <Link to="/message">
              <MdSms className="homeIcon" />
            </Link>
          </li>
          <li className={props.active === "notification" && "active"}>
            {" "} 
            <Link to="/notification">
            <MdNotificationsNone className="homeIcon" />
            </Link>
          </li>
          <li className={props.active === "settings" && "active"}>
            {" "}
            <MdSettings className="homeIcon" />
          </li>
          <li onClick={handleLogout}>
            {" "}
            <MdLogout className="homeIcon" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Leftbar;
