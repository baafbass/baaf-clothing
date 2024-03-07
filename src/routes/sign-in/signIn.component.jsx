import {auth,signInWithGooglePopup,createUserDocumentFromAuth,signInWithGoogleRedirect} from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'

const SignIn = () =>{

	const logGoogleUser = async () => {
      const {user} = await signInWithGooglePopup();
      const userDocRef = createUserDocumentFromAuth(user)
	}

	return(
         <div>
            <h1>Her is ther Sign In form</h1>
            <button onClick={logGoogleUser}>Sign In with Google Popup</button>
            <SignUpForm />
         </div>
		)
}

export default SignIn