<template>
  <div>
    <Header />
    <div class="pt-[4.688rem]">
      <slot />
    </div>
    <img
      class="fixed right-10 bottom-10 blob"
      src="@/assets/img/whatsapp.png"
      alt=""
    />
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
  