import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetch from '../Action/index'
import '../styles/table.css'
class Table extends Component {
  send = () => {
    if (this.props.data.data.data) {
      return this.props.change(this.props.data.data.data[0])
    } else {
      return this.props.change({ cases: 0, recovered: 0, deaths: 0 })
    }
  }
  componentDidMount() {
    this.props.fetch()
    this.send()
  }
  renderElement() {
    if (this.props.data.data.data) {
      return this.props.data.data.data.map((e, index) => {
        return (
          <tbody key={index}>
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
      })
    }
    return null
  }
  render() {
    return (
      <div>
        <table className='table' style={{ marginTop: '80px' }}>
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
          {this.renderElement()}
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { data: state }
}

export default connect(mapStateToProps, { fetch })(Table)
