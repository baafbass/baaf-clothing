import {createContext,useState,useEffect,useReducer} from 'react'
import {onAuthStateChangedListener,createUserDocumentFromAuth} from '../utils/firebase/firebase.utils'
import {createAction} from '../utils/reducer/reducer.utils.js'

export const UserContext = createContext({
currentUser:null,
setCurrentUser: () => null
})

export const USER_ACTION_TYPES = {
	SET_CURRENT_USER : 'SET_CURRENT_USER',
}

const INITIAL_STATE = {
	currentUser:null,
}

export const userReducer = (state,action) =>{
  const  {type,payload} = action;

  switch(type) {
  case USER_ACTION_TYPES.SET_CURRENT_USER:
  	return {...state,payload};
  default:
  	throw new Error(`Unhandled type ${type} in userReducer`)
  }
}

export const UserProvider = ({children})=>{
	const [{currentUser},dispatch] = useReducer(userReducer,INITIAL_STATE);

	const setCurrentUser = (user) => {
		dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user));
	}
   
   useEffect(()=>{
   	const unSubscribe = onAuthStateChangedListener((user)=>{
   		if(user)
   		{
   		   createUserDocumentFromAuth(user)
   		}
   		setCurrentUser(user)
   	})

   	return unSubscribe
   },[])

   const value = {
   	currentUser,
   }

	return <UserContext.Provider value={value}>
	{children}
	</UserContext.Provider>
}