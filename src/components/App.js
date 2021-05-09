import React from 'react'
import Header from './Header'
import Stats from './Stats'
import Table from './Table'
class App extends React.Component {
  state = {
    total: 0,
    recovered: 0,
    deaths: 0,
  }
  change = (x) => {
    this.setState({ total: x.cases, recovered: x.recovered, deaths: x.deaths })
  }
  render() {
    return (
      <div>
        <Header />
        <Stats
          total={this.state.total}
          recovered={this.state.recovered}
          deaths={this.state.deaths}
        />
        <Table change={this.change} />
      </div>
    )
  }
}
export default App
