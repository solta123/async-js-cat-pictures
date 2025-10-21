import { useState, useEffect } from 'react';

export const DogGallery = () => {
  const [imgUrl, setImgUrl] = useState('')

  useEffect(() => {
    // TODO: Fetch a new dog image every 10 seconds with setInterval
  }, [])

  return (
    <>
      <h2>Infinite dog pictures!!!!!4!!!44!!!</h2>
      <div className="page-container">
        {/* Display fetched image or loading state */}
      </div>
    </>
  )
}