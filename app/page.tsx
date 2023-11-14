'use client';
import { useState, useEffect } from 'react';
import { Switcher } from './switcher';

const Home = () => {
/*   const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
  }, []); */

// if(isLoading) return <p>Loading...</p>

  return (
    <>
    <header>
      <h1>Where in the world?</h1>
      <Switcher />
    </header>
    <main>
      
    </main>
    </>
  );
} 

export default Home;