import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
class Home extends Component {
  render () {
    // const backgroundImageUrl = <img src="nlbg.jpg" alt='Somewhere in Japan'>

    const backgroundStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }

    return (
      <div id="welcome-container" style={backgroundStyle} className="img">
        <img className='animals justify-content-center align-content-center' src="farm-animals.png" alt="Local"></img>
      </div>
    )
  }
}

export default Home
