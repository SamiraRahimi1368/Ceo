import Hero from "@/Components/Index/Hero"
import AboutUs from '@/Components/Index/AboutUs'
import Services from "@/Components/Index/Services"
import Features from "@/Components/Index/Features"

export default async function Home(props) {

  const response = await fetch('https://api.sceo.itcodes.ca/page/data?key=home')
  const data = await response.json()
  const { key: heroKey, ...hero } = data.sections.find(i => i.key === 'hero')
  const { key: aboutKey, ...about } = data.sections.find(i => i.key === 'about')
  const { key: servicesKey, ...services } = data.sections.find(i => i.key === 'services')
  const { key: featuresKey, ...features } = data.sections.find(i => i.key === 'features')

  return (
    <div>
      <Hero {...hero} />
      <AboutUs {...about} />
      <Features {...features}/>
      <Services {...services} />
    </div>
  )
}
