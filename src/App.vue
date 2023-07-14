<template>
  <div id="app">
    <div class="container">
      <h1 class="my-5">Campeonato Brasileiro - Série A - 2023</h1>

      <FormRegisterGame :teams="teams"/>
      <TableTeams :teams="teams"/>
    </div>
  </div>
</template>

<script>
import TableTeams from "@/components/TableTeams.vue";
import FormRegisterGame from "@/components/FormRegisterGame.vue";
export default {
  name: "App",
  components: {
    FormRegisterGame,
    TableTeams,
  },
  data() {
    return {
      teams: this.$store.getters["teams/getTeams"],
    };
  },
};
</script>
