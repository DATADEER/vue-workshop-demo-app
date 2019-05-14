import Vue from "vue";
import Vuetify from "vuetify";

import { mount } from "@vue/test-utils";
import ModalView from ".";
import Modal from "@/components/Modal/Basic";

describe("ModalView", () => {
  let view;
  beforeEach(() => {
    Vue.use(Vuetify);
    view = mount(ModalView);
  });

  it("renders button", () => {
    expect(() => view).not.toThrow();
  });

  describe("displays modal", () => {
    it("not with initial state", () => {
      expect(view.find(Modal).exists()).toBe(false);
    });

    it("opens on button click", () => {
      view.find("Button").trigger("click");
      expect(view.find(Modal).exists()).toBe(true);
    });
  });
});
