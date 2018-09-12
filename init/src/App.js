import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Section from './components/Section';
import Wave from './components/Wave';
import Header from './components/header'
import Cell from './components/Cell';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <div className="Header">
        <div className="HeaderGroup">
          <h1>Pintaigao He<br/><span>The webdeveloper</span></h1>
          <div className = "Header-subtitle">
            <p>#Frontend</p>          
            <p>#React</p>          
            <p>#Flutter</p>          
            <p>#Spring</p>          
            <p>#Vue</p>          
          </div>
          <div className="Logos">
            <div>
            <img src={require("./images/logo-js.png")}  height="50" />
            <img src={require("./images/logo-python.png")}  height="50" />
            <img src={require("./images/logo-java.png")}  height="50" />
            <img src={require("./images/logo-sketch.png")}  height="50" />
            <img src={require("./images/logo-zeplin.png")}  height="50" />
            <img src={require("./images/logo-django.png")}  height="50" />
            <img src={require("./images/logo-vscode.png")}  height="50" />
            <img src={require("./images/logo-idea.png")}  height="50" />
            <img src={require("./images/logo-webstorm.png")}  height="50" />
            <img src={require("./images/logo-android-studio.png")}  height="50" />
            <img src={require("./images/logo-react.png")}  height="50" />
            <img src={require("./images/logo-vue.png")}  height="50" />
            <img src={require("./images/logo-angular.png")}  height="50" />
            <img src={require("./images/logo-flutter.png")}  height="50" />
            <img src={require("./images/logo-dart.png")}  height="50" />
            <img src={require("./images/logo-firebase.png")}  height="50" />
            <img src={require("./images/logo-swift.png")}  height="50" />
            <img src={require("./images/logo-xcode.png")}  height="50" />
            <img src={require("./images/logo-rails.png")}  height="50" />
            <img src={require("./images/logo-spring.png")}  height="50" />
            <img src={require("./images/logo-postgres.png")}  height="50" />
            <img src={require("./images/logo-teamsql.png")}  height="50" />
            <img src={require("./images/logo-mysql.png")}  height="50" />
            </div>
          </div>
          <Wave />
        </div>
      </div>
      <div className="Cards">
        <h2> 11 course, more coming</h2>
        <div className="CardGroup">
          <Card title="Design System" text="10 section" image={require("./images/wallpaper.jpg")} />
          <Card title="React for Designer" text="12 section" image={require("./images/wallpaper2.jpg")} />
          <Card title="Sound Design" text="5 section" image={require("./images/wallpaper3.jpg")} />
          <Card title="ARKit 2" text="10 section" image={require("./images/wallpaper4.jpg")} />
        </div>
      </div>
      {/* <Section image={require("../images/wallpaper2.jpg")} logo={require("../images/logo-react.png")} title="React for Designer" text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify " />
      <SectionCaption>12 section - 6 hours</SectionCaption> */}
      {/* <SectionCellGroup>
        {staticdata.cells.map(cell => (
          <Cell title={cell.title} image={cell.image} />
        ))}
      </SectionCellGroup> */}
    </div >
    );
  }
}

export default App;
