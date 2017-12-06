const compose = (...fns) => data => fns.reduceRight((acc, value) => value(acc), data);

const filter = callbackFn => data => data.filter(callbackFn);

const map = callbackFn => data => data.map(callbackFn);

const reduce = (callbackFn, initialAcc) => data => data.reduce(callbackFn, initialAcc);

module.exports = {
    compose,
    filter,
    map,
    reduce,
};
