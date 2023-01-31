// Components
import Footer from '../components/pages/Footer'
import HomeLayout from '../components/layout/HomeLayout'
import WhatWeDo from '../components/pages/WhatWeDo'
import CallToAction from '../components/navigation/CallToAction'
import Link from '../components/navigation/Link'
import Image from 'next/image'

/**
 * The main page of the application
 * @returns HomePage component
 */
const HomePage = () => {
  return (
    <HomeLayout>
      <main>
        <section>
          <div className='h-auto md:h-3xl max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-x-5'>
            <div className='w-full md:w-[55%] h-full flex flex-col justify-center gap-y-12'>
              <div className='space-y-6 text-center md:text-left'>
                <span className='font-cairo-medium text-2xl text-emah-gray/50'>
                  Endless Posibilities
                </span>
                <header>
                  <h1>
                    <span className='text-emah-blue'>Hacemos</span> marketing estratégico
                  </h1>
                </header>
                <p className='text-xl text-emah-gray'>
                  Desarollamos apps, websites y branding. Impulsamos empresas con visión
                  a fin de crear un legado de progreso y verdad.
                </p>
              </div>
              <div className='flex justify-center md:justify-start items-center gap-6'>
                <CallToAction theme='dark' large />
                <div className='hidden md:block'>
                  <Link href='/about'>
                    Conocenos
                  </Link>
                </div>
              </div>
            </div>
            <div className='my-16 md:my-0 px-16 md:px-0 w-full md:w-[45%] grid place-content-center'>
              <Image
                alt='emah marketing solutions'
                src='/images/sections/hero/home.png'
                width={640}
                height={640}
                className='overflow-hidden rounded-full'
              />
            </div>
          </div>
        </section>
        <WhatWeDo />
      </main>
      <Footer />
    </HomeLayout>
  )
}

export default HomePage
