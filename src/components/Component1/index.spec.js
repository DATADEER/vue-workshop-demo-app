import { mount } from "@vue/test-utils";

import Component1 from ".";

describe("Component1", () => {
  it("renders h1", () => {
    const wrapper = mount(Component1);
    expect(wrapper.find("h1").is("h1")).toBe(true);
  });
});
