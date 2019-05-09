import { storiesOf } from "@storybook/vue";
import SensorCardStorie from "../components/Sensors/SensorCard/index.story.vue";

storiesOf("SensorCard", module).add(
  "As a customizable component",
  () => SensorCardStorie
);
