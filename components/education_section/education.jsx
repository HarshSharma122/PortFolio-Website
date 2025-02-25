import React from "react";
import './education.css'
import uit from '../../assets/uit.png'
import kbm from '../../assets/kbm.png'
function Education()
{
    return(
    <div className="education_section" id="education">
        <div className="education_heading">
            <h1>Education</h1>
            <div className="education_details">
                <div className="education">
                    <div className="image">
                        <img src={uit} alt="" />
                    </div>
                    <div className="name">
                        <h2>Uttaranchal University</h2>
                        <h3>Bachelor of Computer Application</h3>
                        <h3>CGPA: 8.85</h3>
                        <h3>July 2023 to july 2026</h3>
                    </div>
                </div>
                <div className="education">
                    <div className="image">
                        <img src={kbm} alt="" />
                    </div>
                    <div className="name">
                        <h2>KBM Inter College</h2>
                        <h3>12th Science</h3>
                        <h3>68.4%</h3>
                        <h3>Aprail 2019 to Aprail 2020</h3>
                    </div>
                </div>
                <div className="education">
                    <div className="image">
                        <img src={kbm} alt="" />
                    </div>
                    <div className="name">
                        <h2>KBM Inter College</h2>
                        <h3>10th Science</h3>
                        <h3>80.4%</h3>
                        <h3>Aprail 2018 to Aprail 2019</h3>
                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}
export default Education;