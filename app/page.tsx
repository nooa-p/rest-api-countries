'use client';
// import { useState, useEffect } from 'react';
import { Switcher } from './switcher';
import data from '../json/all.json';

const Home = () => {
  // const [data, setData] = useState(null);
  // const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch('https://restcountries.com/v3.1/all')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     })
  // }, []);

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
      <p>{data[0].region}</p>
    </main>
    </>
  );
} 

export default Home;