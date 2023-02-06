import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, push, set } from "firebase/database";
import { getAuth } from "firebase/auth";
import { BsCheck } from "react-icons/bs";

const UserList = () => {
  const auth = getAuth();
  const db = getDatabase();

  let [userList, setUserList] = useState([]);
  let [friendrequest, setFriendrequest] = useState([]);
  let [change, setChange] = useState(false);

  // Read Database(jara reg korce tader list anci database theke)
  useEffect(() => {
    let userArr = [];
    const userRef = ref(db, "users");
    onValue(userRef, (snapshot) => {
      snapshot.forEach((item) => {
        userArr.push({
          username: item.val().username,
          email: item.val().email,
          id: item.key,
        });
      });
      setUserList(userArr);
    });
  }, []);

  // write database (data send korchi -> kader request pathano hoice)
  // sender, receiver start ekhan theke
  // sender -> jar id theke request pathano hocce
  // receiver -> je request pabe
  //console.log(auth.currentUser.displayName);
  let handleFriendRequest = (info) => {
    set(push(ref(db, "friendRequest/")), {
      senderName: auth.currentUser.displayName,
      senderId: auth.currentUser.uid,
      receiverName: info.username,
      receiverId: info.id,
    });
    setChange(!change);
    console.log(info);
  };
  // console.log(userList);
  // console.log(friendrequest);

  // Read Database(data anchi -> jader ke request pathano hoice sei sob data ke)
  useEffect(() => {
    let friendRequestArr = [];
    const friendRequestRef = ref(db, "friendRequest/");
    onValue(friendRequestRef, (snapshot) => {
      snapshot.forEach((item) => {
        friendRequestArr.push(item.val().receiverId + item.val().senderId);
      });
      setFriendrequest(friendRequestArr);
    });
  }, [change]);
  //console.log(friendrequest);
  //console.log(userList);
  return (
    <div className="grouplist friendlist">
      <h2>User List</h2>
      {/* Group box 1 */}

      {userList.map(
        (items) =>
          // auth.currentUser.uid !== items.id -> nijer id jeno na ase tai ai condition
          auth.currentUser.uid !== items.id && (
            <div className="group_box">
              <div className="img">
                <img src="assets/images/friends1.png" alt="group img" />
              </div>
              <div className="name">
                <h3> {items.username} </h3>
                <p>{items.id}</p>
              </div>
              {/* ekhane user list && kader request pathano hoice ta
               compare kore button er sign change korchi
              */}
              {friendrequest.includes(items.id + auth.currentUser.uid) ||
              friendrequest.includes(auth.currentUser.uid + items.id) ? (
                <div className="button">
                  <button
                    style={{ backgroundColor: "rgb(26, 102, 255)" }}
                    onClick={() => handleFriendRequest(items)}
                  >
                    <BsCheck />
                  </button>
                </div>
              ) : (
                <div className="button">
                  <button onClick={() => handleFriendRequest(items)}>+</button>
                </div>
              )}
            </div>
          )
      )}
    </div>
  );
};

export default UserList;
