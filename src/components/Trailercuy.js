import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Trailercuy = () => {
  const { movieId } = useParams();
  const [trailer, setTrailer] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = '114cc087e8f2cc4dfe60930a0409197f';

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`);
        const data = await response.json();
        const youtubeTrailer = data.results.find(video => video.site === 'YouTube' && video.type === 'Trailer');
        if (youtubeTrailer) {
          setTrailer(youtubeTrailer);
        } else {
          setError('Trailer not available');
        }
      } catch (error) {
        setError('Error fetching trailer');
      }
    };

    fetchTrailer();
  }, [movieId, API_KEY]);

  return (
    <div>
      {error && <div>{error}</div>}
      {trailer && (
        <div>
          <h2>Trailer</h2>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Trailercuy;
