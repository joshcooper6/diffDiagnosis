import { useEffect } from 'react';
import { test } from '../testDB';
import FormCarousel from '../comps/FormCarousel';
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {

  const links = [
    {
        label: 'Home',
        route: '/'
    },
    {
      label: 'Add New Story',
      route: '/addStory'
    },
    {
        label: 'Sample Story',
        route: '/sampleStory'
      },
  ]

  return (
    <div className='flex text-center w-screen border-b-[.1px] mb-4 p-4 justify-center items-center'>
    <div className={`w-11/12 flex justify-between self-center items-center`}>
      {/* <p className='text-4xl font-thin'>Differential Diagnosis</p> */}
      <Logo topic={'Hematology'} />
      <div className='flex flex-col md:flex-row gap-2 mt-2 transition_ease'>
        {links.map(link => {return <Link key={link.label} className='font-thin transition_ease hover:font-bold tracking-widest text-xs uppercase' href={link.route} children={link.label} />})}
      </div>
      </div>
    </div>
  )
}