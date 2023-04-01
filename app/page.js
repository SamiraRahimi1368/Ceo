import Hero from "@/Components/Index/Hero"
import AboutUs from '@/Components/Index/AboutUs'
import Services from "@/Components/Index/Services"
import Features from "@/Components/Index/Features"

export default async function Home(props) {
  const responseHero = await fetch('https://api.sceo.itcodes.ca/page/data?key=home')
  const dataHero = await responseHero.json()
  const { key: heroKey, ...hero } = dataHero.sections.find(i => i.key === 'hero')
  

  const responseAbout = await fetch('https://api.sceo.itcodes.ca/page/data?key=home')
  const dataAbout = await responseAbout.json()
  const { key: aboutKey, ...about } = dataAbout.sections.find(i => i.key === 'about')


  const responseServices = await fetch('https://api.sceo.itcodes.ca/page/data?key=home')
  const dataServices = await responseServices.json()
  const { key: ServicesKey, ...services } = dataServices.sections.find(i => i.key === 'services')


  return (
    <div>
      <Hero {...hero} />
      {/* <AboutUs {...about} /> */}
      <Features />
      <Services {...services}/>
    </div>
  )
}
