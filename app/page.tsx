"use client";
import { useState, useEffect } from "react";
import { Switcher } from "./switcher";
// fetching from local file
import data from "../json/all.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

const Home = () => {
  // fetching from api
  const [search, setSearch] = useState("");
  const [rFilter, setRFilter] = useState("");
  // const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch('https://restcountries.com/v3.1/all')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     })
  // }, []);

  const searchFilter = (array) => {
    if (search !== "" && rFilter !== "") {
      const temporary = array.filter(
        (el) => el.region.includes(rFilter)
      );
      return temporary.filter(
        (el) => el.name.common.toLowerCase().includes(search) 
      )
    } else if (search !== "") {
      return array.filter(
        (el) => el.name.common.toLowerCase().includes(search)
        )
    } else if (rFilter !== "") {
      return array.filter(
        (el) => el.region.includes(rFilter)
      )
    } else {
      return data;
    }
  }

  const filtered = searchFilter(data);

  // if(isLoading) return <p>Loading...</p>

  // const keys = Object.keys(data);
  // console.log(keys);
  // keys.forEach((key) => {
  //   console.log(data[key]);
  // });

  return (
    <>
      <header className="w-full flex bg-white dark:bg-[#2B3945] text-[#111517] dark:text-white p-5 justify-between shadow-md">
        <h1 className="font-extrabold text-xl ml-2 md:ml-16">
          Where in the world?
        </h1>
        <Switcher />
      </header>
      <main className="mx-2 md:mx-16 p-5 text-sm">
        <div>
          <form
            action=""
            className="flex-col md:flex-row flex justify-between gap-3 md:gap-0"
          >
            <div className="md:basis-2/3">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="z-20 relative ml-8"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Search for a country..."
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white dark:bg-[#2B3945] p-3.5 pl-20 -ml-[46px] z-0 relative w-full md:w-2/3 rounded md:max-w-[450px] placeholder:text-[#111517] placeholder:dark:text-white shadow"
              />
            </div>
            <select
              name=""
              id=""
              className="bg-white dark:bg-[#2B3945] rounded py-3.5 pl-5 pr-10 shadow"
              defaultValue=""
              onChange={(e) => setRFilter(e.target.value)}
            >
              <option value="">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </form>
        </div>
        <div className="flex md:flex-wrap justify-center md:justify-between flex-col md:flex-row mx-auto flex-none basis-full md:basis-72 items-center mt-10 gap-y-10 gap-x-2">
          {Object.keys(filtered).map((key) => {
            return (
              <div key={key} className="shadow min-h-[326px]">
                <div className="w-72 aspect-w-16 aspect-h-9">
                  <img
                    src={filtered[key].flags.png}
                    className="rounded-t object-fill"
                  />
                </div>
                <div className="bg-white dark:bg-[#2B3945] w-72 rounded-b p-5 object-cover h-[164px]">
                  <h2 className="font-bold text-base pb-4">
                    <Link href={`${filtered[key].cca3}`}>{filtered[key].name.common}</Link>
                  </h2>
                  <span className="font-semibold">Population:</span>{" "}
                  <span className="font-light">
                    {filtered[key].population
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                  <br />
                  <span className="font-semibold">Region:</span>{" "}
                  <span className="font-light">{filtered[key].region}</span>
                  <br />
                  <span className="font-semibold">Capital:</span>{" "}
                  <span className="font-light">{filtered[key].capital}</span>
                  <br />
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Home;
