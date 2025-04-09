import React, { useState } from 'react'
import './Skills.css'
import { SKILLS } from '../../assets/Utils/data'
import SkillsCard from '../../components/SkillsCard/SkillsCard'
import SkillsInfoCard from '../../components/SkillsInfoCard/SkillsInfoCard'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer/Footer'

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
    const handleSelectedSkill = (data) =>{
    setSelectedSkill(data);
    };

    return (
        
        <>
        <div>
        <Navbar />
        <section className='skills-container' id='skills'>
            <h5 >Technical Proficiency</h5>

            <div className="skills-content">

                <div className="skills">
                    {SKILLS.map((item) =>(
                        <SkillsCard
                        key={item.title}
                        iconUrl={item.icon}
                        title={item.title}
                        isActive={selectedSkill.title === item.title}
                        onClick={()=>{
                            handleSelectedSkill(item);
                        }}
                        />
                    ))}
                  
                </div>

                <div className="skills-info">
                <SkillsInfoCard
                heading={selectedSkill.title}
                skills={selectedSkill.skills}
                />
                </div>
            </div>
        </section>
        <Footer />
        </div>
        </>
    )
}

export default Skills