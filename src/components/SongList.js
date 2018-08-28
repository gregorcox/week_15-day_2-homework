import React from 'react';
import SongDetail from './SongDetail';

const SongList = function (props) {
  const songDetails = props.songs.map((song) => {
    return(
    <SongDetail title={song.title.label} category={song.category.attributes.label}
    image={song['im:image'][0].label}/>)
  })

  console.log(props);

  return (
    <ol>{songDetails}</ol>
  )
}


export default SongList;
