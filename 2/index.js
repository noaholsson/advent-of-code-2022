const fs = require('fs');
const path = require('path');

const scores = {AX: 4, AY: 8, AZ: 3, BX: 1, BY: 5, BZ: 9, CX: 7, CY: 2, CZ: 6}
const scores2 = {AX: 3, AY: 4, AZ: 8, BX: 1, BY: 5, BZ: 9, CX: 2, CY: 6, CZ: 7}

console.log(fs.readFileSync(path.join(__dirname, 'data.txt'), 'utf8').split('\n').reduce((acc, line) => acc + scores2[line.replace(' ', '')], 0));
