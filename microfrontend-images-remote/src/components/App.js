import React, { useState } from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import ImageCard from './ImageCard'


export default () => {
  const [images, setImages] = useState([]);

  const onSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });

    setImages(response.data.results)
  }

  return (
    <div className="ui container">
      <SearchBar onSubmit={onSubmit} />
      <ImageList>
        {
          images.map(image =>
            <ImageCard key={image.id} image={image} />)
        }
      </ImageList>
    </div>
  )
}
