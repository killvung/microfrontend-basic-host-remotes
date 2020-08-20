import React from 'react'
import './VideoItem.css'

export default ({ video, onVideoSelect }) => {
  const url = video?.snippet.thumbnails.medium.url;
  const title = video?.snippet.title;

  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img className="ui image" src={url} alt={title} />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  )
}
