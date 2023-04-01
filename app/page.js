import Hero from "@/Components/Index/Hero"
import AboutUs from '@/Components/Index/AboutUs'
import Services from "@/Components/Index/Services"

export default async function Home(props) {
  const responseHero = await fetch('https://api.sceo.itcodes.ca/page/data?key=home')
  const dataHero = await responseHero.json()
  const { key: heroKey, ...hero } = dataHero.sections.find(i => i.key === 'hero')
  

  const responseAbout = await fetch('https://api.sceo.itcodes.ca/page/data?key=home')
  const dataAbout = await responseAbout.json()
  const { key: aboutKey, ...about } = dataAbout.sections.find(i => i.key === 'about')

  return (
    <div>
      <Hero {...hero} />
      {/* <AboutUs {...about} /> */}
      <Services />
    </div>
  )
}
