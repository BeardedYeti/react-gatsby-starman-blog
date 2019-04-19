import React from 'react';
import { rhythm } from '../utils/typography'
import Img from 'gatsby-image'

class Projects extends React.Component {
  render() {
    return this.props.projects.map(i => (
            <div>
                <a href={i.url}>
                    <h5>{i.title}</h5>
                    <p>{i.description}</p>
                    <div>
                        {i.tags.map(e => (
							<span>{e}</span>
						))}
                    </div>
                </a>

            </div>
		))
  }
}

export default Projects;