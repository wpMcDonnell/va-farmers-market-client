import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
class Home extends Component {
  render () {
    // const backgroundImageUrl = <img src="nlbg.jpg" alt='Somewhere in Japan'>

    const backgroundStyle = {
      display: 'flex',
      alignItems: 'center'
    }

    return (
      <div id="welcome-container" style={backgroundStyle} className="img">
        <img className='seal' src="seal.png" alt="Sic Semper Tyrannus"></img>
      </div>
    )
  }
}

export default Home
