import React from 'react'
import Link from 'gatsby-link'
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
          <p>Courses</p>
          <p>Downloads</p>
          <p>workshops</p>
          <p><button>Buy</button></p>
        </div>
      </div>
    )
  }



}

export default Header
