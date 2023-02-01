// Components
import About from '../components/sections/About'
import SmoothLayout from '../components/layout/SmoothLayout'
import Footer from '../components/sections/Footer'
import Hero from '../components/sections/Hero'
// Types
import { AboutProps } from '../types/sections'

/** About section configuration */
const aboutConfig: AboutProps = {
  action: true,
  showcases: [
    {
      heading: 'Marketing',
      descriptions: [
        'Análisis y estrategia',
        'Campañas eficientes y creativas (Inbound & outbound marketing)',
        'Marketing de contenidos',
        'Social & influencer marketing',
        'Performance marketing (SEO, SEM, SEA, PPC, Email marketing)'
      ],
      image: 'marketing'
    },
    {
      heading: 'Branding',
      descriptions: [
        'Naming',
        'Diseño de logo',
        'Identidad visual',
        'Identidad de marca',
        'Diseño de producto y empaque',
        'Brand culture',
        'Consultoría y capacitación'
      ],
      image: 'branding'
    },
    {
      heading: 'Development',
      descriptions: [
        'Front-end development',
        'Back-end development',
        'Mobile apps',
        'Landing page',
        'Consultoria y asesoria'
      ],
      image: 'development'
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
      <main className='pt-44'>
        <Hero label='Servicios' text='md'>
          Creemos que los mejores resultados son logrados cuando la ejecución
          del branding y el marketing empujan a la misma dirección
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
