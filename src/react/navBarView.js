import React, { useState } from "react";
import GoogleSignin from "../assets/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

function NavBar() {
    const [user] = useAuthState(auth);



    function googleSignInACB(){
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };

    function signOutACB(){
        auth.signOut();
    };

    return (
        <nav className="nav-bar">
            <h1>Chat with other watchers !</h1>
            {user ? (
                <button onClick={signOutACB} className="sign-out" type="button">
                    Sign Out
                </button>
            ) : (
                <button className="sign-in">
                    <img onClick={googleSignInACB} src={GoogleSignin} alt="sign in with google" type="button"/>
                </button>
            )}
        </nav>
    );
}

export default NavBar;