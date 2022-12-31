import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
const UserList = () => {
  const auth = getAuth();
  const db = getDatabase();
  let [userList, setUserList] = useState([]);
 //console.log(auth.currentUser.uid);
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

 // console.log(userList);

  return (
    <div className="grouplist friendlist">
      <h2>User List</h2>
      {/* Group box 1 */}

      {userList.map(
        (items) =>
          auth.currentUser.uid !== items.id && (
            <div className="group_box">
              <div className="img">
                <img src="assets/images/friends1.png" alt="group img" />
              </div>
              <div className="name">
                <h3> {items.username} </h3>
                <p>{items.email}</p>
              </div>
              <div className="button">
                <button>+</button>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default UserList;
