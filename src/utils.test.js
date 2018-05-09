import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { calculateAge } from './utils'
Enzyme.configure({ adapter: new Adapter() });

describe('Utils Test', () => {
    it('Calculate age function', () => {
        expect(calculateAge(new Date())).toBe(0);
        expect(calculateAge(new Date("1988-07-13"))).toBe(29);
        expect(calculateAge(new Date("asda"))).toBe(NaN);
    });
});