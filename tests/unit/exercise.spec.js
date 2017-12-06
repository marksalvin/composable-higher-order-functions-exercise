const test = require('tape');

test('compose', assert => {
    const { compose: target } = require('../../exercise');

    const transformationOne = data => data.toUpperCase();
    const transformationTwo = data => data.concat('bar');
    const transformationThree = data => data.repeat(2);

    const result = target(
        transformationThree,
        transformationTwo,
        transformationOne
    )('foo');

    assert.equal(result, 'FOObarFOObar', 'functions all called on data and in correct order');

    assert.end();
});

test('filter', assert => {
    const { filter: target } = require('../../exercise');

    const data = [
        {
            name: 'foo',
            someProp: true,
        },
        {
            name: 'bar',
            someProp: false,
        },
        {
            name: 'baz',
            someProp: true,
        },
    ];

    const expectedResult = [
        {
            name: 'foo',
            someProp: true,
        },
        {
            name: 'baz',
            someProp: true,
        },
    ];

    const result = target(x => x.someProp)(data);

    assert.deepEqual(result, expectedResult);

    assert.end();
});

test('map', assert => {
    const { map: target } = require('../../exercise');

    const data = [
        {
            name: 'foo',
            someProp: true,
        },
        {
            name: 'bar',
        },
        {
            name: 'baz',
            someProp: true,
        },
    ];

    const expectedResult = [
        {
            name: 'foo',
            someProp: true,
        },
        {
            name: 'bar',
            someProp: false,
        },
        {
            name: 'baz',
            someProp: true,
        },
    ];

    const result = target(x => (!x.someProp ? Object.assign({}, x, { someProp: false }) : x))(data);

    assert.deepEqual(result, expectedResult);

    assert.end();
});

test('reduce', assert => {
    const { reduce: target } = require('../../exercise');

    const data = [
        {
            name: 'foo',
            someProp: true,
        },
        {
            name: 'bar',
            someProp: false,
        },
        {
            name: 'baz',
            someProp: true,
        },
    ];

    const expectedResult = {
        foo: {
            someProp: true,
        },
        bar: {
            someProp: false,
        },
        baz: {
            someProp: true,
        },
    };

    const result = target((acc, value) => (
        Object.assign(
            {},
            acc,
            {
                [value.name]: {
                    someProp: value.someProp,
                },
            }
        )
    ), {})(data);

    assert.deepEqual(result, expectedResult);

    assert.end();
});
