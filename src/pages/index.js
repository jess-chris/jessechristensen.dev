// import Image from 'next/image'
import Head from 'next/head';
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar';
import { defaultTitle, defaultLinkedIn, defaultGithub } from '@/lib/constants';
import React, { useEffect, useState } from "react";
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

/*
    className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
  >
    <h1>Home</h1>
*/


export default function Home() {

  const delay = ms => new Promise(res => setTimeout(res, ms));
  // const greeting = "Hello world..."
  const greetings = ["Hello world...", "I'm Jesse Christensen...", "I'm a software engineer...", "I'm a security enthusiast..."];
  const [randStr, setRandStr] = useState([]);
  const [randChar, setRandChar] = useState('');

  useEffect(() => {
    randomString();
  }, [])

  function getRandom(len) {

    // return Array(len).join().split(',').map(() => String.fromCharCode(Math.floor(Math.random() * (126 - 33) + 33)));
    return String.fromCharCode(Math.floor(Math.random() * (126 - 33) + 33))
  }

  async function randomString() {

    let index = 0;

    while (index < greetings.length) {

      const greeting = greetings[index];

      for (let x = 0; x < greeting.length; x++) {
    
        for (let y = 0; y < 4; y++) {
          setRandChar(getRandom());
          await delay(25);
        }
  
        setRandStr([...greeting.slice(0, x + 1)]);
      }
      setRandChar('');

      await delay(2000);

      setRandStr([]);

      index < greetings.length - 1 ? index++ : index = 0;

    }

  
  }

  return (
    <div className='container flex min-h-screen min-w-full flex-row'>
      <Head>
        <title>{defaultTitle}</title>
        <meta property='og:title' content={defaultTitle} key='title' />
      </Head>

      <Sidebar />

      <div className='main-content home-page min-h-screen min-w-full'>
      
      </div>
      
      <div className='terminal-prompt inner w-1/2 flex flex-col'>
        {/* <h1 className='text-4xl'>{randStr.join('') + randChar}</h1> */}
        <input id='randstr' className='text-4xl h-1/4' type='text' value={`> ` + randStr.join('') + randChar} readOnly={true}></input>

          <ul className='flex flex-row justify-evenly items-center h-1/4'>
            <Link href={defaultLinkedIn}>
              <li className='button'>LinkedIn</li>
            </Link>

            <Link href={defaultGithub}>
              <li className='button'>GitHub</li>
            </Link>
          </ul>

        <h3 className='absolute inset-x-0 bottom-0 mb-8'>Based out of Santa Rosa, CA</h3>
      </div>

    </div>
  )
}
