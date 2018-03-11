import React, { Component } from 'react'

import CodeMirror from 'react-codemirror'

require('codemirror/mode/htmlmixed/htmlmixed');

export default class HTMLView extends Component {
	constructor(props) {
		super(props)
	}

	onLoad() {}
	onChange() {}

	render() {
		let props = this.props,
			initialVal = "<!DOCTYPE html>\n<html>\n<head>\n\t<title></title>\n</head>\n<body>\n\n</body>\n</html>"

		if (!props.isActive)
			return <span children="inactive" style={{display: 'none'}} />

		return (
			<div className="jsdabble-view">
				<CodeMirror
					value={initialVal}
					options={{
						mode: 'htmlmixed',
						lineNumbers: true,
						theme: props.theme
					}}
				/>
			</div>
		)
	}
}