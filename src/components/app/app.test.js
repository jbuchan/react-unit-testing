import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';

import { App } from './app.component';


// before each test, create `div` element
beforeEach( () => {
    const elem = document.createElement( 'div' ); // <div>...
    elem.setAttribute( 'id', 'app' ); // <div id="app">...
    document.body.appendChild( elem ); // <body><div>...
} );

// after each test, remove `div` element
afterEach( () => {
    const elem = document.getElementById( 'app' );
    unmountComponentAtNode( elem ); // unmount React component
    elem.remove(); // remove
} );

// test `App` component with `name` prop
test( 'App component with "Monica Geller"', () => {
    const elem = document.getElementById( 'app' ); // #app

    // render and prepare
    act( () => {
        render( <App name='Monica Geller'/>, elem );
    } );

    const h1Elem = elem.querySelector( 'h1' ); // <h1>

    // check for `<h1>` element content
    expect( h1Elem ).toHaveTextContent( 'Monica Geller' );
} );

// test `App` component with mouse clicks
test( 'mouse click events', () => {
    const elem = document.getElementById( 'app' ); // #app

    // render and prepare
    act( () => {
        render( <App name='Monica Geller'/>, elem );
    } );

    // access `h2` and `button` elements
    const h2Elem = elem.querySelector( 'h2' ); // <h2>
    const btnElem = elem.querySelector( 'button' ); // <button>

    // assert for initial count value and button state
    expect( h2Elem ).toHaveTextContent( 'count: 0' );
    expect( btnElem ).not.toBeDisabled();

    // dispatch a mouse click event and assert again
    btnElem.dispatchEvent(new MouseEvent('click',{bubbles:true}));
    expect( h2Elem ).toHaveTextContent( 'count: 1' );
    expect( btnElem ).not.toBeDisabled();
    
    // dispatch two mouse click event and assert again
    btnElem.dispatchEvent(new MouseEvent('click',{bubbles:true}));
    btnElem.dispatchEvent(new MouseEvent('click',{bubbles:true}));
    expect( h2Elem ).toHaveTextContent( 'count: 3' );
    expect( btnElem ).toBeDisabled();
} );