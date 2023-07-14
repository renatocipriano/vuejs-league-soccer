<template>
  <b-table striped hover :items="teams" :fields="fields">
    <template #cell(position)="data">
      {{ data.index + 1 }}
    </template>
    <template #cell(goalDifference)="data">
      {{ calculateGoalDifference(data.item) }}
    </template>
  </b-table>
</template>

<script>
export default {
  name: "TableTeams",
  props: {
    teams: {
      required: true,
    },
  },
  data() {
    return {
      fields: [
        { key: "position", label: "#" },
        //{ key: "icon", label: "" },
        { key: "name", label: "Name" },
        { key: "points", label: "P" },
        { key: "matches", label: "M" },
        { key: "goalsMade", label: "GM" },
        { key: "goalsConceded", label: "GC" },
        { key: "goalDifference", label: "GD" },
      ],
    };
  },
  methods: {
    calculateGoalDifference(team) {
      return team.goalsMade - team.goalsConceded;
    },
  },
};
</script>