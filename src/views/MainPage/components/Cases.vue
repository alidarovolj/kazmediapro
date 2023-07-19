<template>
  <div ref="cases" id="cases">
    <div class="container mx-auto px-4 lg:px-0 pl-4 relative pt-14 pb-20 z-20">
      <div class="flex justify-end">
        <div class="w-full mb-6 lg:mb-[3.438rem]">
          <div class="flex justify-end">
            <div class="w-1/2">
              <Heading heading="Кейсы" line="right" />
            </div>
          </div>
        </div>
      </div>
      <div v-if="getCategoryCases">
        <div v-for="(item, index) of getCategoryCases.data" :key="index">
          <p class="text-[2.75rem] font-bold uppercase">
            {{ item.name }}
          </p>
          <router-link :to="{ name: 'CasePage', params: { case: qwerty.id } }" v-for="(qwerty, ind) of item.cases" :key="ind" class="relative h-[32.5rem] w-full">
            <img
              class="w-full h-full object-cover"
              :src="qwerty.images[0]"
              alt=""
            />
            <div
              class="bg-black bg-opacity-40 w-full h-full absolute left-0 top-0"
            ></div>
            <div
              class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
            >
              <p class="text-[4rem] font-bold text-center">{{ qwerty.name }}</p>
              <p class="text-4xl font-bold w-max text-center">
                {{ qwerty.description }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/General/Heading.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Cases",
  components: {
    Heading,
  },
  methods: {
    ...mapActions(["categoryCases"]),
  },
  computed: {
    ...mapGetters(["getCategoryCases"]),
  },
  mounted() {
    this.categoryCases();
  },
};
</script>