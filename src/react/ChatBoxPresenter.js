import "../styles/Chat.css";
import NavBar from "./navBarView";
import ChatBox from "./ChatBoxView";
import Welcome from "./welcomeView";
import {auth} from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {useLocation} from "react-router";

function Chat() {
    const [user] = useAuthState(auth);
    const location = useLocation();
    const currentId = location.pathname.match(/\d+$/)[0];

  return (
    <div className="App">
      <NavBar />
      {!user ? (
        <Welcome />
      ) : (
        <>
          <ChatBox id={currentId} />
        </>
      )}
    </div>
  );
}

export default Chat;