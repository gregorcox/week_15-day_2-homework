import React from 'react';

const SongDetail = function (props) {

  return (
    <li>
    <h3>{props.title}</h3>
    <p>{props.category}</p>
    <img src={props.image}></img>
  </li>
  )

}

export default SongDetail;
