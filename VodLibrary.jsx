// frontend/src/pages/VodLibrary.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VodLibrary = () => {
  const [vods, setVods] = useState([]);

  useEffect(() => {
    const fetchVods = async () => {
      try {
        const response = await axios.get('/api/vod');
        setVods(response.data);
      } catch (error) {
        console.error('Error fetching VODs', error);
      }
    };
    fetchVods();
  }, []);

  return (
    <div>
      <h1>VOD Library</h1>
      <div className="vod-list">
        {vods.map((vod) => (
          <div key={vod._id} className="vod-card">
            <img src={vod.thumbnailUrl} alt={vod.title} />
            <h3>{vod.title}</h3>
            <p>{vod.description}</p>
            <a href={`/vod/${vod._id}`}>Watch</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VodLibrary;
