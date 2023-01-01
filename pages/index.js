import { useEffect } from 'react';
import { test } from '../testDB';
import FormCarousel from '../comps/FormCarousel';
import Link from 'next/link';
import Header from '../comps/Header';

export default function Home({x}) {

  return (
    <div className='min-w-screen min-h-screen flex flex-col'>
      <Header />
    </div>
  )
};