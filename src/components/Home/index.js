// Write your code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {IplTeamData: [], isLoading: true}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const UpdatedData = data.teams.map(eachData => ({
      name: eachData.name,
      id: eachData.id,
      imgUrl: eachData.team_image_url,
    }))
    this.setState({IplTeamData: UpdatedData, isLoading: false})
  }

  renderTeamList = () => {
    const {IplTeamData} = this.state
    return (
      <ul className="team-list-items">
        {IplTeamData.map(eachItem => (
          <TeamCard ke={eachItem.id} TeamCardDetails={eachItem} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <div className="ipl-container">
          <div className="header-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="logo-image"
            />
            <h1 className="heading"> IPL Dashboard</h1>
          </div>
          {isLoading ? this.renderLoader() : this.renderTeamList()}
        </div>
      </div>
    )
  }
}
export default Home
