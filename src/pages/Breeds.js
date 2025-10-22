import { useEffect, useState } from 'react';

export function Breeds() {
  const [breeds, setBreeds] = useState({
    amau: null,
    amis: null,
    bali: null,
  });
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    async function fetchBreeds() {
      try {
        const requests = await Promise.all([
          fetch('https://api.thecatapi.com/v1/images/search?breed_ids=amau'),
          fetch('https://api.thecatapi.com/v1/images/search?breed_ids=amis'),
          fetch('https://api.thecatapi.com/v1/images/search?breed_ids=bali'),
        ]);

        if (requests.some((res) => !res.ok)) {
          throw new Error('Failed to fetch breeds');
        }

        const [json1, json2, json3] = await Promise.all(
          requests.map(async (req) => req.json())
        );

        setBreeds({
          amau: json1[0],
          amis: json2[0],
          bali: json3[0],
        });
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
        {breeds.amau && (
          <figure>
            <img
              src={breeds.amau.url}
              alt={breeds.amau.id}
            />
            <figcaption>Arabian Mau</figcaption>
          </figure>
        )}
        {breeds.amis && (
          <figure>
            <img
              src={breeds.amis.url}
              alt={breeds.amis.id}
            />
            <figcaption>Australian Mist</figcaption>
          </figure>
        )}
        {breeds.bali && (
          <figure>
            <img
              src={breeds.bali.url}
              alt={breeds.bali.id}
            />
            <figcaption>Balinese</figcaption>
          </figure>
        )}
      </div>
    </>
  );
}