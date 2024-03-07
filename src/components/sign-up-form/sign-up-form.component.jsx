import {useState} from 'react';
import {createAuthUserWithEmailAndPassword,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import './sign-up-form.styles.scss'
import Button from '../button/button.component'


const defaultFormFields = {
     	displayName:'',
     	email:'',
     	password:'',
     	confirmPassword:''
     }

const SignUpForm = () =>{

     const [formFields,setFormFields] = useState(defaultFormFields);
     const {displayName,email,password,confirmPassword} = formFields;

     const handleChange = (event) =>{
           const {name,value} = event.target;
           setFormFields({...formFields,[name]:value})
     }

     const resetFormFields = () =>{
     	setFormFields(defaultFormFields)
     }

    const handleSubmit = async (event) =>{
          event.preventDefault();

          if(password != confirmPassword)
          {
          	alert("Your Password does not match")
          	return;
          }

          try{
           const {user} = await createAuthUserWithEmailAndPassword(
           	email,
           	password)
           await createUserDocumentFromAuth(user,{displayName})
           resetFormFields();
          } catch (error){
           console.log('User creation encountered an error',error)
          }
    }

	return(
          <div className="">
          <h2>Don't have an account?</h2>
          <span>Sign up with your email and password</span>
          <form onSubmit={()=>{}}>
          	<FormInput 
          	label= "DisplayName"
          	type="text" 
          	required 
          	onChange={handleChange} 
          	name="displayName" 
          	value={displayName}/>
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

          	
          	<FormInput
          	label="Confirm Password" 
          	type="password" 
          	required 
          	onChange={handleChange} 
          	name="confirmPassword" 
          	value={confirmPassword}/>

          	<Button button_type='inverted' type="submit">Submit</Button>
          </form>
          </div>
		)
}

export default SignUpForm;