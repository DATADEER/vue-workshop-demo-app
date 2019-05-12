<template>
  <section>
    <!-- TODO: apply custom scroll directive on "Important Button" -->
    <Button>Important Button</Button>
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
//TODO: import scroll directive
import Button from "@/components/Buttons/Button";

//TODO: register scroll directive in component
export default {
  name: "CustomDirective",
  components: { Button }
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
