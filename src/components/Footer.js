import React from 'react'
import {
	FaGithub,
	FaTwitter
} from 'react-icons/fa'
import Bio from './Bio'

let now = new Date();
const year = now.getFullYear();
class Footer extends React.Component {
  render() {
    return (
			<footer>
        <div className="footer-name">
          <Bio             
            twitter={this.props.twitter} 
            name={this.props.name}/>
        </div>
        <div className="footer-copyright">
          <p>Copyright (c) {year} • {this.props.name}</p>
          <a
            href={'https://mobile.twitter.com/' + this.props.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href={'https://github.com/' + this.props.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
