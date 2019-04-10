import React from 'react';
import { rhythm } from '../utils/typography'
import Img from 'gatsby-image'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src="../assets/bio-pic.jpg"
          alt=""
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 310 }}>
					Personal blog and portfolio of <a href={'https://mobile.twitter.com/' + this.props.twitter}>{this.props.name}</a>.
					Drink coffee, and be excellent to each other!
        </p>
      </div>
    );
  }
}

export default Bio;