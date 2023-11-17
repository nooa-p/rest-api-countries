'use client';
import { useState, useEffect } from 'react';
import { Switcher } from './switcher';

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // fetch from api, switched to local file at least as long as developing the site
    // fetch('https://restcountries.com/v3.1/all')
    fetch('./all.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
  }, []);

// if(isLoading) return <p>Loading...</p>

  return (
    <>
    <header className='w-full flex bg-white dark:bg-[#2B3945] text-[#111517] dark:text-white p-5 justify-between'>
      <h1 className='font-extrabold text-xl ml-10'>
        Where in the world?
      </h1>
      <Switcher />
    </header>
    <main>

    </main>
    </>
  );
} 

export default Home;