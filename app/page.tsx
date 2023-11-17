'use client';
// import { useState, useEffect } from 'react';
import { Switcher } from './switcher';
// fetching from local file
import data from '../json/all.json';

const Home = () => {
  // fetching from api
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

  // const keys = Object.keys(data);
  // console.log(keys);
  // keys.forEach((key) => {
  //   console.log(data[key]);
  // });

  return (
    <>
    <header className='w-full flex bg-white dark:bg-[#2B3945] text-[#111517] dark:text-white p-5 justify-between'>
      <h1 className='font-extrabold text-xl ml-2 md:ml-16'>
        Where in the world?
      </h1>
      <Switcher />
    </header>
    <main className='mx-2 md:mx-16 p-5'>
      <div>
        <form action="">
          <input type="text" name="" id="" placeholder='Search for a country...'/>
          <select name="" id="">
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </form>
      </div>
      <div className='flex md:flex-wrap justify-center md:justify-between flex-col md:flex-row mx-auto flex-none basis-full md:basis-72 items-center mt-10 gap-y-5'>
        {Object.keys(data).map(key => {
          return (
            <div key={key} className=''>
              <div className='w-72'>
                <img src={data[key].flags.png} className="rounded-t" />
              </div>
              <div className='bg-white dark:bg-[#2B3945] w-72 rounded-b'>
                <h2>{data[key].name.common}</h2>
                <span>Population:</span> {data[key].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<br />
                <span>Region:</span> {data[key].region}<br />
                <span>Capital:</span> {data[key].capital}<br />
              </div>
            </div>
          )})}
      </div>
    </main>
    </>
  )
} 

export default Home;