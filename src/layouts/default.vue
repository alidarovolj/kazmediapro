<template>
  <div>
    <Header />
    <div class="pt-[4.688rem]">
      <slot />
    </div>
    <a target="_blank" href="https://wa.me/77068368746"
      ><img
        class="fixed right-10 bottom-10 blob"
        src="@/assets/img/whatsapp.png"
        alt=""
    /></a>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "DefaultLayout",
  components: {
    Header,
    Footer,
  },
};
</script>
