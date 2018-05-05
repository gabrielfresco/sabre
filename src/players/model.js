export let Player = {
    contractUntil: String,
    dateOfBirth: String,
    jerseyNumber: Number,
    name: String,
    nationality: String,
    position: String
};

export const customFilter = (players, filters) => {
    if (Object.keys(filters).length > 0) {
        return players.filter((player) => {
            let matchesFilters = false;
            if (filters.name) {
                matchesFilters = player.name.includes(filters.name)
            }

            if (filters.position) {
                matchesFilters = player.position === filters.position;
            }

            if (filters.jerseyNumber) {
                matchesFilters = player.jerseyNumber === filters.jerseyNumber;
            }

            return matchesFilters;
        });
    } else {
        return players;
    }
};