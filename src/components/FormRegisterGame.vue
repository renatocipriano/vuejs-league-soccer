<template>
  <section>
    <b-row>
      <b-col cols="2">
        <b-button variant="success">New Game</b-button>
      </b-col>
    </b-row>
    <b-modal v-model="showModal" size="lg" id="modal-match" title="Match">
      <b-form>
        <b-row>
          <b-col cols="4">
            <b-form-select
              v-model="team1.team"
              :options="teams"
              required
              value-field="id"
              text-field="name"
              class="custom-select w-100"
            ></b-form-select>
          </b-col>
          <b-col cols="2">
            <b-form-input v-model="team1.score"></b-form-input>
          </b-col>
          <b-col cols="2">
            <b-form-input v-model="team2.score"></b-form-input>
          </b-col>
          <b-col cols="4">
            <b-form-select
              v-model="team2.team"
              :options="teams"
              required
              value-field="id"
              text-field="name"
              class="custom-select w-100"
            ></b-form-select>
          </b-col>
        </b-row>
      </b-form>
    </b-modal>
  </section>
</template>

<script>
export default {
  name: "FormRegisterGame",
  props: {
    teams: {
      required: true,
    },
  },
  data() {
    return {
      showModal: true,
      team1: {
        team: null,
        score: 0,
      },
      team2: {
        team: null,
        score: 0,
      },
    };
  },
};
</script>
