import { useState } from 'react';

export function Home() {
  const [cats, setCats] = useState([]);
  const [hasFailed, setHasFailed] = useState(false);

  // TODO: Fetch cat images with Promise
  // API URL: https://api.thecatapi.com/v1/images/search?limit=10

  if (hasFailed) {
    return <div className="error">Something went wrong</div>;
  }

  return (
    <>
      <h2>Welcome to the Cat Gallery!</h2>
      <div className="page-container">
        {/* Display cat images and loading state */}
      </div>
    </>
  );
}