import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
class About extends Component {
  render () {
    // const backgroundImageUrl = <img src="nlbg.jpg" alt='Somewhere in Japan'>

    const aboutStyle = {
      marginTop: '1.5rem',
      fontSize: '24px'
    }

    return (
      <div style={aboutStyle}>
        <p className='about mb-5'> Welcome to Virginia Farmers Market!</p>

        <p className='about-paragraph mb-5'> We support local sustainable economies and food systems. Our mission is to create awarness of what your local area has to offer.</p>
        <img className='chicken pt-2 mt-5' src="chicken.png" alt="Local"></img>
      </div>
    )
  }
}

export default About
