<template>
  <section>
    <h2 class="text-center">Resume</h2>

    <ul>
      <li v-for="match in matches" :key="match.createdAt">
        <span v-text="formatTeamLabel(match.teams.team1, true)"></span>
        <span v-text="formatTeamLabel(match.teams.team2, false)"></span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "MatchesResume",
  props: {
    teams: {
      required: true,
    },
  },
  computed: {
    matches() {
      return this.$store.getters["matches/getMatches"];
    },
  },
  methods: {
    formatTeamLabel(team, left = true) {
      team;
      left;
      return "Lorem ipsum ";
    },
  },
};
</script>
