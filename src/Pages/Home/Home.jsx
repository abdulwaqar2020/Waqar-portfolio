import React from 'react'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar'
import Skills from '../../components/Skills/Skills'
import WorkExperience from '../../components/WorkExperience/WorkExperience'
import ContactMe from '../../components/ContactMe/ContactMe'
import Footer from '../../components/Footer/Footer'
import Certification from '../../components/Certification/Certification'
import Education from '../../components/Education/Education'



const Home = () => {
  return (
    <>
     <Navbar />
    <div className='container'>
    <Hero />
    <Education />
    <Skills />
    <WorkExperience />
    <Certification/>
    <ContactMe />
    
    <Footer />
    </div>

    </>
  )
}

export default Home