import { storiesOf } from "@storybook/vue";
import TemperatureSensor from "@/components/Sensors/TemperatureSensor/index.story.vue";

storiesOf("TemperatureSensor", module).add(
  "with customizable props",
  () => TemperatureSensor
);
