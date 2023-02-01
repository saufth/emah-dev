// Components
import About from '../components/sections/About'
import SmoothLayout from '../components/layout/SmoothLayout'
import Footer from '../components/sections/Footer'
import Hero from '../components/sections/Hero'
// Types
import { AboutProps } from '../types/sections'

/** About section configuration */
const aboutConfig: AboutProps = {
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
 * Services page
 * @returns ServicesPage component
 */
const ServicesPage = () => {
  return (
    <SmoothLayout>
      <main>
        <Hero label='Servicios' text='md' height>
          Desarollamos apps, websites y branding en sincronía con el marketing
        </Hero>
        <div className='pb-16'>
          <About {...aboutConfig} />
        </div>
        <Footer />
      </main>
    </SmoothLayout>
  )
}

export default ServicesPage
