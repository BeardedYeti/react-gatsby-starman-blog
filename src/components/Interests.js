import React from 'react';

class Interests extends React.Component {
  render() {
    return this.props.interests.map(i => (
					<li style={{
						float: `left`,
						width: `50%`
					}}>
						<p>{i}</p>
					</li>
		))
  }
}

export default Interests;