import React from 'react'

export default () => {
	return (
		<form
			name="contact"
			method="post"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
			style={{
				backgroundColor: `#F1F1F1`,
				borderRadius: `5px`,
				textAlign: `center`
			}}
		>
			<input type="hidden" name="bot-field" />
			<input type="hidden" name="form-name" value="contact" />
			<div className="field half first">
				<label htmlFor="name">Name</label>
				<input type="text" name="name" id="name" />
			</div>
			<div className="field half">
				<label htmlFor="email">Email</label>
				<input type="email" name="email" id="email" />
			</div>
			<div className="field">
				<label htmlFor="message">Message</label>
				<textarea name="message" id="message" rows="6" />
			</div>
			<ul className="actions">
				<li style={{
						listStyleType: `none`
					}}>
					<input style={{
						
					}}type="submit" value="Send" className="special" />
				</li>
			</ul>
		</form>
	)
}