import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

//Header component에서 login함수를 만들고 firebase를 import해도 되긴하지만 그렇게 되면 component가 지나치게 firebase에 의존하게 된다. logic화된 기능들은 component 안에서가 아니라 따로 파일을 빼서 만들어야 좋음.

//로그인
export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

//로그아웃
export function logout() {
  signOut(auth).catch(console.error);
}

//로그인 상태
export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : user;
    callback(updatedUser);
  });
}

//adminUser
async function adminUser(user) {
  return await get(ref(database, "admins")) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        console.log(admins);
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
}
