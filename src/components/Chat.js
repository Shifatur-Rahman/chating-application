import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { CiCamera } from "react-icons/ci";
import { useSelector } from 'react-redux';
import {getAuth} from "firebase/auth";
import { getDatabase, ref, set, push, onValue } from "firebase/database";


const Chat = () => {
  let auth = getAuth();
  const db = getDatabase();
  let [msg, setMsg] = useState("");
  let [msgList, setMsgList] = useState([]);
  let [check, setCheck] = useState(false);

  const user = useSelector((state) => state.activeChat.active)
  // console.log(user);

  let handleMsg = (e) =>{
    setMsg(e.target.value);
  }

  let handleMsgSend = () =>{
    if(msg != ""){
      if(user.status == "single"){
        set(push(ref(db, 'singlemsg' )), {
          whoSendId : auth.currentUser.uid,
          whosSendName: auth.currentUser.displayName,
          whoReceiveId : user.id,
          whoReceiveName : user.name,
          msg : msg
        })
      }
    }
  }

  useEffect(()=>{
    onValue(ref(db, 'singlemsg'), (snapshot) => {
      let msgArr = [];
      snapshot.forEach(item=>{
        if((item.val().whoSendId == auth.currentUser.uid && 
        item.val().whoReceiveId == user.id) ||
        (item.val().whoSendId == user.id && 
         item.val().whoReceiveId == auth.currentUser.uid))

        msgArr.push(item.val());
      })
      setMsgList(msgArr);
    });
  },[user.id])
 
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
              <h3>{user.name}</h3>
              <p>Online/Offline</p>
            </div>
          </div>
          <div className="dots">
            <BsThreeDotsVertical />
          </div>
        </div>

        <div className="chatArea">

          {/* <div className="chatMsg" style={alignLeft}>
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
          </div> */}

          {
            msgList.map(item=>(
              item.whoSendId == auth.currentUser.uid ?

            (  <div className="chatMsg" style={alignRight}>
              <p style={msgSend}>{item.msg}</p>
              <p style={dateReceive} className="date">
                02-August-2023{" "}
              </p>
            </div> 
            )
            :
            <div className="chatMsg" style={alignLeft}>
            <p style={msgReceive}>{item.msg}</p>
            <p style={dateSend} className="date">
              02-August-2023{" "}
            </p>
          </div>
            
        ))
          }

       
          {/* <div className="chatMsg" style={alignRight}>
            <div style={msgSend} className="chatImg">
              <img src="assets/images/login.png" />
            </div>
            <p style={dateReceive} className="date">
              02-August-2023{" "}
            </p>
          </div> */}

        </div> 
        
        <div className="msgBox">
          <div className="msgWrite">
            <input type="text" placeholder="Message" onChange={handleMsg} />
            <CiCamera className="camera" />
            <button onClick={handleMsgSend}>     
              <FiSend />     
            </button>
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
