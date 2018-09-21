import React, { Component } from 'react'
import "./Project.css"

class Projects_NHK_News extends Component {
  render() {
    return (
      <div className = "projects-section">
        <h2 className="projects-title">NHK Easy News Mobile Client</h2>
        <div className = "projects-img-container">
          <img src= {require("../../images/NHK_ScreenShot.png")} alt="viafly-dashboard" className = "projects-img projects-mobile"/>
          <div className="project-detail" style = {{right:'1%'}}>
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
