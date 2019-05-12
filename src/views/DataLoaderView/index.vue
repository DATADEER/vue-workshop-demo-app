<template>
  <Request url="https://jsonplaceholder.typicode.com/users">
    <template v-slot:default="{ isLoading, response, error }">
      <div v-if="isLoading">Loading...</div>
      <ul v-if="!isLoading && response">
        <li :key="i" v-for="(user, i) in response.data">{{ user.name }}</li>
      </ul>
      <div class="error__container" v-if="!isLoading && error">
        <strong class="">Error: {{ error.response.status }}</strong>
        {{ error.response.statusText }}
      </div>
    </template>
  </Request>
</template>

<script>
import Request from "../../components/Request";
export default {
  name: "DataComponent",
  components: { Request }
};
</script>

<style scoped>
li {
  list-style: none;
}

.error__container {
  color: red;
}
</style>
