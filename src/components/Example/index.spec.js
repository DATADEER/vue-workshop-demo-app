import { mount } from "@vue/test-utils";

import Example1 from ".";

describe("Example1", () => {
  it("renders h1", () => {
    const wrapper = mount(Example1);
    expect(wrapper.find("h1").is("h1")).toBe(true);
  });
});
