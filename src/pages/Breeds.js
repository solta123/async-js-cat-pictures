import { useEffect, useState } from 'react';
import './Breeds.css';

export function Breeds() {
  const [breeds, setBreeds] = useState([]);
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    async function fetchBreeds() {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/breeds');
        if (!response.ok) {
          throw new Error(`Failed to fetch breeds: ${response.status}`);
        }
        const data = await response.json();
        setBreeds(data);
      } catch (error) {
        console.error(error.message);
        setHasFailed(true);
      }
    }
    fetchBreeds();
  }, []);

  if (hasFailed) {
    return <div>Failed to load cat breeds. Please try again later.</div>;
  }

  return (
    <>
      <h2>Cat Breeds</h2>
      <div className="page-container">
        {breeds.map((breed) => (
          <div key={breed.id} className="breed-card">
            <div className="breed-image">
              <img
                src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`}
                alt={breed.name}
                loading="lazy"
              />
            </div>
            <div className="breed-info">
              <h3>{breed.name}</h3>
              <p><strong>Origin:</strong> {breed.origin}</p>
              <p><strong>Temperament:</strong> {breed.temperament}</p>
              <p><strong>Life Span:</strong> {breed.life_span} years</p>
              <p>{breed.description}</p>
              <a href={breed.wikipedia_url} target="_blank" rel="noopener noreferrer">
                Learn more on Wikipedia
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}