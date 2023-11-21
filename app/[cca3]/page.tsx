"use client";
import { Switcher } from "../switcher";
// fetching from local file
import data from "../../json/all.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Page({ params }: { params: { cca3: string } }) {
  const filtered = data.filter((el) => el.cca3.includes(params.cca3));

  function NativeNames() {
    const temporary = Object.keys(filtered[0].name.nativeName);
    if (temporary.length > 1) {
      return Object.values(filtered[0].name.nativeName).map((name, index) => {
        return (
          <span key={index} className="font-light">
            {(index ? ", " : "") +
              Object.values(filtered[0].name.nativeName)[index].common}
          </span>
        );
      });
    } else {
      return (
        <span className="font-light">
          {Object.values(filtered[0].name.nativeName)[0].common}
        </span>
      );
    }
  }

  function Currencies() {
    const temporary2 = Object.keys(filtered[0].currencies);
    if (temporary2.length > 1) {
      return Object.values(filtered[0].currencies).map((name, index) => {
        return (
          <span key={index} className="font-light">
            {(index ? ", " : "") +
              Object.values(filtered[0].currencies)[index].name}
          </span>
        );
      });
    } else {
      return (
        <span className="font-light">
          {Object.values(filtered[0].currencies)[0].name}
        </span>
      );
    }
  }

  function Languages() {
    const temporary3 = Object.keys(filtered[0].languages);
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
          {Object.values(filtered[0].languages)[0]}
        </span>
      );
    }
  }

  function Neighbours() {
    if (filtered[0].borders) {
      const temporary4 = Object.keys(filtered[0].borders);
      if (temporary4.length > 1) {
        return Object.values(filtered[0].borders).map((name, index) => {
          return (
            <Link key={index} href={Object.values(filtered[0].borders)[index]}>
              {Object.values(filtered[0].borders)[index]}
            </Link>
          );
        });
      } else {
        return (
          <Link href={Object.values(filtered[0].borders)[0]}>
            {Object.values(filtered[0].borders)[0]}
          </Link>
        );
      }
    } else {
      return <span className="font-light">None</span>;
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
        <div className="flex flex-col md:flex-row mt-20">
          <div className="md:basis-1/2">
            <img src={filtered[0].flags.svg} alt="" />
          </div>
          <div className="md:basis-1/2">
            <h1>{filtered[0].name.common}</h1>
            <div className="flex flex-col md:flex-row">
              <ul>
                <li>
                  <span className="font-semibold">Native Names:</span>{" "}
                  <NativeNames />
                </li>
                <li>
                  <span className="font-semibold">Population:</span>{" "}
                  <span className="font-light">
                    {filtered[0].population
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                </li>
                <li>
                  <span className="font-semibold">Region:</span>{" "}
                  <span className="font-light">{filtered[0].region}</span>
                </li>
                <li>
                  <span className="font-semibold">Sub Region:</span>{" "}
                  <span className="font-light">{filtered[0].subregion}</span>
                </li>
                <li>
                  <span className="font-semibold">Capital:</span>{" "}
                  <span className="font-light">{filtered[0].capital}</span>
                </li>
              </ul>
              <ul>
                <li>
                  <span className="font-semibold">Top Level Domain:</span>{" "}
                  <span className="font-light">{filtered[0].tld}</span>
                </li>
                <li>
                  <span className="font-semibold">Currencies:</span>{" "}
                  <Currencies />
                </li>
                <li>
                  <span className="font-semibold">Languages:</span>{" "}
                  <Languages />
                </li>
              </ul>
            </div>
            <div>
              <span className="font-semibold">Border Countries:</span>{" "}
              <Neighbours />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Page;
