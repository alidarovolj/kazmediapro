<template>
  <div>
    <Hero />
    <About />
    <Services />
    <Touch />
    <Cases />
    <Team />
    <Message />
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Services from "./components/Services.vue";
import Touch from "./components/Touch.vue";
import Team from "./components/Team.vue";
import Message from "./components/Message.vue";
import Cases from "./components/Cases.vue";

export default {
  name: "MainPage",
  components: {
    Hero,
    About,
    Services,
    Touch,
    Team,
    Message,
    Cases,
  },
  setup() {
    useMeta({ title: "Главная" });
  },
};
</script>
