import SendMessage from "./sendMessageView";
import Message from "./messageView";
import {useEffect, useState} from "react";
import {collection, limit, onSnapshot, orderBy, query,} from "firebase/firestore";
import {db} from "../firebase";


function ChatBox({id}) {
  const [messages, setMessages] = useState([]);

  function changeChatACB() {
    const q = query(
      collection(db, "messages"+id),
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe;

  }
  
  useEffect(changeChatACB, []);

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message) => (
          <Message key={message.id} message={message}/>
        ))}
      </div>
      <SendMessage matchId={id}/>
    </main>
  )
}

export default ChatBox;