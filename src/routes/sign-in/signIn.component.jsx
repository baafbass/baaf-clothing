
import {useEffect} from 'react'
import {getRedirectResult} from 'firebase/auth'

import {auth,signInWithGooglePopup,createUserDocumentFromAuth,signInWithGoogleRedirect} from '../../utils/firebase/firebase.utils'

const SignIn = () =>{

   // useEffect(async ()=>{
   //  const response = await getRedirectResult(auth);
   // },[])

   useEffect(async ()=>{
   	const response = await getRedirectResult(auth);
   })

	const logGoogleUser = async () => {
      const {user} = await signInWithGooglePopup();
      const userDocRef = createUserDocumentFromAuth(user)
	}

	return(
         <div>
            <h1>Her is ther Sign In form</h1>
            <button onClick={logGoogleUser}>Sign In with Google Popup</button>
            <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button>
         </div>
		)
}

export default SignIn