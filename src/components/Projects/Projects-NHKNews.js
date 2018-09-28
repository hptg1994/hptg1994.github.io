import React, { Component } from 'react'
import "./Project.css"

class Projects_NHK_News extends Component {
  render() {
    return (
      <div className = "projects-section">
        <h2 className="projects-title project-title-nhk">NHK Easy News Mobile Client
        <img src={require("../../images/NHK_New_Logo.png")} alt="nhk_app_logo"/>
        </h2>
        <div className = "projects-img-container" style = {{width:"1034px"}}>
          <img src= {require("../../images/nhk-screenrecord.gif")} alt="viafly-dashboard" className = "projects-img" style = {{ width : "39%" }}/>
          <div className="project-detail" style = {{ right:"0px"}}>
            <p>NHK Easy News Mobile Client</p>
            <article>
              A news mobile client that using Flutter to code the mobile client and using Spring Boot to set up the backend server.( So bascially I implement the api by myself )
            </article>
            <ul>
              <li>Flutter</li>
              <li>Spring Boot</li>
              <li>MySql</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects_NHK_News;
