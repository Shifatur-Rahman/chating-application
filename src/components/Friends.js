import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Friends = () => {
  const db = getDatabase();
  let [userFriend, setUserFriend] = useState([]);
  useEffect(() => {
    let friendList = [];
    // write database
    const starCountRef = ref(db, "acceptFriend/");
    onValue(starCountRef, (snapshot) => {
      // const data = snapshot.val();
      snapshot.forEach((item) => {
        console.log();
        friendList.push({
          name: item.val().senderName,
          senderId: item.val().senderId,
        });
      });
      // const data = snapshot.val();
      // console.log(data);
      setUserFriend(friendList);
    });
  }, []);
  console.log(userFriend);
  return (
    <div className="grouplist friendlist">
      <h2>Friends</h2>
      {/* Group box 1 */}

      {userFriend.map((items) => (
        <div className="group_box">
          <div className="img">
            <img src="assets/images/friends1.png" alt="group img" />
          </div>
          <div className="name">
            <h3> {items.name} </h3>
            <h4>Hi Guys, Wassup!</h4>
          </div>
          <div className="button">
            <p>Today, 8:56pm</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Friends;
