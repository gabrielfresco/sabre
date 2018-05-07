import reducer from './reducer'

describe('R E D U C E R', () => {
    it('+++ reducer for SEARCH', () => {
        const allPlayers = [{
            "contractUntil": "2022-06-30",
            "dateOfBirth": "1993-05-13",
            "jerseyNumber": 9,
            "name": "Romelu Lukaku",
            "nationality": "Belgium",
            "position": "Centre-Forward"
        }, {
            "contractUntil": "2019-06-30",
            "dateOfBirth": "1990-11-07",
            "jerseyNumber": 1,
            "name": "David de Gea",
            "nationality": "Spain",
            "position": "Keeper"
        }, {
            "contractUntil": "2021-06-30",
            "dateOfBirth": "1987-02-22",
            "jerseyNumber": 20,
            "name": "Sergio Romero",
            "nationality": "Argentina",
            "position": "Keeper"
        }];
        let state = { filters: { name: "David" }, players: allPlayers, allPlayers: allPlayers };
        state = reducer(state, { type: "SEARCH" })
        expect(state.players).toEqual([{
            "contractUntil": "2019-06-30",
            "dateOfBirth": "1990-11-07",
            "jerseyNumber": 1,
            "name": "David de Gea",
            "nationality": "Spain",
            "position": "Keeper"
        }]);
    });
    it('+++ reducer for RENDERPLAYERS', () => {
        let state = { players: [], allPlayers: [], filters: {} }
        state = reducer(state, {
            type: "RENDERPLAYERS", data: [{
                "contractUntil": "2022-06-30",
                "dateOfBirth": "1993-05-13",
                "jerseyNumber": 9,
                "name": "Romelu Lukaku",
                "nationality": "Belgium",
                "position": "Centre-Forward"
            }]
        });
        expect(state).toEqual({
            players: [{
                "contractUntil": "2022-06-30",
                "dateOfBirth": "1993-05-13",
                "jerseyNumber": 9,
                "name": "Romelu Lukaku",
                "nationality": "Belgium",
                "position": "Centre-Forward"
            }], allPlayers: [{
                "contractUntil": "2022-06-30",
                "dateOfBirth": "1993-05-13",
                "jerseyNumber": 9,
                "name": "Romelu Lukaku",
                "nationality": "Belgium",
                "position": "Centre-Forward"
            }], filters: {}
        })
    });
    it('+++ reducer for HANDLECHANGE', () => {
        let state = { players: [], allPlayers: [], filters: {} }
        state = reducer(state, { type: "HANDLECHANGE", inputId: "name", inputValue: "test" });
        expect(state).toEqual({ players: [], allPlayers: [], filters: { name: "test" } })
    });
});