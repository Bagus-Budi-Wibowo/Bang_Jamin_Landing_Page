import ContactMe from "./components/contact-me";
import Faq from "./components/faq";
import GetNow from "./components/get-now";
import Hero from "./components/hero";
import JoinNow from "./components/join-now";
import Testimonial from "./components/testimonial";
import WhyChoose from "./components/why-choose";

const HomePage = () => {
  return (
    <main className="flex flex-col">
      <Hero />
      <WhyChoose />
      <Testimonial />
      <JoinNow />
      <Faq />
      <ContactMe />
      <GetNow />
    </main>
  )
}

export default HomePage;