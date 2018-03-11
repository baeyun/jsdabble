import React, { Component } from 'react'

export default class ThemeSwitcher extends Component {
	constructor(props) {
		super(props)

		this.state = {
			themes: ['dracula', 'monokai']
		}

		this.switchTheme = this.switchTheme.bind(this)
	}

	switchTheme() {
		console.log(this.refs.theme.value)
	}

	render() {
		let props = this.props

		return (
			<select ref="theme" onChange={e => this.switchTheme()}>
				{this.state.themes.map((theme, i) => <option key={i} value={theme} children={theme} />)}
			</select>
		)
	}
}