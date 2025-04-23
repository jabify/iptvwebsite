// frontend/src/pages/VodPlayer.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const VodPlayer = () => {
  const { id } = useParams();
  const [vod, setVod] = useState(null);

  useEffect(() => {
    const fetchVod = async () => {
      try {
        const response = await axios.get(`/api/vod/${id}`);
        setVod(response.data);
      } catch (error) {
        console.error('Error fetching VOD', error);
      }
    };
    fetchVod();
  }, [id]);

  if (!vod) return <div>Loading...</div>;

  return (
    <div>
      <h1>{vod.title}</h1>
      <video controls width="100%">
        <source src={vod.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VodPlayer;
