import React from 'react';
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import './SignIn.css'; // Ensure this import is present

const SignIn = () => {
    const auth = getAuth();

    const isMobile = () => {
        return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
    };

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        if (isMobile()) {
            signInWithRedirect(auth, provider);
        } else {
            signInWithPopup(auth, provider)
                .then(result => {
                    console.log(result.user);
                    // Handle successful sign-in
                })
                .catch(error => {
                    console.error("Error during sign-in with Google:", error);
                });
        }
    };

    return (
        <div className="sign-in">
            <img src="https://cdn.shopify.com/s/files/1/0677/8601/5024/files/SignInScreenLogo.png?v=1717992963" alt="Logo" className="logo" />
            <div className="button-container">
                <button className="google" onClick={signInWithGoogle}>
                    <img src="https://theplace2b.com.au/wp-content/uploads/2020/09/178-1783296_g-transparent-circle-google-logo.png" alt="Google logo" />
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default SignIn;
