import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

//Header component에서 login함수를 만들고 firebase를 import해도 되긴하지만 그렇게 되면 component가 지나치게 firebase에 의존하게 된다. logic화된 기능들은 component 안에서가 아니라 따로 파일을 빼서 만들어야 좋음.

//로그인
export async function login() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      return user;
    })
    .catch(console.error);
}

//로그아웃
export async function logout() {
  return signOut(auth).then(() => null);
}

//로그인 상태
export async function onUserStateChange(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}