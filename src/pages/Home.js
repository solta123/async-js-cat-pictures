import { useState, useEffect } from 'react';

export function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    // TODO: Fetch cat images with Promise (use setCats for display the images
  }, [])


  return (
    <>
      <h2>Welcome to the Cat Gallery!</h2>
      <div className="page-container">
        {/* Display cat images and loading state */}
      </div>
    </>
  );
}