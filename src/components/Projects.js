import React from 'react';
import { rhythm } from '../utils/typography'
import Tags from './Tags'
import LazyLoad from 'react-lazy-load';

class Projects extends React.Component {
  render() {
    return this.props.projects.map(i => (
            <div>
                <a href={i.url}>
                    <LazyLoad 
                      width={100}
                      height={100}
                      debounce={false}
                      offsetVertical={500}
                    >
                      <img src={i.image} alt={i.title}/>
                    </LazyLoad>
                    <h5>{i.title}</h5>
                    <p>{i.description}</p>
                    <div>
                        {i.tags.map(e => (
                          <Tags icon={e} />
                        ))}
                    </div>
                </a>

            </div>
		))
  }
}

export default Projects;