<template>
  <div ref="cases" id="cases">
    <div class="container mx-auto px-4 lg:px-0 pl-4 relative pt-14 pb-20 z-20">
      <div class="flex justify-end mb-6 lg:mb-[3.438rem]">
        <div class="w-full">
          <div class="flex justify-start lg:justify-end">
            <div class="w-1/2">
              <Heading heading="Кейсы" line="right" />
            </div>
          </div>
        </div>
      </div>
      <div v-if="getCategoryCases">
        <div v-for="(item, index) of getCategoryCases.data" :key="index">
          <p
            class="w-4/5 mx-auto text-xl lg:text-[2.75rem] mb-2 lg:mb-6 font-bold uppercase"
            :class="{ 'text-right': index % 2 == 1 }"
          >
            {{ item.name }}
          </p>
          <div class="flex lg:hidden w-screen overflow-x-auto mb-16">
            <router-link
              :to="{ name: 'CasePage', params: { case: qwerty.id } }"
              v-for="(qwerty, ind) of item.cases"
              :key="ind"
              class="relative flex h-[21.25rem] lg:h-[25.5rem]"
              :class="{ 'mb-0': item.cases.length == ind + 1 }"
            >
              <div
                class="relative mr-3 w-64 lg:w-full"
                v-for="(it, inde) of qwerty.images"
                :key="inde"
              >
                <img class="w-full h-full object-contain" :src="it" alt="" />
                <div
                  class="bg-black bg-opacity-40 w-full h-full absolute left-0 top-0"
                ></div>
                <div
                  class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
                >
                  <p
                    class="text-[1.75rem] lg:text-[2.5rem] font-bold text-center"
                  >
                    {{ qwerty.name }}
                  </p>
                  <p class="text-base lg:text-2xl font-bold w-max text-center">
                    {{ qwerty.description }}
                  </p>
                </div>
              </div>
            </router-link>
          </div>
          <div class="hidden lg:block lg:h-[25.5rem]">
            <carousel class="bg-none h-full" :items-to-show="1">
              <slide
                class="h-full relative flex items-center"
                v-for="(slide, ind) in item.cases"
                :key="ind"
              >
                <router-link
                  :to="{ name: 'CasePage', params: { case: item.id } }"
                >
                  <div class="h-full">
                    <img
                      class="h-full object-contain"
                      :src="slide.images[0]"
                      alt=""
                    />
                  </div>
                  <div
                    class="bg-black bg-opacity-40 w-full h-full absolute left-0 top-0"
                  ></div>
                  <div
                    class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
                  >
                    <p
                      class="text-[1.75rem] lg:text-[2.5rem] font-bold text-center"
                    >
                      {{ slide.name }}
                    </p>
                    <p
                      class="text-base lg:text-2xl font-bold w-max text-center"
                    >
                      {{ slide.description }}
                    </p>
                  </div>
                </router-link>
              </slide>

              <template #addons>
                <navigation />
              </template>
            </carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import Heading from "@/components/General/Heading.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Cases",
  components: {
    Heading,
    Carousel,
    Slide,
    Pagination,
    Navigation,
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

<style>
.carousel__viewport,
.carousel__track {
  height: 100%;
}
.carousel__icon {
  background: white;
}
</style>