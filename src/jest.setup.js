import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import renderer from 'react-test-renderer';
// import {pictures} from '../utils/test-mocks';

window.React = require(`react`);
window.PropTypes = require(`prop-types`);

Enzyme.configure({adapter: new Adapter()});
