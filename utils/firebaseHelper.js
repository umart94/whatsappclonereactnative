import { initializeApp } from "firebase/app";


export const getFirebaseApp = () => {

    const firebaseConfig = {
       //get this from when you create an app in firebase.
      };
      return initializeApp(firebaseConfig);
  }