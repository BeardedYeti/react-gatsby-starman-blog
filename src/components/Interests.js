import React from 'react';
import { rhythm } from '../utils/typography'

class Interests extends React.Component {
  render() {
    return this.props.interests.map(i => (
					<li>
						<p>{i}</p>
					</li>
		))
  }
}

export default Interests;