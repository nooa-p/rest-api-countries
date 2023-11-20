'use client'
import { Switcher } from "../switcher";
// fetching from local file
import data from "../../json/all.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

export default function Page({ params }: { params : { cca3: string }}) {
    return <div>Test: {params.cca3}</div>
}