<template>
  <div ref="cases" id="cases">
    <div
        class="container mx-auto px-4 lg:px-0 pl-4 relative pt-[3.75rem] lg:pt-14 pb-20 z-20"
    >
      <div class="flex justify-end mb-6 lg:mb-[3.438rem]">
        <div class="w-full">
          <div class="flex justify-start lg:justify-end">
            <div class="w-1/2">
              <Heading class="!mb-0" :heading="$t('mainPage.cases.header')" line="right"/>
            </div>
          </div>
        </div>
      </div>
      <div v-if="getCategoryCases">
        <div class="mb-0" :class="{ ' mb-8 lg:!mb-16' : getCategoryCases.data.length != index + 1 }"
             v-for="(item, index) of getCategoryCases.data" :key="index">
          <p
              class="w-4/5 mx-auto text-xl lg:text-[2.75rem] mb-2 lg:mb-6 font-bold uppercase dark:text-white"
              :class="{ 'text-right': index % 2 == 1 }"
          >
            {{ item.name }}
          </p>
          <div class="flex lg:hidden w-screen overflow-x-auto mb-0 lg:mb-16">
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
                <img class="w-full h-full object-contain" :src="it" alt=""/>
                <div
                    class="bg-black bg-opacity-40 w-full h-full absolute left-0 top-0"
                ></div>
                <div
                    class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
                >
                  <p
                      class="text-[1.55rem] lg:text-[2.2rem] font-bold text-center"
                  >
                    {{ qwerty.name }}
                  </p>
                  <p class="text-base lg:text-xl font-bold w-max text-center">
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
                <navigation/>
              </template>
            </carousel>
          </div>
        </div>
      </div>
      <LoaderTable v-else/>
    </div>
    <div ref="scrollAnchor" style="position: absolute; top: 0"></div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import {Carousel, Navigation, Pagination, Slide} from "vue3-carousel";
import Heading from "@/components/General/Heading.vue";
import LoaderTable from "@/components/General/LoaderTable.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Cases",
  components: {
    Heading,
    Carousel,
    Slide,
    Pagination,
    Navigation,
    LoaderTable,
  },
  data() {
    return {
      isDataFetched: false, // Track if the data has been fetched and rendered
    };
  },
  methods: {
    ...mapActions(["categoryCases"]),
    // Method to handle slide scrolling after route change
    handleRouteChange() {
      const target = this.$route.params.case; // Fetch the target section ID from the route
      if (target && this.isDataFetched) { // Scroll only if data is fetched and rendered
        this.$nextTick(() => {
          const targetElement = document.getElementById(target);
          if (targetElement) {
            targetElement.scrollIntoView({behavior: "smooth"});
          }
        });
      }
    },
  },
  computed: {
    ...mapGetters(["getCategoryCases"]),
  },
  async mounted() {
    await this.categoryCases(); // Wait for the data to be fetched and updated
    this.isDataFetched = true; // Mark data as fetched
  },
  watch: {
    getCategoryCases: {
      immediate: true, // Trigger the watcher immediately on component mount
      handler() {
        // When data is updated, call the handleRouteChange() method
        this.handleRouteChange();
      },
    },
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