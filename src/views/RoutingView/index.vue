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
      |
      <router-link :to="{ name: 'RoutingById', params: { id: 1 } }"
        >Property 1 (Name)</router-link
      >
      |
      <router-link
        :to="{
          name: 'RoutingById',
          params: { id: 42 },
          query: { fullData: true }
        }"
        >Property 42 (Name)</router-link
      >
      |
      <router-link :to="{ path: '/routing/42?fullData=true' }"
        >Property 42 (Path)</router-link
      >
      |
      <router-link :to="'/routing/42?fullData=true'"
        >Property 42 (Short Path)</router-link
      >
      <section class="mt-5">
        <h1>Google Analytics Realtime Test</h1>
        <router-link :to="'/routing/42/name/anonymeanaconda'"
          >AnonymeAnaconda</router-link
        >
        |
        <router-link :to="'/routing/42/name/parkendepython'"
          >ParkendePython</router-link
        >
        |
        <router-link :to="'/routing/42/name/convexecobra'"
          >ConvexeCobra</router-link
        >
        |
        <router-link :to="'/routing/42/name/mehrfarbigemamba'"
          >MehrfarbigeMamba</router-link
        >
      </section>
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
    console.log("MOUNTED");
    console.log("router", this.$router);
    console.log("route", this.$route);
    console.log("id", this.$route.params.id);
    console.log("query", this.$route.query);
  },
  beforeRouteEnter(to, from, next) {
    console.group("beforeRouteEnter");
    console.log("to", to);
    console.log("from", from);
    console.groupEnd("beforeRouteEnter");
    next(vm => console.log("vm", vm));
  },
  beforeRouteLeave(to, from, next) {
    console.group("beforeRouteLeave");
    console.log("to", to);
    console.log("from", from);
    console.groupEnd("beforeRouteLeave");
    next(vm => console.log("vm", vm));
  },
  beforeRouteUpdate(to, from, next) {
    console.group("beforeRouteUpdate");
    console.log("to", to);
    console.log("from", from);
    console.groupEnd("beforeRouteUpdate");
    next(vm => console.log("vm", vm));
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
