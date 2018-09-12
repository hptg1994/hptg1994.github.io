import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>Learn to <br />design and code React apps</h1>
          <p>Complete courses bout the best tools and design systems. Prototype and build apps with React and Swift</p>
          <Link to="/page-2/">Watch the video</Link>
          <div className="Logos">
            <img src={require("./images/logo-sketch.png")} width="50" />
            <img src={require("./images/logo-figma.png")} width="50" />
            <img src={require("./images/logo-studio.png")} width="50" />
            <img src={require("./images/logo-framer.png")} width="50" />
            <img src={require("./images/logo-react.png")} width="50" />
            <img src={require("./images/logo-swift.png")} width="50" />
          </div>
          <Wave />
  
  
        </div>
      </div>
      <div className="Cards">
        <h2> 11 course, more coming</h2>
        <div className="CardGroup">
          <Card title="Design System" text="10 section" image={require("../images/wallpaper.jpg")} />
          <Card title="React for Designer" text="12 section" image={require("../images/wallpaper2.jpg")} />
          <Card title="Sound Design" text="5 section" image={require("../images/wallpaper3.jpg")} />
          <Card title="ARKit 2" text="10 section" image={require("../images/wallpaper4.jpg")} />
        </div>
      </div>
      <Section image={require("../images/wallpaper2.jpg")} logo={require("../images/logo-react.png")} title="React for Designer" text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify " />
      <SectionCaption>12 section - 6 hours</SectionCaption>
      <SectionCellGroup>
        {staticdata.cells.map(cell => (
          <Cell title={cell.title} image={cell.image} />
        ))}
      </SectionCellGroup>
    </div >
    );
  }
}

export default App;
