let Match = (teams, victory, defeat, tie) => {
    return {
        teams: teams,
        victory: victory,
        defeat: defeat,
        tie: tie,
        createdAt: new Date().valueOf(),
    }
};
export const mutations = {
    SAVE_MATCH(state, payload) {
        let team1 = payload.team1,
            team2 = payload.team2,
            victory = null,
            defeat = null,
            tie = null;

        if (team1.score > team2.score) {
            victory = team1
            defeat = team2
        }
        else if (team2.score > team1.score) {
            victory = team2
            defeat = team1
        }
        else {
            tie = true
        }
        state.matches.push(Match(payload, victory, defeat, tie));
    }
}