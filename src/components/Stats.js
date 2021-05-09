import React from 'react'
import '../styles/stats.css'
export default class Stats extends React.Component {
  componentDidMount() {
    window.onscroll = function () {
      myFunction()
    }

    // Get the header
    var header = document.getElementById('myHeader')

    // Get the offset position of the navbar
    var sticky = header.offsetTop

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky')
      } else {
        header.classList.remove('sticky')
      }
    }
  }
  render() {
    return (
      <div id='myHeader' style={{ position: 'fixed' }}>
        <div className='over'>
          <span className='badge bg-warning text-dark'>
            <h1>Total Cases : {this.props.total}</h1>
          </span>
          <span className='badge bg-success'>
            <h1>recovered : {this.props.recovered}</h1>
          </span>
          <span className='badge bg-danger'>
            <h1>Deaths : {this.props.deaths}</h1>
          </span>
        </div>
      </div>
    )
  }
}
