import React from 'react';
import SongDetail from './SongDetail';

const SongList = function (props) {
  const songDetails = props.songs.map((song) => {
    return(
    <SongDetail title={song.title.label} />)
  })

  console.log(props);

  return (
    <ol>{songDetails}</ol>
  )
}


export default SongList;
