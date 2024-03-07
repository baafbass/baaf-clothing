
import { initializeApp } from 'firebase/app'
import {getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
createUserWithEmailAndPassword
} from 'firebase/auth'
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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt:'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,additionalInformation={}) =>{
  
  if(!userAuth) return;

	const userDocRef = doc(db,'users',userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)


    if(!userSnapshot.exists())
    {
    	const {displayName,email} = userAuth 
    	const createdAt = new Date()

    	try{
    		await setDoc(userDocRef,{
          displayName,
          email,
          createdAt,
          ...additionalInformation
        });
    	}
    	catch (error){
        if(error.code === "auth/email-already-in-use")
        {
          alert("Can not create user,Email already in use")
        } else{
          console.log('error creating the user',error.message)
        }
           
        }
    	}

   return userDocRef;
} 

export const createAuthUserWithEmailAndPassword = async (email,password) =>{
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth,email,password)
}