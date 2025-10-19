import { useEffect, useState } from 'react';

export const DogGallery = () => {
  const [imgUrl, setImgUrl] = useState('')
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    let interval;

    async function fetchData() {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
        setImgUrl(result.message)
      } catch (error) {
        console.error(error.message);
        setHasFailed(true);

        if (interval) {
          clearInterval(interval);
        }
      }
    }
    fetchData();

    interval = setInterval(fetchData, 8000);

    return () => clearInterval(interval);
  }, []);

  if (hasFailed) {
    return <div>Something went wrong</div>;
  }

  if (!imgUrl) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h2>Infinite dog pictures!!!!!4!!!44!!!</h2>
      <div className="page-container">
        <img
          src={imgUrl}
          alt="dog-picture"
          loading="lazy"
        />
      </div>
    </>
  )
}