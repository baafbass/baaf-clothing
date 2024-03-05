
import { initializeApp } from 'firebase/app'
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBK09UtgcYuZ6V4bD-rmBP1F54ae1YOsBg",
  authDomain: "baaf-clothing-db.firebaseapp.com",
  projectId: "baaf-clothing-db",
  storageBucket: "baaf-clothing-db.appspot.com",
  messagingSenderId: "675032276128",
  appId: "1:675032276128:web:d2837a997f7e0e3267bdc5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt:'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) =>{
	const userDocRef = doc(db,'users',userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)
} 

