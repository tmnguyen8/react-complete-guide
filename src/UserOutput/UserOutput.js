import React from 'react'

export default function UserOutput(props) {
    return (
        <div>
            <p>Username : {props.username}</p>
            <p>Text : {props.text}</p>
        </div>
    )
}
