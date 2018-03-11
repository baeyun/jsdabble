import React, { Component } from 'react'
import SplitPane from 'react-split-pane'

/**
 * Assets
 */
import './css/normalize.css'
import './css/font-awesome.min.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'
import './css/jsdabble.css'

import Logo from './img/jsdabble-logo@1x.png'

/**
 * Components
 */
// import ThemeSwitcher from './components/ThemeSwitcher'
import HTMLView from './components/HTMLView'
import CSSView from './components/CSSView'
import JSView from './components/JSView'
import RenderView from './components/RenderView'
import ConsoleView from './components/ConsoleView'

export default class JSDabble extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isActiveHTMLView: false,
			isActiveCSSView: false,
			isActiveJSView: true,
			isActiveRenderView: true,
			isActiveConsoleView: true,

			editorTheme: 'monokai'
		}

		this.toggleView.bind(this)
		this.runDabble.bind(this)
	}

	toggleView(view) {
		let state = this.state
		
		switch (view.toLowerCase()) {
			case 'html':
				this.setState({isActiveHTMLView: !state.isActiveHTMLView})
				break
			case 'css':
				this.setState({isActiveCSSView: !state.isActiveCSSView})
				break
			case 'js':
				this.setState({isActiveJSView: !state.isActiveJSView})
				break
			case 'console':
				this.setState({isActiveConsoleView: !state.isActiveConsoleView})
				break
			case 'render':
				this.setState({isActiveRenderView: !state.isActiveRenderView})
				break
		}
	}

	runDabble() {
		let state = this.state

		// Open render view
		if (!state.isActiveRenderView)
			this.setState({isActiveRenderView: true})
	}

	render() {
		let state = this.state,
			activeViewCounter = v => {
				let count = 0

				v.map((v) => {
					if (v)
						count++
				})

				return count
			},
			viewList = [
				state.isActiveHTMLView,
				state.isActiveCSSView,
				state.isActiveJSView,
				state.isActiveConsoleView,
				state.isActiveRenderView
			],
			viewWidth = 100 / activeViewCounter(viewList)

		return (
			<main id="jsdabble">
				<header>
					<img className="logo" title="JSDabble" src={Logo} />
					
					<div className="view-switch btn-group">
						<button onClick={e => {this.toggleView('html')}} className="toggle" active={state.isActiveHTMLView.toString()}>
							<i className="fa fa-html5" /> HTML
						</button>
						<button onClick={e => {this.toggleView('css')}} className="toggle" active={state.isActiveCSSView.toString()}>
							<i className="fa fa-css3" /> CSS
						</button>
						<button onClick={e => {this.toggleView('js')}} className="toggle" active={state.isActiveJSView.toString()}>
							<i className="fa fa-jsfiddle" /> JS
						</button>
					</div>

					<div className="actions">
						<div className="view-switch btn-group">
							<button onClick={e => {this.toggleView('console')}} className="toggle" active={state.isActiveConsoleView.toString()}>
								<i className="fa fa-hashtag" /> Console
							</button>
							<button className="toggle" active="true">
								<i className="fa fa-play-circle-o" /> Render
							</button>
						</div>

						<button onClick={e => this.runDabble()} className="run btn-primary" title="CTRL+R"><i className="fa fa-play" /> Run</button>
					</div>

					{/*<ThemeSwitcher />*/}
				</header>

				<SplitPane split="vertical" minSize={500} defaultSize={900} className="container">

					{/*<HTMLView isActive={state.isActiveHTMLView} theme={state.editorTheme} />*/}

					{/*<CSSView isActive={state.isActiveCSSView} theme={state.editorTheme} />*/}

					<JSView isActive={state.isActiveJSView} theme={state.editorTheme} />

					<SplitPane split="horizontal" defaultSize={500}>
						<RenderView isActive={state.isActiveRenderView} />
						
						<ConsoleView isActive={state.isActiveConsoleView} />
					</SplitPane>
				
				</SplitPane>
			</main>
		)
	}
}