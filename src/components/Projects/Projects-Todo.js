import React, { Component } from 'react'
import "./Project.css"

class Projects_TODO extends Component {
  render() {
    return (
      <div className = "projects-section">
        <h2 className="projects-title">TODO Mobile Client</h2>
        <div className = "projects-img-container">
          <img src= {require("../../images/screen-shot-gif.gif")} alt="viafly-dashboard" className = "projects-img projects-mobile"/>
          <div className="project-detail" style = {{right:'1%'}}>
            <p>TODO Mobile Client (Implment Design)</p>
            <article>
              A Todo app help to track the waititng to do list.( I implement the Design !)
            </article>
            <ul>
              <li>Flutter</li>
              <li>Animation</li>
              <li>Sketch</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects_TODO;
