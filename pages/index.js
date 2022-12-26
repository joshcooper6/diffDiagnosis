import { useEffect } from 'react';
import { test } from '../testDB';
import FormCarousel from '../comps/FormCarousel';

export default function Home({x}) {

  useEffect(() => {
    console.log(Object.keys(x))
    console.log(Object.values(x))
  }, []);

  return (
    <div className='min-w-screen min-h-screen flex flex-col justify-center items-center'>
      {/* <p className='text-4xl font-thin'>Hello!</p> */}
      <FormCarousel />
    </div>
  )
}

export async function getServerSideProps() {
  const x = await test;

  return {
    props: {
      x,
    },
  };
};