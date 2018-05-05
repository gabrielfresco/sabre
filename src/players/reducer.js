const initialState = {
    allPlayers: [{
        contractUntil: "2019-06-30",
        dateOfBirth: "1989-11-22",
        jerseyNumber: 12,
        name: "Chris Smalling",
        nationality: "England",
        position: "Centre-Back"
    }], 
    players: [{
        contractUntil: "2019-06-30",
        dateOfBirth: "1989-11-22",
        jerseyNumber: 12,
        name: "Chris Smalling",
        nationality: "England",
        position: "Centre-Back"
    }],
    filters: {}
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "SEARCH":
            let filteredPlayers = state.allPlayers;

            if (Object.keys(state.filters).length > 0) {
                filteredPlayers = state.allPlayers.filter((player) => {
                    let matchesFilters = true;
                    if (state.filters.name && state.filters.name !== "") {
                        matchesFilters = player.name.includes(state.filters.name)
                    }

                    if (state.filters.position) {
                        matchesFilters = player.position === state.filters.position;
                    }

                    if (state.filters.jerseyNumber) {
                        matchesFilters = player.jerseyNumber === state.filters.jerseyNumber;
                    }

                    return matchesFilters;
                });
            }
            return {
                players: filteredPlayers,
                filters: state.filters,
                allPlayers: state.allPlayers
            };
        case "HANDLECHANGE":
            let filters = {};
            Object.assign(filters, state.filters);
            filters[action.inputId] = action.inputValue;
            return {
                players: state.players,
                filters: filters,
                allPlayers: state.allPlayers
            };
        default:
            return state;
    }
}

export default reducer;