// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [newsFeed, setNewsFeed] = useState([]);

  useEffect(() => {
    // Fetch news feed from the server
    axios.get('/api/hackathons') // Adjust API endpoint as needed
      .then(response => {
        setNewsFeed(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>News Feed</h2>
      {newsFeed.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
