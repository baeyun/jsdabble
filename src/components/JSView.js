import React, { Component } from 'react'

import CodeMirror from 'react-codemirror'

require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');

export default class JSView extends Component {
	constructor(props) {
		super(props)
	}

	onLoad() {}
	onChange() {}

	render() {
		let props = this.props,
			initialVal = 'export default class Mesh extends THREE.MeshRenderer() {\n\t// load a texture, set wrap mode to repeat\n\tvar texture = new THREE.TextureLoader().load( "textures/water.jpg" );\n\n\ttexture.wrapS = THREE.RepeatWrapping;\n\ttexture.wrapT = THREE.RepeatWrapping;\n\ttexture.repeat.set( 4, 4 );\n}'

		if (!props.isActive)
			return <span children="inactive" style={{display: 'none'}} />

		return (
			<div className="jsdabble-view">
				<CodeMirror
					value={initialVal}
					options={{
						mode: 'javascript',
						lineNumbers: true,
						theme: props.theme
					}}
				/>
			</div>
		)
	}
}