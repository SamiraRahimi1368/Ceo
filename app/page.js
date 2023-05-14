import Hero from "@/Components/Index/Hero";
import AboutUs from "@/Components/Index/AboutUs";
import Services from "@/Components/Index/Services";
import Features from "@/Components/Index/Features";
import Customers from "@/Components/Index/Customers";
import Seo from "@/Components/Index/Seo";
import Statistics from "@/Components/Index/Statistics";
import Testimonials from "@/Components/Index/Testimonials";
import useData from "@/Hooks/useData";
import Pricing from "@/Components/Index/Pricing";

export default async function Home(props) {
  const { hero, about, services, features, seo, customers, testimonials } =
    await useData("https://api.sceo.itcodes.ca/page/data?key=home");

  return (
    <div>
      <Hero {...hero} />
      <AboutUs {...about} />
      <Features {...features} />
      <Services {...services} />
      <Customers {...customers} />
      <Seo {...seo} />
      <Statistics />
      <Testimonials {...testimonials} />
    </div>
  );
}
