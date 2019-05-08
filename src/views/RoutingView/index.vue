<template>
  <section>
    <h1><strong>Pfad:</strong> {{ $route.fullPath }}</h1>
    <h1>
      <strong>Params:</strong>
      {{ routeParams }}
    </h1>
    <h1>
      <strong>Query:</strong>
      {{ routeQuery }}
    </h1>
    <h1>
      <strong>Name:</strong>
      {{ routeName }}
    </h1>
    <section>
      <article class="param__wrapper">
        <div class="param__input">
          <v-text-field
            label="Id"
            type="number"
            v-model="paramId"
            @change="setParamId"
          />
        </div>
      </article>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <span> | </span>
      <router-link :to="{ name: 'RoutingById', params: { id: 42 } }"
        >Property 42</router-link
      >
    </section>
  </section>
</template>

<script>
import isEmpty from "lodash/isEmpty";

export default {
  name: "Routing",
  data() {
    return {
      paramId: this.$route.params.id
    };
  },
  methods: {
    setParamId() {
      this.$router.push({
        name: "RoutingById",
        params: { id: this.paramId }
      });
    }
  },
  mounted() {
    console.log("router", this.$router);
    console.log("route", this.$route);
    console.log("id", this.$route.params.id);
  },
  computed: {
    routeParams() {
      return isEmpty(this.$route.params) ? "None" : this.$route.params;
    },
    routeQuery() {
      return isEmpty(this.$route.query) ? "None" : this.$route.query;
    },
    routeName() {
      return isEmpty(this.$route.name) ? "None" : this.$route.name;
    }
  }
};
</script>

<style scoped>
.param__wrapper {
  display: flex;
  justify-content: center;
}
.param__input {
  width: 30%;
}
</style>
