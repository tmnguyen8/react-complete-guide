import React, {useEffect, useRef, useContext} from 'react';
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

 function Cockpit(props) {
   const toggleBtnRef = useRef(null)
    
   const authContext = useContext(AuthContext);

    useEffect(()=>{
      console.log('[Cockpit.js] useEffect')
      // HTTP request
      // setTimeout(()=>{
      //   alert('Saved data to cloud')
      // }, 1000);
      toggleBtnRef.current.click()
      return () => {
        console.log('[Cockpit.js] clean up in useEffect')
      }
    }, []) 
    // [] means it only runs the first time
    // only run when props.persons is changed [props.persons]

    useEffect(()=>{
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] clean up in 2nd useEffect')
      }
    })

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }
    
    if ( props.personsLength <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }

    if ( props.personsLength <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <p className={assignedClasses.join( ' ' )}>This is really working!</p>
          <button
              ref={toggleBtnRef}
              className={btnClass}
              onClick={props.clicked}>
                Toggle Person
          </button>
          {/* <AuthContext.Consumer>
            {(context) => (<button onClick={context.login}>Login</button>)}
          </AuthContext.Consumer> */}
          
          {/* Using useContext:  const authContext = useContext(AuthContext);*/}
          <button onClick={authContext.login}>Login</button>
          
        </div>
    )
}
export default React.memo(Cockpit);