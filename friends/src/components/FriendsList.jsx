import React, { useState, useEffect } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";
import Friend from "./Friend";

import M from "materialize-css/dist/js/materialize.min.js";

import FloatingButton from "./FloatingButton";
import AddFriendModal from "./AddFriendModal";
import Preloader from './Preloader';

export default function FriendsList() 
{
  const [ friendsList, setFriendsList ] = useState( [] );

  const getFriends = () => 
  {
    axiosWithAuth().get( "/api/friends" )
        .then( response => setFriendsList( response.data ) )
        .catch( response => M.toast( { html : "Error: Token Expired!", classes : "deep-purple darken-4" } ) );
  }

  useEffect( getFriends, [] );

  const deleteFriend = id => 
  {
    axiosWithAuth().delete( `/api/friends/${ id }` )
        .then( response => { getFriends(); } )
        .catch( response => M.toast( { html : "Error: Token Expired!", classes : "deep-purple darken-4" } ) );
  }

  return (
    <div className = "container" style = { { marginTop : "30px" } }>

      { friendsList.length === 0 && <Preloader /> }
      { friendsList.map( friend => <Friend key = { friend.id } friend = { friend } deleteFriend = { deleteFriend }/> ) }

      <FloatingButton />
      <AddFriendModal setFriendsList = { setFriendsList } />
    </div>
  )
}
