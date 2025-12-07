import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import About from '@/components/About'
import Mission from '@/components/Mission'
import GallerySection from '@/components/gallery/GallerySection'
import ContactForm from '@/components/ContactForm'
import Testimonials from '@/components/Testimonials'


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <About />
      <Mission />
      <GallerySection />
      <Testimonials />
      <ContactForm />

    </>
  )
}
