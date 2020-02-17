window.React = require(`react`);
window.PropTypes = require(`prop-types`);
window.renderer = require(`react-test-renderer`);

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({adapter: new Adapter()});

window.Enzyme = Enzyme;
window.Adapter = Adapter;
