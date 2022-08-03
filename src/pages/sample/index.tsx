import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <div className='p-20'></div>
      {/* main */}
      <main className='relative overflow-hidden'>
        {/* menu */}
        <div className='fixed w-full px-5'>
          <div className='flex items-center'>
            <div className='w-1/2'>
              <Image src='/logo_small.svg' width={54} height={52} alt='My avatar' />
            </div>
            <div className='w-1/2 text-right'>
              <span className='overflow-hidden relative inline-block h-8'>
                <span className='relative block'>
                  <a href='#' className='block'>
                    <Image src='/icon/hamburger.svg' width={18} height={31}></Image>
                  </a>
                  <a href='#' className='block'>
                    <Image src='/icon/close.svg' width={18} height={24}></Image>
                  </a>
                </span>
              </span>
            </div>
          </div>
        </div>

        <section className="mt-60 pb-large relative before:content-[''] before:bg-[url('/bg/wave.png')] before:bg-top before:bg-no-repeat before:bg-cover before:w-full before:h-2/5 before:absolute before:opacity-5">
          <div className='flex px-20'>
            <div className='w-1/2'>
              <h1 className='text-4xl'>
                Sakari <span className='text-gray-400'>Gin</span>
              </h1>
              <p className='text-4xl italic font-light text-gray-400 mb-5'>
                The Japanese Craft Gin with a Sake Soul
              </p>
              <div className='pl-10'>
                <p className='mb-5'>A new premium gin rises from the land of sake.</p>
                <p className='mb-5'>
                  Distilling 130 years of brewing tradition, Sakari Gin brings together the
                  distinctive flavor of sake and the aromas of selected Japanese botanicals, for a
                  perfect tasting experience in a 700ml bottle.
                </p>
                <p className='text-gray-400'>
                  Sakari Gin is naturally vegetarian, gluten-free and preservatives-free. With a 41%
                  alc. content, it can be enjoyed pure or mixed in cocktails.
                </p>
              </div>
            </div>
            <div className='w-1/2 text-right'>
              <span className='text-sm writing-lr text-upright'>SHUKUGAWA</span>
            </div>
          </div>
          <div className="absolute w-full h-40 bg-[url('/bg/wave1.svg')] bg-no-repeat bg-cover "></div>
        </section>
        <section className='mt-60 pb-large relative bg-gray-200'>
          <div className='flex px-20'>
            <div className='w-1/2'>
              <h1 className='text-4xl'>Our secrets to a sake-inspired gin</h1>
              <p className='text-4xl italic font-light text-gray-400 mb-5'>
                The Japanese Craft Gin with a Sake Soul
              </p>
              <div className='pl-10'>
                <p>
                  How do you bring the rich flavors and aromas of sake to the world of gin? With two
                  special ingredients that come from the long tradition and practice of sake
                  brewing.
                </p>
              </div>
            </div>
            <div className='w-1/2 text-right'>
              <span className='text-sm writing-lr text-upright'>SHUKUGAWA</span>
            </div>
          </div>
          <div className="absolute w-full h-40 bg-[url('/bg/wave1.svg')] bg-no-repeat bg-cover "></div>
        </section>
      </main>
    </>
  );
};

export default Home;
