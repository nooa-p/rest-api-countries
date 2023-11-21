'use client'
import { Switcher } from "../switcher";
// fetching from local file
import data from "../../json/all.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

export default function Page({ params }: { params : { cca3: string }}) {
    const filtered = data.filter((el) => el.cca3.includes(params.cca3));
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
            <FontAwesomeIcon icon={faArrowLeft} />
            <Link href='/'>Back</Link>
        </div>
        <div className="flex flex-col md:flex-row">
            <div className="md:basis-1/2">
                <img src={filtered[0].flags.svg} alt="" />
            </div>
            <div className="md:basis-1/2">
                <h1>{filtered[0].name.common}</h1>
                <div className="flex flex-col md:flex-row">
                    <ul>
                        <li><span className="font-semibold">Native Name:</span> <span className="font-light"></span></li>
                        <li><span className="font-semibold">Population:</span> <span className="font-light">{filtered[0].population
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></li>
                        <li><span className="font-semibold">Region:</span> <span className="font-light">{filtered[0].region}</span></li>
                        <li><span className="font-semibold">Sub Region:</span> <span className="font-light">{filtered[0].subregion}</span></li>
                        <li><span className="font-semibold">Capital:</span> <span className="font-light">{filtered[0].capital}</span></li>
                    </ul>
                    <ul>
                    <li><span className="font-semibold">Top Level Domain:</span> <span className="font-light">{filtered[0].tld}</span></li>
                    <li><span className="font-semibold">Currencies:</span> <span className="font-light"></span></li>
                    <li><span className="font-semibold">Languages:</span> <span className="font-light"></span></li>
                    </ul>
                </div>
                <div>
                <span className="font-semibold">Border Countries:</span>
                </div>
            </div>
        </div>
        </main>
        </>
    )
}