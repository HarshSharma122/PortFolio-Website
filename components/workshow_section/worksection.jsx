import React from "react";
import './worksection.css'
import netflix01 from '../../assets/netflix01.png'
import createjo1 from '../../assets/createJourney01.png'
import clickkart01 from '../../assets/clickkart01.png'
import TodoApp01 from '../../assets/todoproject01.png'
function WorkShow()
{
    return(
        <div className="work_section" id="work">
            <div className="work_heading">
                <h1>My work</h1>
            </div>

            <div className="works_boxes">
                <div className="work_box">
                    <a href="https://github.com/HarshSharma122/Project-using-Html-css-and-Javascript/tree/main/29-01-2025%2018th%20project%20Netflix%20Clone" target="_blank"><img src={netflix01} alt="" /></a>
                </div>
                <div className="work_box">
                    <a href=""><img src={createjo1} alt="" /></a>
                </div>
                <div className="work_box">
                    <a href=""><img src={clickkart01} alt="" /></a>
                </div>
                <div className="work_box">
                    <a href="https://github.com/HarshSharma122/TodoApp" target="_blank"><img src={TodoApp01} alt="" /></a>
                </div>
            </div>
        </div>
    )
}
export default WorkShow