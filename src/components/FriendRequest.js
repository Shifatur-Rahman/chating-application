import React, { useEffect, useState } from "react";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
} from "firebase/database";
import { getAuth } from "firebase/auth";
import Alert from "@mui/material/Alert";

const FriendRequest = () => {
  const auth = getAuth();
  const db = getDatabase();
  let [friendrequest, setfFriendrequest] = useState([]);
  let [dlt, setDlt] = useState(true);

  //Friend Request(Read Database)  ->(data anchi -> je ke ke request pathaice)
  useEffect(() => {
    let friendRequestArr = [];
    const friendRequestRef = ref(db, "friendRequest/");
    onValue(friendRequestRef, (snapshot) => {
      snapshot.forEach((item) => {
        // console.log("unique id", item.key);
        if (auth.currentUser.uid === item.val().receiverId) {
          friendRequestArr.push({
            id: item.key,
            senderName: item.val().senderName,
            senderId: item.val().senderId,
            receiverName: item.val().receiverName,
            receiverId: item.val().receiverId,
          });
        }
      });
      setfFriendrequest(friendRequestArr);
    });
    //ekhane [dlt] diye runtime korchi
  }, [dlt]);

  // jader request accept korci tader data send korchi (write data)
  // request accept korar por remove(database delete) diye data delete kore dicche
  // setDlt(!dlt) diye jinish ta ke run time e execute korchi

  let handleAcceptFriend = (friendData) => {
    set(push(ref(db, "acceptFriend/")), {
      id: friendData.id,
      senderName: friendData.senderName,
      senderId: friendData.senderId,
      receiverName: friendData.receiverName,
      receiverId: friendData.receiverId,
    }).then(() => {
      remove(ref(db, "friendRequest/" + friendData.id)).then(() => {
        setDlt(!dlt);
      });
    });
    // console.log(friendData);
    // console.log(friendData);
  };

  return (
    <div className="grouplist friendrequest">
      <h2>Friend Request ({friendrequest.length}) </h2>
      {friendrequest.map((item) => (
        <div className="group_box">
          <div className="img">
            <img src="assets/images/friends1.png" alt="group img" />
          </div>
          <div className="name">
            <h3>{item.senderName}</h3>
            <h4>Hi Guys, Wassup!</h4>
          </div>
          <div className="button">
            <button onClick={() => handleAcceptFriend(item)}>Accept</button>
          </div>
        </div>
      ))}

      {friendrequest.length === 0 && (
        <Alert style={{ marginTop: "30px" }} severity="info">
          No Friend Request
        </Alert>
      )}
    </div>
  );
};

export default FriendRequest;
