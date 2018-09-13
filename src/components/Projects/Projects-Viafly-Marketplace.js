import React, { Component } from 'react'
import "./Project.css"

class Projects_Viafly_Marketplace extends Component {
  render() {
    return (
      <div className = "projects-section">
        <h2 className="projects-title">Viafly Marketplace</h2>
        <div className = "projects-img-container">
          <img src= {require("../../images/viafly-marketplace.png")} alt="viafly-dashboard" className = "projects-img"/>
          <div className="project-detail">
            <p>Viafly Marketplace</p>
            <article>
              It is a Marketplace web that help the customer viewing the items and choosing prefer items. 
            </article>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Mapbox</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects_Viafly_Marketplace;
