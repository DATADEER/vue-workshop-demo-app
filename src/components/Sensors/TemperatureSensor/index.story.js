import { storiesOf } from "@storybook/vue";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered/vue";
import TemperatureSensor from ".";
const markdown = `# TemperatureSensor
Simple card component that displays data of a TemperatureSensor.

### Props

| name        | type   |
| ----------- | ------ |
| room_name   | String |
| ip_address  | String |
| mac_address | String |
| temperature | Number |
`;

storiesOf("TemperatureSensor", module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add(
    "docs",
    () => ({
      components: { TemperatureSensor },
      props: {
        room_name: { default: text("Room name:", "Bedroom") },
        ip_address: { default: text("IP-Address:", "127.0.0.1") },
        mac_address: { default: text("MAC-Address:", "00.00.00.00.00.00") },
        temperature: { default: number("Temperature:", 20) }
      },
      template: `<TemperatureSensor
                :room_name="room_name"
                :ip_address="ip_address"
                :mac_address="mac_address"
                :temperature="temperature"
              />`
    }),
    {
      notes: {
        markdown
      }
    }
  );
