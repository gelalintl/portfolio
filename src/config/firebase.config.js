import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACOZblBdLlmMlcPGbD5tXp4Vuo7rtFN68",
  authDomain: "juniordev-310797.firebaseapp.com",
  projectId: "juniordev-310797",
  storageBucket: "juniordev-310797.appspot.com", 
  messagingSenderId: "330524646260",
  appId: "1:330524646260:web:debd7a3d3a9ab483b22a21"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;