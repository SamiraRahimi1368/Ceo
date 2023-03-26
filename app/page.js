import Hero from "@/Components/Index/Hero"
import AboutUs from '@/Components/Index/AboutUs'
import Test from "@/Components/Index/Test"

export default async function Home(props) {
  var response = await fetch('https://api.sceo.itcodes.ca/page/data?key=home')
  var data = await response.json()
  const { key, ...hero } = data.sections.find(i => i.key === 'hero')
  return (
    <div>
      <Hero {...hero} />
      <AboutUs />
    </div>
  )
}
