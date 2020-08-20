import React from 'react'
import ReactPlayer from 'react-player'

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>
  }
  const videoId = video?.id.videoId;
  const title = video?.snippet.title;
  const description = video?.snippet.description;
  const videoSrc = `https://www.youtube.com/embed/${videoId}`

  return (
    <div>
      <div className="ui embed">
        <ReactPlayer url={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default VideoDetail
