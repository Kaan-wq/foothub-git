import "../styles/Chat.css";
import NavBar from "./navBarView";
import ChatBox from "./ChatBoxView";
import Welcome from "./welcomeView";
import { useState } from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Chat() {
    const [user] = useAuthState(auth);

  return (
    <div className="App">
      <NavBar />
      {!user ? (
        <Welcome />
      ) : (
        <>
          <ChatBox />
        </>
      )}
    </div>
  );
}

export default Chat;