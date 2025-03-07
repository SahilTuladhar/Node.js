
const _ = require('lodash')

const items = [1 , [2,[3,[4]]]]

const flattend = _.flattenDeep(items)

console.log(flattend);
