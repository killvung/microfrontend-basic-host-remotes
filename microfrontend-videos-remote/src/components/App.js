import React, { useState } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import VideoItem from './VideoItem'
import youtube from '../apis/youtube'

export default () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    const videos = response.data.items;
    const selectedVideo = videos[0];

    setVideos(videos);
    setSelectedVideo(selectedVideo);
  }

  const onVideoSelect = video => {
    setSelectedVideo(video)
  }

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList>
              {
                videos.map((video => (
                  <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
                )))
              }
            </VideoList>
          </div>
        </div>
      </div>
    </div>
  )
}
