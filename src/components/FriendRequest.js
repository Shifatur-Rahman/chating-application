import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
import Alert from "@mui/material/Alert";

const FriendRequest = () => {
  const auth = getAuth();
  const db = getDatabase();
  let [friendrequest, setfFriendrequest] = useState([]);

  // Read Database(data anchi je ke ke request pathaice)
  useEffect(() => {
    let friendRequestArr = [];
    const friendRequestRef = ref(db, "friendRequest/");
    onValue(friendRequestRef, (snapshot) => {
      snapshot.forEach((item) => {
        console.log(item.val().receiverId);
        if (auth.currentUser.uid == item.val().receiverId) {
          friendRequestArr.push({
            name: item.val().name,
            sender: item.val().senderId,
            receiver: item.val().receiverId,
          });
        }
      });

      setfFriendrequest(friendRequestArr);
    });
  }, []);
  console.log(friendrequest);
  return (
    <div className="grouplist">
      <h2>Friend Request</h2>
      {friendrequest.map(
        (item) => (
          <div className="group_box">
            <div className="img">
              <img src="assets/images/friends1.png" alt="group img" />
            </div>
            <div className="name">
              <h3>{item.name}</h3>
              <h4>Hi Guys, Wassup!</h4>
            </div>
            <div className="button">
              <button>Accept</button>
            </div>
          </div>
        )

        // : (
        //   <Alert severity="info">No friend Request</Alert>
        // )
      )}

      {friendrequest.length == 0 && (
        <Alert style={{ marginTop: "30px" }} severity="info">
          No Friend Request
        </Alert>
      )}
    </div>
  );
};

export default FriendRequest;
