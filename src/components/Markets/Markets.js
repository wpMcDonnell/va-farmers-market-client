// IndexComments component - class component
// When the component mounts, we'll make a GET request
// to "index" the comments, then display those comments

// 1. Imports
import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { Card } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
// axios package (HTTP requests)
// const axios = require('axios')

// apiUrl from apiConfig.js

// 2. The class
class Markets extends Component {
  // 2 very important React class component methods
  // constructor & render
  constructor () {
    // Set up the constructor, allow us to override some of what
    // we inherit
    super()

    // useFUL constructor sets state
    this.state = {
      // We'll be modifying the state after we get our data
      // initially we have no data & our state should show that
      warrenton: false,
      plains: false,
      marshall: false,
      middleburg: false
    }
  }

  warrentonClick = (event) => {
    return this.setState({ newYork: true })
  }

  plainsClick = (event) => {
    return this.setState({ plains: true })
  }

  marshallClick = (event) => {
    return this.setState({ marshall: true })
  }

  // componentDidMount will be run when the component finished mounting
  // AFTER the FIRST render
  componentDidMount () {
  }

  // render is REQUIRED for any class component
  render () {
    const cardContainerLayout = {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-around',
      alignContent: 'center'
    }

    const { warrenton, plains, marshall } = this.state
    if (warrenton) {
      // if deleted is true, we can redirect
      return <Redirect to="/warrenton"/>
    } else if (plains) {
      return <Redirect to="/plains"/>
    } else if (marshall) {
      return <Redirect to="/marshall"/>
    }

    return (
      <div className='pt-5'>
        <div className='row col-lg-9 mx-auto'style={cardContainerLayout}>
          <Card className="mb-5 shadow" style={{ width: '18rem' }} onClick={this.warretonClick}>
            <Card.Img variant="top" src="warrenton.png"/>
            <Card.Body>
              <Card.Title>Warrenton</Card.Title>
            </Card.Body>
          </Card>
          <Card className="mb-5 shadow" style={{ width: '18rem' }} onClick={this.plainsClick}>
            <Card.Img variant="top" src="plains.png"/>
            <Card.Body>
              <Card.Title className=''>The Plains</Card.Title>
            </Card.Body>
          </Card>
          <Card className="mb-5 shadow" style={{ width: '18rem' }} onClick={this.marshallClick}>
            <Card.Img variant="top" src="marshall.jpeg"/>
            <Card.Body>
              <Card.Title>Marshall</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    )
  }
}

// 3. The export
export default withRouter(Markets)
