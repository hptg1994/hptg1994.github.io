import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
// import Section from './components/Section';
import Wave from './components/Wave';
import Header from './components/header'
import Resume from './components/ResumeSection/Resume';
// import Cell from './components/Cell';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <div className="Header">
        <div className="HeaderGroup">
          <h1>Pintaigao He<br/><span>The webdeveloper</span></h1>
          <div className = "Header-subtitle">
            <p>#Full Stack</p>          
            <p>#React</p>          
            <p>#Flutter</p>          
            <p>#Spring</p>          
            <p>#Vue</p>          
          </div>
          <div className="Logos">
            <div>
            <img src={require("./images/logo-js.png")} height="50"  alt ="js-logo"/>
            <img src={require("./images/logo-python.png")}  height="50"  alt ="python-logo"/>
            <img src={require("./images/logo-java.png")}  height="50"  alt ="java-logo"/>
            <img src={require("./images/logo-dart.png")}  height="50" alt ="dart-logo" />
            <img src={require("./images/logo-swift.png")}  height="50"  alt ="swift-logo"/>
            <img src={require("./images/logo-react.png")}  height="50"  alt ="react-logo"/>
            <img src={require("./images/logo-redux.png")}  height="50"  alt ="redux-logo"/>
            <img src={require("./images/logo-vue.png")}  height="50"  alt ="vue-logo"/>
            <img src={require("./images/logo-angular.png")}  height="50"  alt ="angular-logo"/>
            <img src={require("./images/logo-flutter.png")}  height="50"  alt ="flutter-logo"/>
            <img src={require("./images/logo-django.png")}  height="50"  alt ="django-logo"/>
            <img src={require("./images/logo-spring.png")}  height="50"  alt ="spring-logo"/>
            <img src={require("./images/logo-rails.png")}  height="50"  alt ="rails-logo"/>
            <img src={require("./images/logo-firebase.png")}  height="50"  alt ="firebase-logo"/>
            <img src={require("./images/logo-postgres.png")}  height="50"  alt ="postgres-logo"/>
            <img src={require("./images/logo-mysql.png")}  height="50"  alt ="mysql-logo"/>
            <img src={require("./images/logo-teamsql.png")}  height="50"  alt ="teamsql-logo"/>
            <img src={require("./images/logo-xcode.png")}  height="50"  alt ="xcode-logo"/>
            <img src={require("./images/logo-vscode.png")}  height="50"  alt ="vscode-logo"/>
            <img src={require("./images/logo-idea.png")}  height="50"  alt ="idea-logo"/>
            <img src={require("./images/logo-webstorm.png")}  height="50"  alt ="webstorm-logo"/>
            <img src={require("./images/logo-android-studio.png")}  height="50"  alt ="android-studio-logo"/>
            <img src={require("./images/logo-sketch.png")}  height="50"  alt ="sketch-logo"/>
            <img src={require("./images/logo-zeplin.png")}  height="50"  alt ="zeplin-logo"/>
            <img src={require("./images/logo-git.png")}  height="50"  alt ="git-logo"/>
            </div>
          </div>
          <Wave />
        </div>
      </div>

      <div className = "Resume-Section">
        <Resume />
      </div>

      <div className="Cards">
        <h2>Projects being developed</h2>
        <div className="CardGroup">
          <Card title="Design System" text="10 section" image={require("./images/wallpaper.jpg")} />
          <Card title="React for Designer" text="12 section" image={require("./images/wallpaper2.jpg")} />
          <Card title="Sound Design" text="5 section" image={require("./images/wallpaper3.jpg")} />
          <Card title="ARKit 2" text="10 section" image={require("./images/wallpaper4.jpg")} />
        </div>
      </div>

      <section className = "AboutMySelf-Section">
        <div className = "AboutMySelf-Detail">
          <p>Get in touch</p>
          <p className = "p-CONTACT_DETAILS">CONTACT DETAILS</p>
          <div className = "AboutMySelf-Detail-info">
            <i className="material-icons">location_on</i>
            <p>Austin, TX</p>
          </div>
          <div className = "AboutMySelf-Detail-info">
            <i className="material-icons">email</i>
            <p>hptg1994@gmail.com</p>
          </div> 
          <div className = "AboutMySelf-Detail-info">
            <i className="material-icons">phone</i>
            <p>201-844-3982</p>
          </div> 
          <p className = "p-CONTACT_DETAILS">SOCIAL</p> 
          <ul className = 'social-group'>
            <li>
              <a href="https://www.linkedin.com/in/pintaigao-he-20a067138/">
                <img src={require("./images/social/linkedin.png")} alt="linkedin-logo"/>
              </a>
            </li>
            <li>
              <a href="https://github.com/hptg1994/">
                <img src={require("./images/social/github.png")} alt="github-logo"/>
              </a>
            </li>
          </ul>
        </div>
        <div className = "footer">
          <p>Created By Pintaigao</p>
        </div>
      </section>
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
