import React from 'react';
import { rhythm } from '../utils/typography'

class Skill extends React.Component {
  render() {
    return this.props.skills.map(i => (
					<li>
						<h5>{i.skill}</h5>
						<p>{i.value}</p>
					</li>
		))
  }
}

export default Skill;