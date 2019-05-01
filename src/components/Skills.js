import React from 'react';

class Skills extends React.Component {
  render() {
    return this.props.skills.map(i => (
					<li style={{ 
						width: `100%`, 
						listStyleType: `none`
					}} className="skill">
						<p style={{ 
							textAlign: `right`, 
							padding: `10px`,
							color: `#000`,
							width: `${i.value}0%`,
							backgroundColor: `${i.color}`,
							animationName: `fill`,
							animationDuration: `5s`,
							margin: `0.25em`,
							borderRadius: `0px 5px 5px 0px`
				}} className={i.value}>{i.skill} {i.value}</p>
					</li>
		))
  }
}

export default Skills;