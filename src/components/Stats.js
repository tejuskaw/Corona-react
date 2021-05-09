import React from 'react'
import '../styles/stats.css'
export default class Stats extends React.Component {
  render() {
    return (
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
    )
  }
}
