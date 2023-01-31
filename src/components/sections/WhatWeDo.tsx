// Components
import Link from '../navigation/Link'
import Showcase from '../data-display/Showcase'
// Types
import { ShowcaseProps } from '../../types/data-display'
// Styles
import styles from '../../styles/sections/WhatWeDo.module.css'

/** Organization services configuration */
const servicesConfig: ShowcaseProps[] = [
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

/**
 * This section specifies what organization does
 * @returns WhatWeDo section component
 */
const WhatWeDo = () => {
  return (
    <section id='whatwedo' className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>
          Lo Que Hacemos
        </h2>
        <div className={styles.description}>
          Creemos que los mejores resultados son logrados cuando la ejecución
          del branding y el marketing empujan a la misma dirección
        </div>
        <Link href='about'>
          Conocenos
        </Link>
      </div>
      <div className={styles.showcase}>
        {servicesConfig.map((service, key) => (
          <Showcase
            heading={service.heading}
            descriptions={service.descriptions}
            image={service.image}
            action
            reverse={key % 2 !== 0}
            key={key}
          />
        ))}
      </div>

    </section>
  )
}

export default WhatWeDo
