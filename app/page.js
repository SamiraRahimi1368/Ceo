import Hero from "@/Components/Index/Hero"
import AboutUs from '@/Components/Index/AboutUs'
import Services from "@/Components/Index/Services"
import Features from "@/Components/Index/Features"
import Customers from "@/Components/Index/Customers"
import Seo from "@/Components/Index/Seo"
import Statistics from "@/Components/Index/Statistics"
// import Testimonials from "@/Components/Index/Testimonials"

export default async function Home(props) {

  const response = await fetch('https://api.sceo.itcodes.ca/page/data?key=home', { cache: 'no-store' })

  const data = await response.json()

  const { key: heroKey, ...hero } = data.sections.find(i => i.key === 'hero')
  const { key: aboutKey, ...about } = data.sections.find(i => i.key === 'about')
  const { key: servicesKey, ...services } = data.sections.find(i => i.key === 'services')
  const { key: featuresKey, ...features } = data.sections.find(i => i.key === 'features')
  const { key: seoKey, ...seo } = data.sections.find(i => i.key === 'seo')

 //const { key: customersKey, ...customers } = data.sections.find(i => i.key === 'customers')

  return (
    <div>
      <Hero {...hero} />
      <AboutUs {...about} />
      <Features {...features} />
      <Services {...services} />
      {/* {<Customers {...customers}/>} */}
      <Seo {...seo} />
      <Statistics/>
      {/* <Testimonials/> */}
    </div>
  )
}
