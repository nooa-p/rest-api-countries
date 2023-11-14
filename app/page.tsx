'use client';
import { useState, useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
  }, []);

  if(isLoading) return <p>Loading...</p>

  return (
    <img src={data[2].flags.png} alt={data[2].flags.alt} />
  );
} 

export default Home;