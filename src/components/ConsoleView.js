import React, { Component } from 'react'

export default class ConsoleView extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		let props = this.props
		
		if (!props.isActive)
			return <span children="inactive" style={{display: 'none'}} />

		return (<h1 children="ConsoleView" />)
	}
}