let Team = (name, icon = "#") => {
    return {
        id: name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, "-"),
        name: name,
        icon: icon,
        matches: 0,
        victories: 0,
        defeats: 0,
        ties: 0,
        points: 0,
        goalsMade: 0,
        goalsConceded: 0,
    }
};
export const state = {
    teams: [
        Team("América-MG"),
        Team("Athletico-PR"),
        Team("Atlético-MG"),
        Team("Bahia"),
        Team("Botafogo"),
        Team("Bragantino"),
        Team("Corinthians"),
        Team("Coritiba"),
        Team("Cruzeiro"),
        Team("Cuiabá"),
        Team("Flamengo"),
        Team("Fluminense"),
        Team("Fortaleza"),
        Team("Goiás"),
        Team("Grêmio"),
        Team("Internacional"),
        Team("Palmeiras"),
        Team("Santos"),
        Team("São Paulo"),
        Team("Vasco"),
    ]
}
