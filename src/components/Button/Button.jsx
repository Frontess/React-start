import classes from './Button.module.css'
// когда импортируем модули, используем объект classes ключи содержат в себе классы 
export default function Button({ children, isActive, ...props }) {
    
    return (<button
        {...props} 
    className={isActive ? `${classes.button} ${classes.active}` : classes.button}>
    { children}
    </button>
    )
}