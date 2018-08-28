import React from 'react';

class SongContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      songs: []
    }
  };

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    
  }

}

export default SongContainer;
