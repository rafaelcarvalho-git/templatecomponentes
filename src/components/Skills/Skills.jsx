import './Skills.css'
import React, { useState } from 'react'
import dev from '../../assets/dev2.svg'
import hard from '../../assets/hard.png'
import sec from '../../assets/sec.png'

var skills = [
  { id: 1, skill_name: "HTML", skill_icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", skill_progress: "progress-bar bg-info skill_progress_95" },
  { id: 2, skill_name: "CSS", skill_icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", skill_progress: "progress-bar bg-info skill_progress_85" },
  { id: 3, skill_name: "JAVASCRIPT", skill_icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", skill_progress: "progress-bar bg-info skill_progress_55" },
  { id: 4, skill_name: "BOOTSTRAP", skill_icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", skill_progress: "progress-bar bg-info skill_progress_90" },
  { id: 5, skill_name: "REACT JS", skill_icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", skill_progress: "progress-bar bg-info skill_progress_50" },
  { id: 6, skill_name: "ADOBE PHOTOSHOP", skill_icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg", skill_progress: "progress-bar bg-info skill_progress_60" },
  { id: 7, skill_name: "FIGMA", skill_icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", skill_progress: "progress-bar bg-info skill_progress_45" },
  { id: 8, skill_name: "CANVA", skill_icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", skill_progress: "progress-bar bg-info skill_progress_40" },
  { id: 9, skill_name: "PHP", skill_icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", skill_progress: "progress-bar bg-info skill_progress_50" },
  { id: 10, skill_name: "JAVA", skill_icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", skill_progress: "progress-bar bg-info skill_progress_45" },
  { id: 11, skill_name: "PYTHON", skill_icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", skill_progress: "progress-bar bg-info skill_progress_50" },
  { id: 12, skill_name: "MYSQL - PHPMYADMIN", skill_icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", skill_progress: "progress-bar bg-info skill_progress_70" },
  { id: 13, skill_name: "HARDWARE", skill_icon: hard, skill_progress: "progress-bar bg-info skill_progress_95" },
  { id: 14, skill_name: "GIT - GITHUB", skill_icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", skill_progress: "progress-bar bg-info skill_progress_70" },
  { id: 15, skill_name: "SEGURANÇA DIGITAL", skill_icon: sec, skill_progress: "progress-bar bg-info skill_progress_50" }
];

function Skills() {
  const [skillList, setSkillList] = useState([1, 2, 3, 4, 5]);
  const pageOne = document.getElementById('skillOne');
  const pageTwo = document.getElementById('skillTwo');
  const pageThree = document.getElementById('skillThree');

  function skillOne() {
    setSkillList([1, 2, 3, 4, 5])
    pageTwo.classList.remove('active');
    pageThree.classList.remove('active');
    pageOne.classList.add('active');
  }

  function skillTwo() {
    setSkillList([6, 7, 8, 9, 12])
    pageOne.classList.remove('active');
    pageThree.classList.remove('active');
    pageTwo.classList.add('active');
  }

  function skillThree() {
    setSkillList([10, 11, 13, 14, 15])
    pageOne.classList.remove('active');
    pageTwo.classList.remove('active');
    pageThree.classList.add('active');
  }

  return (
    <section id="skills" className="bg">
      <div className="container py-4">
        <h2 className="text-center fw-bold text-white">Habilidades</h2>
        <div className="row mx-auto align-items-center py-4">
          <div className="col-12 col-lg-5">
            {skills.map((skill) => {
              if (skillList.includes(skill.id)) {
                return (
                  <div key={skill.id} className="mb-3">
                    <img className="skill-icon ms-2 me-2 mb-2" src={skill.skill_icon} alt="" />
                    <span className="fw-bold text-white">{skill.skill_name}</span>
                    <div className="progress my-1">
                      <div className={skill.skill_progress} role="progressbar"></div>
                    </div>
                  </div>
                )
              }
            }
            )}
            <div className="switch-skills d-flex btn-group mx-auto mt-4">
              <button id="skillOne" className="btn btn-dark active" onClick={skillOne}>1</button>
              <button id="skillTwo" className="btn btn-dark" onClick={skillTwo}>2</button>
              <button id="skillThree" className="btn btn-dark" onClick={skillThree}>3</button>
            </div>
          </div>
          <div className="skills-dev-image col-12 col-lg-7">
            <img src={dev} className="d-flex ms-auto dev-image img-fluid" loading="lazy" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;