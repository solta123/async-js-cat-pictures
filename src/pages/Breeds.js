import { useState, useEffect } from 'react';

export function Breeds() {
  const [breeds, setBreeds] = useState({
    amau: null,
    amis: null,
    bali: null,
  });

  useEffect(() => {
    // TODO: Fetch breeds data with async/await 
    // use the following ids: amau (Arabian Mau), amis (Australian Mist), bali (Balinese)
  }, [])

  return (
    <>
      <h2>Cat Breeds</h2>
      <div className="page-container">
        {/* Display images here */}
      </div>
    </>
  );
}