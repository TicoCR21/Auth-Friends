import React from 'react'

export default function FloatingButton() 
{
  return (
    <div className = "fixed-action-btn">
      <a className="btn-floating btn-large deep-purple darken-4">
        <i className="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a href = "#add-friend-modal"  className="btn-floating deep-purple lighten-1 modal-trigger">
            <i className = "material-icons">person_add</i>
          </a>
        </li>
      </ul>
    </div>
  )
}
