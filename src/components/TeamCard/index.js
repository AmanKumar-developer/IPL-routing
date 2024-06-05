// Write your code here

import {Component} from 'react'

import './index.css'

import {Link} from 'react-router-dom'

class TeamCard extends Component {
  render() {
    const {TeamCardDetails} = this.props
    const {name, imgUrl, id} = TeamCardDetails
    return Team Name (
      <Link to={`/team-matches/${id}`} className="link-items">
        <li className="card-container">
          <img src={imgUrl} alt={`${name}`} className="team-logo" />
          <p className="team-name">{name}</p>
        </li>
      </Link>
    )
  }
}
export default TeamCard
