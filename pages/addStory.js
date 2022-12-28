import { useEffect } from 'react';
import { test } from '../testDB';
import FormCarousel from '../comps/FormCarousel';
import Header from '../comps/Header';

export default function addStory({x}) {

  useEffect(() => {
    console.log(Object.keys(x))
    console.log(Object.values(x))
  }, []);

  return (
    <div className='min-w-screen flex flex-col justify-center items-center'>
      {/* <p className='text-4xl font-thin'>Hello!</p> */}
      <Header />
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