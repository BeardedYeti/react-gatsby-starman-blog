import React from 'react';

class Skills extends React.Component {
  render() {
    return this.props.skills.map(i => (
					<li style={{ 
						width: `100%`, 
						backgroundColor: `#ddd` 
					}} className="skill">
						<h5>{i.skill}</h5>
						<p style={{ 
							textAlign: `right`, 
							padding: `10px`,
							color: `white`,
							width: `${i.value}0%`,
							backgroundColor: `${i.color}`,
							animationName: `fill`,
							animationDuration: `2s` 
						}} className={i.value}>{i.value}</p>
					</li>
		))
  }
}

export default Skills;