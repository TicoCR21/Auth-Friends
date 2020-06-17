import React, { useState } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import axiosWithAuth from "../utils/axiosWithAuth";

const modalStyle = 
{
  width : "75%",
  height : "75%"
}

export default function AddLogModal( props ) 
{ 
  const [ newFriend, setNewFriend ] = useState( { name : "", age : "", email : "" } ); 

  const onChange = e => setNewFriend( { ...newFriend, [ e.target.name ] : e.target.value } );

  const onSubmit = () =>
  {
    if( newFriend.name === "" || newFriend.age === "" || newFriend.email === "" )
      M.toast( { html : "Please Enter Friends Information", classes : "deep-purple darken-4" } )
    else
    {
      axiosWithAuth().post( "/api/friends", newFriend )
        .then( response => 
          {
            props.setFriendsList( response.data );
            M.toast( { html : "New Friend Added!", classes : "deep-purple darken-4" } )
            setNewFriend( { name : "", age : "", email : "" } );
          } )
        .catch( error => M.toast( { html : "Something Went Wrong!", classes : "deep-purple darken-4" } ) );
    }
  }

  return (
    <div id = "add-friend-modal" className = "modal" style = { modalStyle } >

      <div className="modal-content">
        <h4 className = "deep-purple-text text-darken-4">Enter New Friend</h4>
        <div className = "row">
          <div className = "input-field">
            <input type = "text" name = "name" value = { newFriend.name } onChange = { onChange } />
            <label htmlFor="message" className = "active deep-purple-text text-darken-4" > Name </label>
          </div>
        </div>

        <div className = "row">
          <div className = "input-field">
            <input type = "text" name = "age" value = { newFriend.age } onChange = { onChange } />
            <label htmlFor="message" className = "active deep-purple-text text-darken-4" > Age </label>
          </div>
        </div>

        <div className = "row">
          <div className = "input-field">
            <input type = "text" name = "email" value = { newFriend.email } onChange = { onChange } />
            <label htmlFor="message" className = "active deep-purple-text text-darken-4" > Email </label>
          </div>
        </div>

      </div>

      <div className="modal-footer">
        <a href="#!" onClick = { onSubmit } className = "modal-close waves-effect waves-light deep-purple darken-4 btn"> Enter </a>
      </div>

    </div>
  )
}