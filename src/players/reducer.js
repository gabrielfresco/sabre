const initialState = {
    allPlayers: [],
    players: [],
    filters: { areValid: true },
    hasErrors: false
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
                        matchesFilters = player.jerseyNumber === parseInt(state.filters.jerseyNumber, 0);
                    }

                    return matchesFilters;
                });
            }
            return {
                players: filteredPlayers,
                filters: state.filters,
                allPlayers: state.allPlayers,
                hasErrors: false
            };
        case "HANDLECHANGE":
            let filters = {};
            const numberInputMaxValue = 40;
            const numberInputMinValue = 18;

            Object.assign(filters, state.filters);
            debugger
            if (action.inputId === "jerseyNumber" && action.inputValue) {
                if (parseInt(action.inputValue) > numberInputMaxValue || parseInt(action.inputValue) < numberInputMinValue) {
                    filters.areValid = false;
                } else {
                    filters.areValid = true;                    
                }                
            }

            filters[action.inputId] = action.inputValue;
            return {
                players: state.players,
                filters: filters,
                allPlayers: state.allPlayers,
                hasErrors: false
            };
        case "RENDERPLAYERS":
            return {
                players: action.data,
                filters: state.filters,
                allPlayers: action.data,
                hasErrors: false
            };
        case "FETCH_ERROR":
            return {
                players: [],
                filters: state.filters,
                allPlayers: [],
                hasErrors: true,
                error: action.error
            };
        default:
            return state;
    }
}

export default reducer;