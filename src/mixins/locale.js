export default {
  name: "global",
  data() {
    return {
      locale: "en"
    };
  },
  methods: {
    setLocale(locale) {
      this.locale = locale;
    }
  },
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
