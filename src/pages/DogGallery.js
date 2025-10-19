import { useState } from 'react';

export const DogGallery = () => {
  const [imgUrl, setImgUrl] = useState('')
  const [hasFailed, setHasFailed] = useState(false);

  // TODO: Fetch a new dog image every 10 seconds with setInterval
  // API URL: https://dog.ceo/api/breeds/image/random

  if (hasFailed) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <h2>Infinite dog pictures!!!!!4!!!44!!!</h2>
      <div className="page-container">
        {/* Display fetched image or loading state */}
      </div>
    </>
  )
}