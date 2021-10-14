module.exports = function(Homework) {
    let promisified = function(foo, ...args) {
        return new Promise((resolve) => {
            foo(...args, (res) => {
                resolve(res);
            });
        })
    }
    return async function reduce(asyncArray, fn, initialValue, cb) {
        let accumulator = initialValue;
        const _asyncLengthPromise = promisified(asyncArray.length, );
        const _asyncLength = await _asyncLengthPromise;
        let i = 0;
        let loopCondition = await promisified(less,i, _asyncLength);
        for (i; loopCondition;)
        {
            const arrayElement = await promisified(asyncArray.get, i);
            accumulator = await promisified(fn, accumulator, arrayElement, i, asyncArray);
            i = await promisified(add, i, 1);
            loopCondition = await promisified(less, i, _asyncLength);
        }
        cb(accumulator);
    }
}