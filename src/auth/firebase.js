import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyDMfTPwsbHC3N--XdCW2Cvi3cp_8t8KKrA",
  authDomain: "todos-11999.firebaseapp.com",
  databaseURL: "https://todos-11999-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todos-11999",
  storageBucket: "todos-11999.appspot.com",
  messagingSenderId: "1060790112969",
  appId: "1:1060790112969:web:41ca40d7509bee341bf318"
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;