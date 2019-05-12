<template>
  <section>
    <div class="tab-menu__container">
      <ul class="tab__list">
        <!-- TODO: Implement navigation -->
        <!-- Hint: https://vuejs.org/v2/guide/class-and-style.html#Object-Syntax -->
        <li :key="tab" v-for="tab in tabs">
          <a class="tab">
            {{ tab }}
          </a>
        </li>
      </ul>
    </div>
    <div class="currentTab__container">
      <!-- TODO: Implement component tag -->
    </div>
  </section>
</template>

<script>
import TabMotion from "./Tabs/TabMotion";
import TabTemperature from "./Tabs/TabTemperature";
import TabHouse from "./Tabs/TabHouse";

export default {
  name: "IsComponent",
  components: { TabMotion, TabTemperature, TabHouse }, // eslint-disable-line
  data() {
    return {
      currentTab: "House",
      tabs: ["House", "Temperature", "Motion"]
    };
  },
  computed: {
    currentTabName: function() {
      return "Tab" + this.currentTab;
    }
  }
};
</script>

<style scoped>
.currentTab__container {
  background-color: beige;
  display: inline-block;
  padding: 2rem;
}

.tab-menu__container {
  margin-bottom: 2rem;
}

section {
  margin-top: 2rem;
}

li {
  margin-right: 0.5rem;
  display: inline-block;
}

.tab {
  border: 2px solid gray;
  padding: 0.5rem 1rem;
}

.active {
  background-color: gray;
  color: white;
  padding: 0.5rem 1rem;
}
</style>
