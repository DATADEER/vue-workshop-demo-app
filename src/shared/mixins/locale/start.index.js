export default {
  name: "global",
  //TODO: Implement locale property
  //TODO: Implement setLocale method
  computed: {
    localeFlag() {
      if (this.locale === "de") {
        return "🇩🇪";
      } else {
        return "🇬🇧";
      }
    }
  }
};
