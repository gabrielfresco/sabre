const fetchPlayers = (dispatch) => {
    let players;
    let promise = fetch('https://football-players-b31f2.firebaseio.com/players.json?print=pretty')
        .then(res => {
            return res.json();
        }).then(data => {
            dispatch({ type: "RENDERPLAYERS", data: data });
        })
}

const initialState = {
    allPlayers: [],
    players: [],
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
        case "FETCHPLAYERS":
            fetchPlayers(action.dispatch);
            return state;
        case "RENDERPLAYERS":
            return {
                players: action.data,
                filters: {},
                allPlayers: action.data
            };
        default:
            return state;
    }
}

export default reducer;