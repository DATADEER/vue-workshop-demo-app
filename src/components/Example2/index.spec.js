import { mount } from "@vue/test-utils";

import Example2 from ".";

describe("Example1", () => {
  it("renders h1", () => {
    const wrapper = mount(Example2);
    expect(wrapper.find("h1").is("h1")).toBe(true);
  });
});
