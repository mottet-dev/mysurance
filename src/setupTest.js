/*  
    Configure Enzyme to work with React 16 
    Is called before every test
*/

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

export default configure({ adapter: new Adapter() });