# enzyme-cleanup

## Purpose
To be able to provide a quick utility to unmount enzyme tests.

See [https://github.com/airbnb/enzyme/issues/911](https://github.com/airbnb/enzyme/issues/911) for more information.

## To install

```
npm i -d eynzme-cleanup 
# or yarn add eynzme-cleanup
```

Then, add this to your jest setup script

```js
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { cleanup as enzymeCleanup, makeAdapter } from 'enzyme-cleanup'

// afterEach is a global jest method
afterEach(enzymeCleanup)

configure({ adapter: makeAdapter(Adapter) })
```

If you are not using jest, you can call `enzymeCleanup()` however you see fit.
Can be used with any enzyme adapter.