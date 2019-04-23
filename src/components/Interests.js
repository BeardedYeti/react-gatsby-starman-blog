import React from 'react';

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