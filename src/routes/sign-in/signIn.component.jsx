import {getRedirectResult} from 'firebase/auth'

import {auth,signInWithGooglePopup,createUserDocumentFromAuth,signInWithGoogleRedirect} from '../../utils/firebase/firebase.utils'

const SignIn = () =>{


	const logGoogleUser = async () => {
      const {user} = await signInWithGooglePopup();
      const userDocRef = createUserDocumentFromAuth(user)
	}

	return(
         <div>
            <h1>Her is ther Sign In form</h1>
            <button onClick={logGoogleUser}>Sign In with Google Popup</button>
         </div>
		)
}

export default SignIn