import React from 'react'
import {
	FaGithub,
	FaTwitter
} from 'react-icons/fa';

let now = new Date();
const year = now.getFullYear();
class Footer extends React.Component {
  render() {
    return (
			<footer>
				<div className="footer-copyright">
					<p>Copyright (c) {year}</p>
				</div><div className="footer-name">
					<h1>{this.props.name}</h1>
				</div>
        <a
          href={'https://mobile.twitter.com/' + this.props.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>{' '}
        &bull;{' '}
        <a
          href={'https://github.com/' + this.props.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>{' '}
        &bull;{' '}
      </footer>
    );
  }
}

export default Footer;
