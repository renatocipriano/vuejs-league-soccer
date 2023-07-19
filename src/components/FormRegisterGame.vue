<template>
  <section>
    <b-row class="mb-4">
      <b-col cols="4">
        <b-button variant="success" @click="showModal = true"
          >New Game</b-button
        >
      </b-col>
    </b-row>

    <b-modal
      v-model="showModal"
      size="lg"
      id="modal-match"
      title="Match"
      ref="modal"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <validation-observer ref="itemRules">
        <b-form>
          <b-row>
            <b-col cols="4">
              <validation-provider
                v-slot="{ errors }"
                name="Team #1"
                :rules="rulesTeam()"
              >
                <b-form-select
                  v-model="team1.team"
                  :options="teams"
                  required
                  value-field="id"
                  text-field="name"
                  class="custom-select w-100 border border-secondary bg-light rounded-1"
                ></b-form-select>
                <span v-if="errors.length" class="d-block text-danger">{{
                  errors[0]
                }}</span>
              </validation-provider>
            </b-col>
            <b-col cols="2">
              <validation-provider
                v-slot="{ errors }"
                name="Score Team #1"
                :rules="rulesScore()"
              >
                <b-form-input
                  type="number"
                  v-model="team1.score"
                  class="custom-select w-100 border border-secondary bg-light rounded-1"
                ></b-form-input>
                <span v-if="errors.length" class="d-block text-danger">{{
                  errors[0]
                }}</span>
              </validation-provider>
            </b-col>
            <b-col cols="2">
              <validation-provider
                v-slot="{ errors }"
                name="Score Team #2"
                :rules="rulesScore()"
              >
                <b-form-input
                  type="number"
                  v-model="team2.score"
                  class="custom-select w-100 border border-secondary bg-light rounded-1"
                ></b-form-input>
                <span v-if="errors.length" class="d-block text-danger">{{
                  errors[0]
                }}</span>
              </validation-provider>
            </b-col>
            <b-col cols="4">
              <validation-provider
                v-slot="{ errors }"
                name="Team #2"
                :rules="rulesTeam()"
              >
                <b-form-select
                  v-model="team2.team"
                  :options="teams"
                  required
                  value-field="id"
                  text-field="name"
                  class="custom-select w-100 border border-secondary bg-light rounded-1"
                ></b-form-select>
                <span v-if="errors.length" class="d-block text-danger">{{
                  errors[0]
                }}</span>
              </validation-provider>
            </b-col>
          </b-row>
        </b-form>
      </validation-observer>
    </b-modal>
  </section>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  name: "FormRegisterGame",
  props: {
    teams: {
      required: true,
    },
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      showModal: false,
      team1: {
        team: null,
        score: null,
      },
      team2: {
        team: null,
        score: null,
      },
    };
  },
  methods: {
    rulesTeam() {
      const ruleTeam = {
        required: true,
      };
      const ruleDifferentTeam = {};
      return { ...ruleTeam, ...ruleDifferentTeam };
    },
    rulesScore() {
      return {
        required: true,
        integer: true,
        min_value: 0,
      };
    },
    checkFormValidity() {
      this.$refs.itemRules.validate().then((success) => {
        if (success) {
          this.$store.dispatch("matches/saveMatch", {
            team1: this.team1,
            team2: this.team2,
          });

          this.resetModal();
        }
      });
    },
    resetModal() {
      this.showModal = false;
      let team = { team: null, score: null };
      this.team1 = { ...team };
      this.team2 = { ...team };
    },
    handleOk(bvModalEvent) {
      bvModalEvent.preventDefault();
      this.handleSubmit();
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return;
      }
    },
  },
};
</script>
