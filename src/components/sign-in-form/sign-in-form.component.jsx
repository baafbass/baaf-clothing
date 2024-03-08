import {useState,useContext} from 'react';
import 
{
     signInWithGooglePopup,
     createUserDocumentFromAuth,
     signInAuthUserWithEmailAndPassword
}
from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import './sign-in-form.styles.scss'
import Button from '../button/button.component'
import {UserContext} from '../../contexts/user.context'


const defaultFormFields = {
     	email:'',
     	password:''
     }

const SignInForm = () => {

     const {setCurrentUser} = useContext(UserContext)

     const [formFields,setFormFields] = useState(defaultFormFields);
     const {email,password} = formFields;

     const handleChange = (event) =>{
           const {name,value} = event.target;
           setFormFields({...formFields,[name]:value})
     }

     
     const signInWithGoogle = async () => {
      const {user} = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user)
     }

     const resetFormFields = () =>{
     	setFormFields(defaultFormFields)
     }

    const handleSubmit = async (event) =>{
          event.preventDefault();

          try{
               const {user} = await signInAuthUserWithEmailAndPassword(email,password)
               setCurrentUser(user)
           resetFormFields();
          } catch (error){
              switch(error.code){
               case 'auth/wrong-password':
               alert('Incorrect Password for email');
               break;
               case 'auth/user-not-found':
               alert('no user associated with this email');
               break;
               default:
               console.log(error);
              }

               if(error.code === '')
               {
                    alert('Incorect Password for email')
               }
               console.log(error)
          }
    }

	return(
          <div className="">
          <h2>Already have an account?</h2>
          <span>Sign in with your email and password</span>
          <form onSubmit={handleSubmit}>


          	<FormInput
          	label="Email" 
          	type="email" 
          	required 
          	onChange={handleChange} 
          	name="email" 
          	value={email}/>

          	
          	<FormInput
          	label="Password" 
          	type="password" 
          	required 
          	onChange={handleChange} 
          	name="password" 
          	value={password}/>

               <div className="buttons-container">
                   <Button type="submit">Sign In</Button>
                   <Button type="button" button_type='google' onClick={signInWithGoogle}>Google Sign In</Button>
               </div>
          	
          </form>
          </div>
		)
}

export default SignInForm;