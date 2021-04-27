import React, { useContext } from 'react';
import firebase from 'firebase/app';
import "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import firebaseConfig from './firebase.config';
import Navbar from '../../Shared/Navbar/Navbar';


const Login = () => {
  
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/dashboard" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email, photoURL } = result.user;
      console.log(result.user);
      const signedInUser = { name: displayName, email, photoURL }
      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }
  console.log(loggedInUser)
  return (
    <div className="login-page container">
      <Navbar></Navbar>
      <div className="row d-flex justify-content-center align-items-center " style={{ marginLeft: '20%', marginTop: '20%', marginRight: 'auto' }}>
        <div className="col-md-6 shadow p-5 d-flex justify-content-center">
          <div className="from-group mt-2 d-flex justify-content-center">
            <button className="btn btn-secondary " onClick={handleGoogleSignIn}>Google SignIn</button>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
        </div>
      </div>
    </div>
  );
};
export default Login;