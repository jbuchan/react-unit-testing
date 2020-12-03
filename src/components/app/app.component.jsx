import React, { useState } from 'react';

/**
 * @desc Export App component
 */
export const App = ( props ) => {
    const [ count, setCount ] = useState( 0 );

    return (
        <div className='profile'>
            <h1 className='profile__name'>{ props.name }</h1>
            <h2 className='profile__count'>count: { count }</h2>
            <button
                className='profile__increment__button'
                onClick={ () => setCount( count + 1 ) }
                disabled={ count === 3 }
            >Increment</button>
        </div>
    );
};
