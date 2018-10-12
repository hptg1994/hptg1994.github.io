import React from 'react'
import "./Resume.css"

class Resume extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentSection: "Skill"
    }
  }

  renderSection = (section) => {
    this.setState({ currentSection: section })
  }

  render() {
    const SkillSection = (
      <React.Fragment>
        <div className="resume-detail">
          <div className="resume-detail-left">
            <p>Programming Language</p>
          </div>
          <div className='resume-detail-right'>
            <p>Javascript, Java, Dart, Swift, Python, Typescript, C#, Ruby</p>
          </div>
        </div>

        <div className="resume-detail">
          <div className="resume-detail-left">
            <p>Web Programming</p>
          </div>
          <div className='resume-detail-right'>
            <p>React, Redux, Vue, Vuex, Angular, Flutter, React Native, Electron </p>
          </div>
        </div>

        <div className="resume-detail">
          <div className="resume-detail-left">
            <p id="projectScroll" >Web Framework</p>
          </div>
          <div className='resume-detail-right'>
            <p>Spring Boot, Rails, ASP.NET</p>
          </div>
        </div>

        <div className="resume-detail">
          <div className="resume-detail-left">
            <p>Database</p>
          </div>
          <div className='resume-detail-right'>
            <p>Postgresql, MySQL, NoSQL, SQLite</p>
          </div>
        </div>
      </React.Fragment>
    )

    const Experience = (
      <React.Fragment>
        <div className="resume-detail">
          <div className="resume-detail-left">
            <p>Jan 2018 ~ Now</p>
          </div>
          <div className='resume-detail-right resume-experience'>
            <div>
              <img src={require("../../images/viafly_logo.png")} alt="viafly-logo" style={{ width: "56px" }} />
            </div>
            <div>
              <p>Full Stack Engineer</p>
              <p>Viafly Inc.,</p>
              <p>New York City, NY</p>
            </div>
          </div>
        </div>

        <div className="resume-detail">
          <div className="resume-detail-left">
            <p>May 2014 ~ Aug 2014</p>
          </div>
          <div className='resume-detail-right resume-experience'>
            <div>
              <img src={require("../../images/picc_logo.png")} alt="picc-logo" style={{ width: "80px" }} />
            </div>
            <div>
              <p>Analyst Intern</p>
              <p>People's Insurance Company of China </p>
              <p>Foshan, China</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )

    const Education = (
      <React.Fragment>
        <div className="resume-detail">
          <div className="resume-detail-left">
            <p>2016 - 2018</p>
          </div>

          <div className='resume-detail-right resume-education'>
            <div>
              <img src={require("../../images/stevens-logo.gif")} alt="stevens-logo" style={{ width: "60px" }} />
            </div>
            <div>
              <p>Master Degree of Computer Science</p>
              <p>Stevens Institute of Technology</p>
              <p>Hokoken, NJ, USA</p>
            </div>

          </div>
        </div>

        <div className="resume-detail">
          <div className="resume-detail-left">
            <p>2012 - 2016</p>
          </div>
          <div className='resume-detail-right resume-education'>
            <div>
              <img src={require("../../images/Cust_logo.jpg")} alt="cust-logo" style={{ width: "75px" }} />
            </div>
            <div>
              <p>Bachelor Degree of Physical Science</p>
              <p>Changchun University of Science and Technology</p>
              <p>Jilin, China</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )

    const showingSection = () => {
      switch (this.state.currentSection) {
        case "Skill":
          return SkillSection;
          break;
        case "Experience":
          return Experience;
          break;
        case "Education":
          return Education;
          break
        default:
          return null;
          break;
      }
    }

    return (
      <section className="resume">
        <div className="resume-section">
          <p onClick={() => this.renderSection("Skill")}>Skills</p>
          <p onClick={() => this.renderSection("Experience")}>Experience</p>
          <p onClick={() => this.renderSection("Education")}>Education</p>
        </div>
        {showingSection()}
      </section>
    )
  }

}

export default Resume;

