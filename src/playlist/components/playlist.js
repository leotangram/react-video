import React from 'react';
// import React, { Component } from 'react';
import Media from './media.js';
import './playlist.css'

// function Playlist(props) {
//   return(
//     <div onClick={props.handleClick}>
//       {props}
//     </div>
//   )
// }

function Playlist(props) {
  const playlist = props.data.categories[0].playlist
  console.log(props.data);
  return(
    <div className="Playlist">
      {
        playlist.map((item) => {
          return <Media {...item} key={item.id} />
        })
      }
    </div>
  )
}

// class Playlist extends Component {
//   render() {
//     const playlist = this.props.data.categories[0].playlist
//     console.log(this.props.data);
//     return(
//       <div className="Playlist">
//         {
//           playlist.map((item) => {
//             return <Media {...item} key={item.id} />
//           })
//         }
//       </div>
//     )
//   }
// }

export default Playlist;