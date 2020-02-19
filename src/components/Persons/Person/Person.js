import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import Aux from "../../../hoc/Auxilliary";
import AuthContext from "../../../context/auth-context";

class Person extends Component{
    // const rnd = Math.random();

    // if ( rnd > 0.7 ) {
    //     throw new Error( 'Something went wrong' );
    // }
    constructor(props) {
        super()
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus()
        this.inputElementRef.current.focus();
        console.log(this.context.isAuthenticated)
    }

    render () {
        console.log('[Person.js] rendering')
        return (
            // alternatively, it can be wrapped with <React.fragment></React.fragment> in lieu <Aux></Aux>
            <Aux className={classes.Person}>
                {/* <AuthContext.Consumer>
                    {(context)=> context.isAuthenticated? <p>Authenticated</p>: <p>Please Login</p>}
                </AuthContext.Consumer> */}

                {/* //using static contextType = AuthContext; */}
                {this.context.isAuthenticated? <p>Authenticated</p>: <p>Please Login</p>}

                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref = {this.inputElementRef}
                    onChange={this.props.changed} 
                    value={this.props.name}
                />
            </Aux>
            // <div className={classes.Person}>
                // <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                // <p>{this.props.children}</p>
                // <input type="text" onChange={this.props.changed} value={this.props.name} />
            // </div>
        )
    }
    
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Person;