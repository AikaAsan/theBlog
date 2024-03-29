/* eslint-disable @typescript-eslint/no-var-requires */
const createTemplate = require('./templates/createTemplate');

const layer = process.argv[2];
const sliceName = process.argv[3];

process.argv.forEach((value) => console.log(value));

const layers = ['features', 'entities', 'pages'];

if (!layer || !layers.includes(layer)) {
    throw new Error(`please provide layer ${layers.join(' or ')}`);
}

if (!sliceName) {
    throw new Error('Please provide Slice name');
}

createTemplate(layer, sliceName);
