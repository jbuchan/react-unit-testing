import { add, divide, multiply } from './math';

// add test suit
describe( 'add() tests', () => {
    // test addition of two numbers
    test( 'add(1,2) to be 3', () => {
        expect( add(1, 2) ).toBe(3);
    } );
} );

// divide test suit
describe( 'divide() tests', () => {

    // test division of two numbers
    test( 'divide(4,2) to be 2', () => {
        expect( divide(4, 2) ).toBe(2);
    } );

    // division by 0 should return null
    test( 'divide(4,0) to be null', () => {
        expect( divide(4, 0) ).toBeNull();
    } );
} );

// multiply test suit
describe( 'multiply() tests', () => {

    // callback approach
    test( 'multiply(4,2) to be 8', ( done ) => {
        multiply(4, 2).then( result => {
            expect( result ).toBe(8);
            done(); // done callback
        } );
    } );

    // promise approach
    test( 'multiply(2,3) to be 6', () => {
        return multiply(2, 3).then( result => {
            expect( result ).toBe(6);
        } );
    } );

    // async/await approach
    test( 'multiply(2,0) to be 0', async () => {
        const result = await multiply(2, 0);
        expect( result ).toBe(0);
    } );
} );