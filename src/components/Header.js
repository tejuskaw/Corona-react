import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <nav
        className='navbar navbar-light bg-light'
        style={{ marginBottom: '8px' }}
      >
        <div className='container-fluid'>
          <a className='navbar-brand'>
            <h1>Covid 19 Tracker</h1>
          </a>
          <form className='d-flex'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-success' type='submit'>
              Search
            </button>
          </form>
        </div>
      </nav>
    )
  }
}

export default Header
