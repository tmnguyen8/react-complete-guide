import React from 'react';

export default function UserInput(props) {
    return (
        <div>
            <input onChange={props.onChange}/>
        </div>
    )
}
