import React from 'react'
import './header.css'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false
    }
  }
  

  componentWillMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }


  scrollToResume = () => {
    scroller.scrollTo('resumeScroll', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  scrollToProject = () => {
    scroller.scrollTo('projectScroll', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }


  render() {
    return (
      <div className={this.state.hasScrolled ? "Navigator NavigatorScrolled" : "Navigator"}>
        <div className="NavigatorGroup">
        <img src={require("../images/title.gif")} alt="" height = "40px"/>
          <Link to = "home" containerId = "homeContainer">
            <p onClick = {() =>  scroll.scrollToTop()}>Home</p>
          </Link>
          <Link to = "resumeScroll" containerId = "resumeContainer" activeClass="active" spy={true} smooth={true} duration={500} className = "resumeScroll">
            <p onClick = {() => this.scrollToResume()}>Resume</p>
          </Link>
          <Link to = "project" containerId = "projectContainer">
            <p onClick = {() => this.scrollToProject()}>Projects</p>
          </Link>
          <Link to = "contact" containerId = "contactContainer">
            <button onClick = {() =>  scroll.scrollToBottom()}>Contact</button>
          </Link>
        </div>
      </div>
    )
  }



}

export default Header
