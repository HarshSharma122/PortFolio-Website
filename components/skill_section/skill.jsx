import React from "react";
import './skill.css'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import javascript from '../../assets/javascript.png'
import react from '../../assets/react.png'
import bootstrap from '../../assets/bootstap.png'
import tailwind from '../../assets/tailwind.png'
import github from '../../assets/github.png'
function Skill()
{
    return(
    <div className="skill_section" id="skill">
        <div className="skill_heading">
            <h1>Skills</h1>
            <div className="skill_boxes">
                <div className="box">
                    <a href="https://en.wikipedia.org/wiki/HTML" target="_blank"><img src={html}/></a>
                </div>
                <div className="box">
                    <a href="https://en.wikipedia.org/wiki/CSS" target="_blank"><img src={css}/></a>
                </div>
                <div className="box">
                    <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank"><img src={javascript}/></a>
                </div>
                <div className="box">
                    <a href="https://en.wikipedia.org/wiki/React" target="_blank"><img src={react}/></a>
                </div>
                <div className="box">
                    <a href="https://getbootstrap.com/" target="_blank"><img src={bootstrap}/></a>
                </div>
                <div className="box">
                    <a href="https://tailwindcss.com/" target="_blank"><img src={tailwind}/></a>
                </div>
                <div className="box">
                    <a href="https://github.com/" target="_blank"><img src={github}/></a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Skill;