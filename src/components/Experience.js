import React from 'react'

class Experience extends React.Component {
  render() {
    return this.props.experience.map(i => (
					<li>
						<p><b>{i.title} - {i.company}</b></p>
						<p>{i.date}</p>
						<ul>{i.description.map(e => (
							<li>{e}</li>
						))}
						</ul>
					</li>
		))
  }
}

export default Experience