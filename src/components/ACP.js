import React from 'react';
import { rhythm } from '../utils/typography'

class ACP extends React.Component {
  render() {
    return this.props.details.map(i => (
					<li>
						<p><b>{i.title}</b></p>
						<p>{i.date}</p>
					</li>
		))
  }
}

export default ACP;