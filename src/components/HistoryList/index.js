import {Component} from 'react'

import HistoryItem from '../HistoryItem'

import './index.css'

class HistoryList extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteTodo = id => {
    const updatedHistoryList = initialHistoryList.filter(
      eachhistory => eachhistory.id !== id,
    )

    this.setState({
      initialHistoryList: updatedHistoryList,
    })
  }

  render() {
    const {searchInput} = this.state
    const {initialHistoryList} = this.props

    return (
      <>
        <nav className="nav-container">
          <p className="heading">
            Hist
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              className="clock-logo"
              alt="app logo"
            />
            ry
          </p>
          <div className="search-input-container">
            <img
              alt="search"
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search History"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
        </nav>
        <ul className="History-list">
          {initialHistoryList.map(eachList => (
            <HistoryItem
              key={eachList.id}
              HistoryDetails={eachList}
              updateSearchInput={this.updateSearchInput}
              deleteTodo={this.deleteTodo}
            />
          ))}
        </ul>
      </>
    )
  }
}
export default HistoryList
