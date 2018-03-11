import React, { Component } from 'react'

import CodeMirror from 'react-codemirror'

require('codemirror/lib/codemirror.css');
require('codemirror/mode/css/css');

export default class CSSView extends Component {
	constructor(props) {
		super(props)
	}

	onLoad() {}
	onChange() {}

	render() {
		let props = this.props,
			initialVal = '/* CSS goes here... */\nbody {\n\tfont-family: "Trebuchet MS", sans-serif;\n}'

		if (!props.isActive)
			return <span children="inactive" style={{display: 'none'}} />

		return (
			<div className="jsdabble-view">
				<CodeMirror
					value={initialVal}
					options={{
						mode: 'css',
						lineNumbers: true,
						theme: props.theme
					}}
				/>
			</div>
		)
	}
}