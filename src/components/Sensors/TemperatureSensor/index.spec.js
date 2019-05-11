import Sensor from ".";
import { shallowMount } from "@vue/test-utils";

const mockedProps = {
  room_name: "Bedroom",
  ip_address: "127.0.0.1",
  mac_address: "00:0d:83:b1:c0:8e",
  temperature: 22
};

describe("Sensor", () => {
  it("renders without crashing", () => {
    expect(() => shallowMount(Sensor)).not.toThrow();
  });

  it("renders props", () => {
    const wrapper = shallowMount(Sensor, { propsData: mockedProps });
    expect(wrapper).toMatchSnapshot();
  });

  describe("renders prop", () => {
    const wrapper = shallowMount(Sensor, { propsData: mockedProps });

    it("room_name", () => {
      expect(wrapper.find("h3").text()).toContain(mockedProps.room_name);
    });

    it("ip_address", () => {
      expect(
        wrapper
          .findAll("div")
          .at(1)
          .text()
      ).toContain(mockedProps.ip_address);
    });

    it("mac_address", () => {
      expect(
        wrapper
          .findAll("div")
          .at(2)
          .text()
      ).toContain(mockedProps.mac_address);
    });

    it("temperature", () => {
      expect(
        wrapper
          .findAll("div")
          .at(3)
          .text()
      ).toContain(mockedProps.temperature);
    });
  });
});
