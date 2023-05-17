import React from "react";
import GoogleSignin from "../assets/btn_google_signin_dark_pressed_web.png";
import logo from "../assets/name.png"
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

function Welcome(){
  function googleSignInACB(){
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <main className="welcome">
      <h2>Welcome to the Live Chat !</h2>
      <img src={logo} alt="ReactJs logo" />
      <p>Sign in with Google to chat with all the watchers.</p>
      <button className="sign-in">
        <img
          onClick={googleSignInACB}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;