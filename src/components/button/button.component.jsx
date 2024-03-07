import './button.styles.scss'

const BUTTON_TYPES_CLASSES = {
	google:'google-sign-in',
	inverted: 'inverted'
}


const Button = ({children,button_type,otherProps}) => {
  return <button 
  className={`button-container ${BUTTON_TYPES_CLASSES[button_type]}`}
  {...otherProps}
  >{children}</button>
}

export default Button;