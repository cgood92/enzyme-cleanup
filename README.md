# enzyme-cleanup

## Purpose
To be able to provide a quick utility to unmount [enzyme](https://airbnb.io/enzyme/) tests.

See [this issue](https://github.com/airbnb/enzyme/issues/911) for more information.

## To install

```bash
npm i -D eynzme-cleanup 
# or yarn add -D eynzme-cleanup
```

Then, add this to your jest [setup script](https://jestjs.io/docs/en/configuration.html#setupfilesafterenv-array).

```js
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { cleanup, makeAdapter } from 'enzyme-cleanup'

// afterEach is a global jest method
afterEach(cleanup)

configure({ adapter: makeAdapter(Adapter) })
```

If you are not using [jest](https://jestjs.io/), you can call `enzymeCleanup()` however you see fit.

Can be used with any [enzyme adapter](https://airbnb.io/enzyme/docs/installation/#working-with-react-16).

Works on [shallow](https://airbnb.io/enzyme/docs/api/shallow.html), [mount](https://airbnb.io/enzyme/docs/api/mount.html), or [render](https://airbnb.io/enzyme/docs/api/render.html) wrappers of enzyme.
