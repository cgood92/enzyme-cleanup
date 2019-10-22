import reactDOM from 'react-dom'

const attachments = []

export const makeAdapter = Adapter => {
	class ReactAdapterWithMountTracking extends Adapter {
		constructor(...args) {
			super(...args)
		}
		createRenderer(options){
			const attachTo = options.attachTo || global.document.createElement('div')

			attachments.push(attachTo)

			// Provide a default option on each render for attachTo, being a global div that we can unmount later
			const newOptions = Object.assign({}, options, { attachTo })

			return Adapter.prototype.createRenderer.call(this, newOptions)
		}
	}

	return new ReactAdapterWithMountTracking()
}

export const cleanup = () => {
	attachments.forEach(node => {
		// Unmount react component after each test
		reactDOM.unmountComponentAtNode(node)
	})
}
