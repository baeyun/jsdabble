import React, { Component } from 'react'

export default class RenderView extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		let props = this.props

		if (!props.isActive)
			return <span children="inactive" style={{display: 'none'}} />

		return (
			<div id="render-view" className="jsdabble-view">
				<h1 children="RenderView" />
			</div>
		)
	}
}