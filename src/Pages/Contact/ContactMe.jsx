import React from 'react'
import './ContactMe.css'
import ContactInfoCard from '../../components/ContactMe/ContactInfoCard/ContactInfoCard'
// import Facbook from '../../assets/images/fb.png'
import  Email  from '../../assets/images/email.png'
import Linkedin from '../../assets/images/linkedin.png'
import ContactForm from '../../components/ContactMe/ContactForm/ContactForm'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer/Footer'
const ContactMe = () => {
  return (
    <>
    <div > 
      <Navbar />
    <section className='contact-container' id='contact' >
        <h5 className='heading'>Contact</h5>
        <div className="contact-content">
            <div style={{flex:1}}>
                <ContactInfoCard
                iconUrl={Email }
                text="dahriwaqar786@gmail.com"
                />
                <ContactInfoCard
                iconUrl={Linkedin }
                text="linkedin.com/in/abdulwaqardahri"
                />
            </div>
            <div style={{flex:1}}>
                <ContactForm />
            </div>
            
        </div>

    </section>
    <Footer/>
    </div>
    </>
  )
}

export default ContactMe