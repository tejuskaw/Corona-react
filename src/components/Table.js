import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetch from '../Action/index'
class Table extends Component {
  componentDidMount() {
    this.props.fetch()
  }
  render() {
    console.log(this.props.data.data.data)

    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th className='col'>Country</th>
              <th className='col'>Cases</th>
              <th className='col'>Death</th>
              <th className='col'>Recovered</th>
              <th className='col'>Active</th>
              <th className='col'>critical</th>
              <th className='col'>casesPerOneMillion</th>
              <th className='col'>deathsPerOneMillion</th>
              <th className='col'>testsPerOneMillion</th>
            </tr>
          </thead>
          {this.props.data.data.data.map((e) => {
            console.log(e)
            return (
              <tbody>
                <td>{e.country}</td>
                <td>{e.cases}</td>
                <td>{e.deaths}</td>
                <td>{e.recovered}</td>
                <td>{e.active}</td>
                <td>{e.critical}</td>
                <td>{e.casesPerOneMillion}</td>
                <td>{e.deathsPerOneMillion}</td>
                <td>{e.testsPerOneMillion}</td>
              </tbody>
            )
          })}
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { data: state }
}

export default connect(mapStateToProps, { fetch })(Table)
