import reactDOM from 'react-dom'

const attachTo = global.document.createElement('div')

export const makeAdapter = Adapter => {
	class ReactAdapterWithMountTracking extends Adapter {
		constructor(...args) {
			super(...args)
		}
		createRenderer(options){
			// Provide a default option on each render for attachTo, being a global div that we can unmount later
			Object.assign(options, { attachTo: options.attachTo || attachTo })
			return Adapter.prototype.createRenderer.call(this, options)
		}
	}

	return new ReactAdapterWithMountTracking()
}

export const cleanup = () => {
	// Unmount react component after each test
	reactDOM.unmountComponentAtNode(attachTo)
}
