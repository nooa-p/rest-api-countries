"use client";
import { GetData } from '../fetcher';
import { useState } from 'react'
import { Switcher } from "../switcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Page({ params }: { params: { cca3: string } }) {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [filtered, setFiltered] = useState<any>();

  if(loading) {
    GetData().then((data) => {
    setData(data);
    setLoading(false);
    setFiltered(data.filter((el) => el.cca3.includes(params.cca3)))
    })
  }

  if(loading) {
    return (
      <>
      <header className="w-full flex bg-white dark:bg-[#2B3945] text-[#111517] dark:text-white p-5 justify-between shadow-md">
        <h1 className="font-extrabold text-xl ml-2 md:ml-16">
          Where in the world?
        </h1>
        <Switcher />
      </header>
      <main className="mx-2 md:mx-16 p-5 text-sm text-[#111517] dark:text-white">
        Loading...
      </main>
      </>
    )
  }

  function NativeNames() {
    if(!loading) {
    const temporary = Object.keys(filtered[0].name.nativeName);
    if (temporary.length > 1) {
      return Object.values(filtered[0].name.nativeName).map((name, index) => {
        return (
          <span key={index} className="font-light">
            {(index ? ", " : "") +
              Object.values(filtered[0].name.nativeName)[index]['common']}
          </span>
        );
      });
    } else {
      return (
        <span className="font-light">
          {Object.values(filtered[0].name.nativeName)[0]['common']}
        </span>
      );
    }
  }
  }

  function Currencies() {
    if(!loading) {
    const temporary2 = Object.keys(filtered[0].currencies);
    if (temporary2.length > 1) {
      return Object.values(filtered[0].currencies).map((name, index) => {
        return (
          <span key={index} className="font-light">
            {(index ? ", " : "") +
              Object.values(filtered[0].currencies)[index]['name']}
          </span>
        );
      });
    } else {
      return (
        <span className="font-light">
          {Object.values(filtered[0].currencies)[0]['name']}
        </span>
      );
    }
  }
  }

  function Languages() {
    if(!loading) {
    const temporary3 = Object.keys(filtered[0].languages);
    const one: any = Object.values(filtered[0].languages)[0]
    if (temporary3.length > 1) {
      return Object.values(filtered[0].languages).map((name, index) => {
        return (
          <span key={index} className="font-light">
            {(index ? ", " : "") + Object.values(filtered[0].languages)[index]}
          </span>
        );
      });
    } else {
      return (
        <span className="font-light">
          {one}
        </span>
      );
    }
  }
  }

  function Neighbours() {
    if(!loading) {
    if (filtered[0].borders !== undefined) {
      const borders = data.filter(
        (country) => (Object.values(filtered[0].borders)).some(value => country.cca3.includes(value))
      )
      const value: any = Object.values(filtered[0].borders)
      const temporary4 = Object.keys(filtered[0].borders);
      if (temporary4.length > 1) {
        return Object.values(filtered[0].borders).map((name, index) => {
          return (
            <Link key={index} href={Object.values(filtered[0].borders)[index]} className="inline-block bg-white dark:bg-[#2B3945] px-5 py-1 mr-3 shadow-lg mt-3">
              {borders[index].name.common}
            </Link>
          );
        });
      } else {
        return (
          <Link href={Object.values(filtered[0].borders)[0]} className="inline-block bg-white dark:bg-[#2B3945] px-5 py-1 mr-3 shadow-lg mt-3">
            {borders[0].name.common}
          </Link>
        );
      }
    } else {
      return <span className="font-light">None</span>;
    }
  }
  }

  return (
    <>
      <header className="w-full flex bg-white dark:bg-[#2B3945] text-[#111517] dark:text-white p-5 justify-between shadow-md">
        <h1 className="font-extrabold text-xl ml-2 md:ml-16">
          Where in the world?
        </h1>
        <Switcher />
      </header>
      <main className="mx-2 md:mx-16 p-5 text-sm text-[#111517] dark:text-white">
        <div className="mt-10">
          <FontAwesomeIcon icon={faArrowLeft} className="relative z-10 ml-8" />
          <Link href="/" className="block-inline bg-white dark:bg-[#2B3945] text-[#111517] dark:text-white py-[8px] pl-[50px] pr-10 relative z-0 -ml-[45px] rounded shadow-md">Back</Link>
        </div>
        <div className="flex flex-col md:flex-row mt-20 gap-x-20 items-start md:items-center">
          <div className="md:basis-1/2">
            <img src={filtered[0].flags.svg} alt="" />
          </div>
          <div className="md:basis-1/2">
            <h1 className="text-2xl font-extrabold mb-6 mt-10 md:mt-0">{filtered[0].name.common}</h1>
            <div className="flex flex-col md:flex-row gap-3 md:justify-between">
              <ul>
                <li>
                  <span className="font-semibold inline-block mb-2">Native Names:</span>{" "}
                  <NativeNames />
                </li>
                <li>
                  <span className="font-semibold inline-block mb-2">Population:</span>{" "}
                  <span className="font-light">
                    {filtered[0].population
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                </li>
                <li>
                  <span className="font-semibold inline-block mb-2">Region:</span>{" "}
                  <span className="font-light">{filtered[0].region}</span>
                </li>
                <li>
                  <span className="font-semibold inline-block mb-2">Sub Region:</span>{" "}
                  <span className="font-light">{filtered[0].subregion}</span>
                </li>
                <li>
                  <span className="font-semibold inline-block mb-2">Capital:</span>{" "}
                  <span className="font-light">{filtered[0].capital}</span>
                </li>
              </ul>
              <ul>
                <li>
                  <span className="font-semibold inline-block mb-2">Top Level Domain:</span>{" "}
                  <span className="font-light">{filtered[0].tld}</span>
                </li>
                <li>
                  <span className="font-semibold inline-block mb-2">Currencies:</span>{" "}
                  <Currencies />
                </li>
                <li>
                  <span className="font-semibold inline-block mb-2">Languages:</span>{" "}
                  <Languages />
                </li>
              </ul>
            </div>
            <div className="mt-7">
              <span className="font-semibold block md:inline-block md:mr-3 mt-3">Border Countries:</span>{" "}
              <Neighbours />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Page;
