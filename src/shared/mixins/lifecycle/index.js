export default {
  name: "lifecycleMixin",
  data: function() {
    return {
      title: "The Lifecycle Hooks"
    };
  },
  methods: {
    runSideeffect() {
      return "sideeffect";
    }
  },
  computed: {
    reversedTitle() {
      return this.title
        .split("")
        .reverse()
        .join("");
    }
  }
};
