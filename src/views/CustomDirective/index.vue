<template>
  <section>
    <Button v-scroll:right.fixed="40">Important Button</Button>
    <section class="text__wrapper">
      <article class="text__container">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, autem
        deleniti dicta doloremque enim eum exercitationem explicabo facere fuga,
        hic laudantium omnis provident quia repellat suscipit temporibus velit
        veniam voluptate.Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Aliquam, autem deleniti dicta doloremque enim eum exercitationem
        explicabo facere fuga, hic laudantium omnis provident quia repellat
        suscipit temporibus velit veniam voluptate.Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Aliquam, autem deleniti dicta doloremque
        enim eum exercitationem explicabo facere fuga, hic laudantium omnis
        provident quia repellat suscipit temporibus velit veniam voluptate.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, autem
        deleniti dicta doloremque enim eum exercitationem explicabo facere fuga,
        hic laudantium omnis provident quia repellat suscipit temporibus velit
        veniam voluptate.Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Aliquam, autem deleniti dicta doloremque enim eum exercitationem
        explicabo facere fuga, hic laudantium omnis provident quia repellat
        suscipit temporibus velit veniam voluptate.Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Aliquam, autem deleniti dicta doloremque
        enim eum exercitationem explicabo facere fuga, hic laudantium omnis
        provident quia repellat suscipit temporibus velit veniam voluptate.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, autem
        deleniti dicta doloremque enim eum exercitationem explicabo facere fuga,
        hic laudantium omnis provident quia repellat suscipit temporibus velit
        veniam voluptate.Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Aliquam, autem deleniti dicta doloremque enim eum exercitationem
        explicabo facere fuga, hic laudantium omnis provident quia repellat
        suscipit temporibus velit veniam voluptate.Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Aliquam, autem deleniti dicta doloremque
        enim eum exercitationem explicabo facere fuga, hic laudantium omnis
        provident quia repellat suscipit temporibus velit veniam voluptate.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, autem
        deleniti dicta doloremque enim eum exercitationem explicabo facere fuga,
        hic laudantium omnis provident quia repellat suscipit temporibus velit
        veniam voluptate.Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Aliquam, autem deleniti dicta doloremque enim eum exercitationem
        explicabo facere fuga, hic laudantium omnis provident quia repellat
        suscipit temporibus velit veniam voluptate.Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Aliquam, autem deleniti dicta doloremque
        enim eum exercitationem explicabo facere fuga, hic laudantium omnis
        provident quia repellat suscipit temporibus velit veniam voluptate.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, autem
        deleniti dicta doloremque enim eum exercitationem explicabo facere fuga,
        hic laudantium omnis provident quia repellat suscipit temporibus velit
        veniam voluptate.Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Aliquam, autem deleniti dicta doloremque enim eum exercitationem
        explicabo facere fuga, hic laudantium omnis provident quia repellat
        suscipit temporibus velit veniam voluptate.Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Aliquam, autem deleniti dicta doloremque
        enim eum exercitationem explicabo facere fuga, hic laudantium omnis
        provident quia repellat suscipit temporibus velit veniam voluptate.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, autem
        deleniti dicta doloremque enim eum exercitationem explicabo facere fuga,
        hic laudantium omnis provident quia repellat suscipit temporibus velit
        veniam voluptate.Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Aliquam, autem deleniti dicta doloremque enim eum exercitationem
        explicabo facere fuga, hic laudantium omnis provident quia repellat
        suscipit temporibus velit veniam voluptate.Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Aliquam, autem deleniti dicta doloremque
        enim eum exercitationem explicabo facere fuga, hic laudantium omnis
        provident quia repellat suscipit temporibus velit veniam voluptate.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, autem
        deleniti dicta doloremque enim eum exercitationem explicabo facere fuga,
        hic laudantium omnis provident quia repellat suscipit temporibus velit
        veniam voluptate.Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Aliquam, autem deleniti dicta doloremque enim eum exercitationem
        explicabo facere fuga, hic laudantium omnis provident quia repellat
        suscipit temporibus velit veniam voluptate.Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Aliquam, autem deleniti dicta doloremque
        enim eum exercitationem explicabo facere fuga, hic laudantium omnis
        provident quia repellat suscipit temporibus velit veniam voluptate.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, autem
        deleniti dicta doloremque enim eum exercitationem explicabo facere fuga,
        hic laudantium omnis provident quia repellat suscipit temporibus velit
        veniam voluptate.Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Aliquam, autem deleniti dicta doloremque enim eum exercitationem
        explicabo facere fuga, hic laudantium omnis provident quia repellat
        suscipit temporibus velit veniam voluptate.Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Aliquam, autem deleniti dicta doloremque
        enim eum exercitationem explicabo facere fuga, hic laudantium omnis
        provident quia repellat suscipit temporibus velit veniam voluptate.
      </article>
    </section>
  </section>
</template>

<script>
import { scrollDirective } from "@/shared/directives/scroll.js";
import Button from "@/components/Buttons/Button";

export default {
  name: "CustomDirective",
  components: { Button },
  directives: {
    scroll: scrollDirective
  }
};
</script>

<style scoped>
.text__wrapper {
  display: flex;
  justify-content: center;
}
.text__container {
  width: 20%;
}
</style>
