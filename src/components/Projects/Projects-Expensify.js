import React, { Component } from 'react'
import "./Project.css"

class Projects_Expensify extends Component {
  render() {
    return (
      <div className = "projects-section">
        <h2 className="projects-title">Expensify</h2>
        <div className = "projects-img-container">
          <img src= {require("../../images/expensify-web.png")} alt="viafly-dashboard" className = "projects-img"/>
          <div className="project-detail" style = {{right:'1%'}}>
            <p>Expensify Website</p>
            <article>
              A website that helps to record the costing, implemented seperately by React, Vue, Electron, Flutter and integrated with firebase as backend.
            </article>
            <ul>
              <li>React</li>
              <li>Vue</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects_Expensify;
