import { shallowMount } from "@vue/test-utils";
import Counter from ".";

describe("Counter", () => {
  it("renders without crashing", () => {
    expect(() => shallowMount(Counter)).not.toThrow();
  });

  describe("logic is correct", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallowMount(Counter);
    });

    it("count reduces onClick on div with '-'", () => {
      expect(wrapper.vm.count).toBe(0);
      wrapper
        .findAll("div")
        .at(1)
        .trigger("click");
      expect(wrapper.vm.count).toBe(-1);
    });

    it("count increases onClick on div with '+'", () => {
      expect(wrapper.vm.count).toBe(0);
      wrapper
        .findAll("div")
        .at(3)
        .trigger("click");
      expect(wrapper.vm.count).toBe(1);
    });
  });
});
