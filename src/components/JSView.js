import React, { Component } from 'react'

import CodeMirror from 'react-codemirror'

import 'codemirror/mode/javascript/javascript'

export default class JSView extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		let props = this.props,
			initialVal =
`/**
 * @todos
 * 
 * Tabulate html/css/js pill to fit 1 lang per view
 * use db (lovefield)
 * build dabble master view
 * get dabble canvas pic (with db)
 * redux?
 * create settings view: font, theme of editor/general, ui, prefs
 * 
 * export dabbles (to gists etc)
 * create rendered file from dabble && compile with electron
 * create site for download
 */

import { Material } from './Material.js';
import { UniformsUtils } from '../renderers/shaders/UniformsUtils.js';

/**
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  defines: { "label" : "value" },
 *  uniforms: { "parameter1": { value: 1.0 }, "parameter2": { value2: 2 } },
 *
 *  fragmentShader: <string>,
 *  vertexShader: <string>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>,
 *
 *  lights: <bool>,
 *
 *  skinning: <bool>,
 *  morphTargets: <bool>,
 *  morphNormals: <bool>
 * }
 */

function ShaderMaterial( parameters ) {

	Material.call( this );

	this.type = 'ShaderMaterial';

	this.defines = {};
	this.uniforms = {};

	this.vertexShader = 'void main() {
		gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
	}';
	this.fragmentShader = 'void main() {
		gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
	}';

	this.linewidth = 1;

	this.wireframe = false;
	this.wireframeLinewidth = 1;

	this.fog = false; // set to use scene fog
	this.lights = false; // set to use scene lights
	this.clipping = false; // set to use user-defined clipping planes

	this.skinning = false; // set to use skinning attribute streams
	this.morphTargets = false; // set to use morph targets
	this.morphNormals = false; // set to use morph normals

	this.extensions = {
		derivatives: false, // set to use derivatives
		fragDepth: false, // set to use fragment depth values
		drawBuffers: false, // set to use draw buffers
		shaderTextureLOD: false // set to use shader texture LOD
	};

	// When rendered geometry doesn't include these attributes but the material does,
	// use these default values in WebGL. This avoids errors when buffer data is missing.
	this.defaultAttributeValues = {
		'color': [ 1, 1, 1 ],
		'uv': [ 0, 0 ],
		'uv2': [ 0, 0 ]
	};

	this.index0AttributeName = undefined;
	this.uniformsNeedUpdate = false;

	if ( parameters !== undefined ) {

		if ( parameters.attributes !== undefined ) {

			console.error( 'THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead.' );

		}

		this.setValues( parameters );

	}

}

ShaderMaterial.prototype = Object.create( Material.prototype );
ShaderMaterial.prototype.constructor = ShaderMaterial;

ShaderMaterial.prototype.isShaderMaterial = true;

ShaderMaterial.prototype.copy = function ( source ) {

	Material.prototype.copy.call( this, source );

	this.fragmentShader = source.fragmentShader;
	this.vertexShader = source.vertexShader;

	this.uniforms = UniformsUtils.clone( source.uniforms );

	this.defines = source.defines;

	this.wireframe = source.wireframe;
	this.wireframeLinewidth = source.wireframeLinewidth;

	this.lights = source.lights;
	this.clipping = source.clipping;

	this.skinning = source.skinning;

	this.morphTargets = source.morphTargets;
	this.morphNormals = source.morphNormals;

	this.extensions = source.extensions;

	return this;

};

ShaderMaterial.prototype.toJSON = function ( meta ) {

	var data = Material.prototype.toJSON.call( this, meta );

	data.uniforms = this.uniforms;
	data.vertexShader = this.vertexShader;
	data.fragmentShader = this.fragmentShader;

	return data;

};


export { ShaderMaterial };

`

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