<template>
  <div id="app">
    <div class="container">
      <h1 class="my-5 text-center">Campeonato Brasileiro - Série A - 2023</h1>

      <FormRegisterGame :teams="teams" />

      <b-row>
        <b-col cols="8">
          <TableTeams :teams="teams" />
        </b-col>
        <b-col cols="4">
          <MatchesResume :teams="teams" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import TableTeams from "@/components/TableTeams.vue";
import FormRegisterGame from "@/components/FormRegisterGame.vue";
import MatchesResume from "@/components/MatchesResume.vue";

export default {
  name: "App",
  components: {
    FormRegisterGame,
    TableTeams,
    MatchesResume,
  },
  data() {
    return {
      teams: this.$store.getters["teams/getTeams"],
    };
  },
};
</script>
