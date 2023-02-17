import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
import Alert from "@mui/material/Alert";
import { MdMessage } from "react-icons/md";

const Friends = (props) => {
  const auth = getAuth();
  const db = getDatabase();
  let [userFriend, setUserFriend] = useState([]);
  useEffect(() => {
    let friendList = [];
    const time = new Date();
    // write database
    const starCountRef = ref(db, "acceptFriend/");
    onValue(starCountRef, (snapshot) => {
      // const data = snapshot.val();
      snapshot.forEach((item) => {
        // jake request pathano hoice accept korar por jeno unar id & je req pathaice
        // tar oikhane friend gulo show kore tai  ai condition
        if (
          auth.currentUser.uid === item.val().receiverId ||
          auth.currentUser.uid === item.val().senderId
        ) {
          friendList.push({
            senderName: item.val().senderName,
            senderId: item.val().senderId,
            receiverName: item.val().receiverName,
            receiverId: item.val().receiverId,
            date: `${time.getDate()}-${
              time.getMonth() + 1
            }-${time.getFullYear()}`,
          });
        }
      });
      // const data = snapshot.val();
      // console.log(data);
      setUserFriend(friendList);
    });
  }, []);
  // console.log(userFriend);
  // console.log(auth.currentUser.uid);
  return (
    <div className="grouplist friendlist">
      <h2>
        {userFriend.length > 1 ? "Friends" : "Friend"} ({userFriend.length})
      </h2>

      {userFriend.length === 0 && (
        <Alert style={{ marginTop: "30px" }} severity="info">
          You have no Friends
        </Alert>
      )}

      {userFriend.map((items) => (
        <div className="group_box">
          <div className="img">
            <img src="assets/images/friends1.png" alt="group img" />
          </div>
          <div className="name">
            <h3>
              {auth.currentUser.uid == items.senderId
                ? items.receiverName
                : items.senderName}
              {/* {items.senderName} {items.receiverName}{" "} */}
            </h3>
            <h4>Hi Guys, Wassup!</h4>
          </div>
          <div className="button">
            {props.item == "date" ? (
              <h4>{items.date}</h4>
            ) : (
              <button className="msg-icon">
                <MdMessage />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Friends;
