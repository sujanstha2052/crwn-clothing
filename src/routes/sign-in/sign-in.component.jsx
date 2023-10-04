import React from "react";
import { useEffect } from "react";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWIthGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import SignUp from "../../components/sign-up/sign-up.components";

const SignIn = () => {
  useEffect(() => {
    const asyncFn = async () => {
      const response = await getRedirectResult(auth);

      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    };
    asyncFn();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(response);
  };

  const logGoogleRedirectUser = async () => {
    const { user } = await signInWIthGoogleRedirect();
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={logGoogleRedirectUser}>
        Sign in with Google Regirect
      </button>

      <SignUp />
    </div>
  );
};

export default SignIn;
