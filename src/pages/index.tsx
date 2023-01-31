// Components
import About from '../components/sections/About'
import Footer from '../components/sections/Footer'
import HomeLayout from '../components/layout/HomeLayout'
import CallToAction from '../components/navigation/CallToAction'
import Link from '../components/navigation/Link'
import Image from 'next/image'
// Types
import { AboutProps } from '../types/sections'

/** About section configuration */
const aboutConfig: AboutProps = {
  heading: 'Lo Que Hacemos',
  description: 'Creemos que los mejores resultados son logrados cuando la ejecución del branding y el marketing empujan a la misma dirección',
  showcases: [
    {
      heading: 'Marketing',
      descriptions: ['Impulsamos a las marcas a la dirección adecuada. Creamos lazos de alianza con negocios que buscan crecimiento. Los que buscan un cambio para progresar. Ayudamos a recuperar atención en los medios, lograr sus metas y asegurar un crecimiento exponencial. Y solo es el comienzo..'],
      image: 'marketing'
    },
    {
      heading: 'Branding',
      descriptions: ['Construimos marcas sobresalientes, creamos el ADN de marca y desarrollamos sistemas funcionales de comunicación visual. Le damos forma al carácter de tu marca, una imagen atractiva y una identidad única. Ademas, renovamos marcas existentes.'],
      image: 'branding'
    },
    {
      heading: 'Development',
      descriptions: ['Creemos que una página web le da cuerpo a la identidad de tu marca. Es por eso que desarrollamos sistemas responsivos con un propósito mas grande que solo informar. Buscamos crear sitios web que sean reactivos al cambio, generen una experiencia positiva y mueva tus emociones.'],
      image: 'development'
    },
    {
      heading: 'Design',
      descriptions: ['No es tan simple con solo tener un logo. Para ser distinguido, es necesario establecer algunos parámetros que se usen siempre, un concepto de diseño. Definimos elementos visuales, colores y tipografía. Creamos presentaciones visuales únicas y consistentes para marcas sobresalientes.'],
      image: 'design'
    }
  ]
}

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
                <span className='font-cairo-medium text-xl mdtext-2xl text-emah-gray/50'>
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
        <div className='mt-36'>
          <About {...aboutConfig} />
        </div>
      </main>
      <Footer />
    </HomeLayout>
  )
}

export default HomePage
