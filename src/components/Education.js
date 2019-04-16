import React from 'react';
import { rhythm } from '../utils/typography'

class Education extends React.Component {
  render() {
    return this.props.education.map(i => (
					<li>
						<p><b>{i.degree}</b> - {i.school} - {i.year}</p>
						<ul>
							<li>Major in {i.major}</li>
							<li>Minor in {i.minor}</li>
						</ul>

					</li>
		))
  }
}

export default Education;