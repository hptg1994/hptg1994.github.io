import React, { Component } from 'react'
import "./Project.css"

class Projects_Timer extends Component {
  render() {
    return (
      <div className = "projects-section">
        <h2 className="projects-title">Tasky</h2>
        <div className = "projects-img-container">
          <img src= {require("../../images/timer-electron.png")} alt="timer-electron" className = "projects-img"/>
          <div className="project-detail" style = {{right:'1%'}}>
            <p>Task Timer</p>
            <article>
              A small plugin that helps you boost up yourself to finish the task in time
            </article>
            <ul>
              <li>Electron</li>
              <li>React</li>
              <li>Webpack</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects_Timer;
