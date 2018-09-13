import React from 'react'
import './header.css'

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
  render() {
    return (
      <div className={this.state.hasScrolled ? "Navigator NavigatorScrolled" : "Navigator"}>
        <div className="NavigatorGroup">
          <p>Home</p>
          <p>Resume</p>
          <p>Projects</p>
          <button>Contact</button>
        </div>
      </div>
    )
  }



}

export default Header
