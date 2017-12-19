# composable-higher-order-functions-exercise

## Exercise

The aim of this exercise is to hand roll your own compose function along with curried versions of filter, map and reduce.

Skeleton functions are provided for you inside of the exercise directory. If you get stuck, example implementations are provided under the answers directory.

## How to use this project

Clone the project. Make sure you are running node version 6 or above. Run `npm install`.

Implement the skeleton functions under exercise/index.js.

To test your code, run `npm test`.

## Example usage

Your functions should be curried with data provided last, allowing you to compose them with other functions like I've done below.

For anyone who's used Ramda or lodash-fp, this should look familiar!

```
const toUpperCase = data => data.map(item => item.toUpperCase());

const users = [
    {
        name: 'Andy',
        age: 51,
    },
    {
        name: 'Dave',
        age: 55,
    },
    {
        name: 'Barbara',
        age: 49,
    },
];

const usersOver50ToUpperCase = compose(
    toUpperCase,
    map(user => user.name),
    filter(user => user.age > 50)
)(users);

console.log(usersOver50ToUpperCase.toString()); // ANDY,DAVE
```

If you spot an error, please do raise a PR. Good luck and have fun!
