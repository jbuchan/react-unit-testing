import React from 'react';
import ReactDOM from 'react-dom';

// export App components
import { App } from './components/app';

// compile App component in `#app` HTML element
ReactDOM.render( <App name='Ross Geller'/>, document.getElementById( 'app' ) );