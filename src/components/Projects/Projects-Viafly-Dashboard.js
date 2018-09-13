import React, { Component } from 'react'
import "./Project.css"

class Projects_Viafly_Dashboard extends Component {
  render() {
    return (
      <div className = "projects-section">
        <h2 className="projects-title">Viafly Dashboard</h2>
        <div className = "projects-img-container">
          <img src= {require("../../images/viafly-dashboard.png")} alt="viafly-dashboard" className = "projects-img"/>
          <div className="project-detail">
            <p>Viafly Dashboard</p>
            <article>
              It is a Dashboard page that help the shop owner to maintain their shop's item, which primarily fetch from POS System such as "Shopify", "Square", "Lightspeed" 
            </article>
            <ul>
              <li>React</li>
              <li>Rails</li>
              <li>Stripe</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects_Viafly_Dashboard;
