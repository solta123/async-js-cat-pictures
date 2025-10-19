import { useEffect, useState } from 'react';

export function Home() {
  const [cats, setCats] = useState([]);
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(resolve, 1000);
    }).then(() => fetch('https://api.thecatapi.com/v1/images/search?limit=10'))
      .then((res) => res.json())
      .then((json) => setCats(json))
      .catch((error) => setHasFailed(error));
  }, []);

  if (hasFailed) {
    return <div className="error">Something went wrong</div>;
  }

  return (
    <>
      <h2>Welcome to the Cat Gallery!</h2>
      <div className="page-container">
        {!cats.length ? <>Loading...</> : cats.map((cat) => (
          <div key={cat.id}>
            <img
              src={cat.url}
              alt={`cat-image-${cat.id}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </>
  );
}