const initialState = { players: [] };

function reducer(state = initialState, action) {
    switch (action.type) {
        case "SEARCH":
            return {
                players : [{
                    contractUntil: "2019-06-30",
                    dateOfBirth: "1989-11-22",
                    jerseyNumber: 12,
                    name: "Chris Smalling",
                    nationality: "England",
                    position: "Centre-Back"
                }]
            };
        default:
            return state;
    }
}

export default reducer;