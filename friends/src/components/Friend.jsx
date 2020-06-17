import React from 'react'
import M from "materialize-css/dist/js/materialize.min.js";

export default function Friend( props ) 
{
  return (
      <ul className = "collapsible">
        <li>
          <div className = "collapsible-header">
            <i className = "material-icons deep-purple-text darken-4">account_circle</i>
            { props.friend.name }<span className = "badge"> <i className = "material-icons deep-purple-text darken-4" onClick = { () => props.deleteFriend( props.friend.id ) } >clear</i></span>
          </div>  
        </li>
        
        <li>
          <div className = "collapsible-header">
            <i className = "material-icons deep-purple-text deep-purple-text">contact_mail</i>
            { props.friend.email }
            <span className = "badge deep-purple-text darken-4"> Age: { props.friend.age } </span>
          </div>
        </li>
      </ul>
  )
}
