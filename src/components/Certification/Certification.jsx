import React from 'react'
import './Certification.css'
import CIT from '../../assets/images/CIT.jpeg'
import Tailwind from '../../assets/images/tailwind.jpeg'
import { motion } from "framer-motion"

const Certification = () => {
  
  return (
    <section className='certification-conttainer'>
        <h1>Certification</h1>
        <motion.div layout />
  
        <div className="certificates">
            <img src={CIT} alt="cit" />
            <img src={Tailwind} alt="tailwind"/>
        </div>
        
    </section>
  )
}

export default Certification