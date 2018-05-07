import { type } from 'ramda';

import { getAllPlayers, getVisiblePlayers, } from './selectors';

describe('Login Selectors', () => {
    describe('selectAuthenticated', () => {
        it('should return login.authenticated as boolean', () => {
            mockParameters = {
                login: {
                    authenticated: false,
                    authenticating: false,
                },
            };
            const selected = selectAuthenticated.resultFunc(mockParameters.login);
            expect(type(selected)).toEqual('Boolean');
        });
    });
});