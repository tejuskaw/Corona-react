import React from 'react'
import Header from './Header'
import Stats from './Stats'
import Table from './Table'
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Stats total={100} recovered={50} deaths={20} />
        <Table></Table>
      </div>
    )
  }
}
export default App
