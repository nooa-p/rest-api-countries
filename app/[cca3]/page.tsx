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
        <header className="w-full flex bg-white dark:bg-[#2B3945] text-[#111517] dark:text-white p-5 justify-between">
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
        </main>
        </>
    )
}