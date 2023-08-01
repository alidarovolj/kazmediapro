<template>
  <div class="pt-10 pb-10 lg:pb-[15.625rem]">
    <div v-if="hrefURL && getCategory" class="container mx-auto px-4 lg:px-0">
      <a :href='hrefURL'>
        <font-awesome-icon class="mr-1" :icon="['fas', 'arrow-left']"/>
        <span
        >Назад</span
        >
      </a>
      <div class="w-full lg:w-4/5 mx-auto">
        <h1
            class="text-center font-bold text-[2rem] mb-1 lg:mb-0 lg:text-[4rem]"
        >
          {{ getCategory.data.name }}
        </h1>
        <p class="text-center text-sm lg:text-xl mb-[1.375rem]">endcap</p>
        <p
            class="w-full lg:w-1/3 text-center text-sm lg:text-base mx-auto mb-10"
        >
          Следует отметить, что семантический разбор внешних противодействий
          обеспечивает актуальность
        </p>
        <div class="flex justify-between">
          <div
              class="flex flex-wrap justify-between"
              v-for="(item, index) of getCategory.data.cases"
              :key="index"
          >
            <img
                class="w-full lg:w-half mb-3 object-contain object-center"
                :class="{ '!mb-0': item.images.length == ind + 1 }"
                v-for="(photo, ind) of item.images"
                :key="ind"
                :src="photo"
                alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <LoaderTable v-else/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import LoaderTable from "@/components/General/LoaderTable.vue";

export default {
  name: "CasePage",
  data() {
    return {
      hrefURL: null,
    };
  },
  methods: {
    ...mapActions(["category"]),
  },
  computed: {
    ...mapGetters(["getCategory"]),
  },
  components: {
    LoaderTable,
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    this.category(this.$route.params.case);
    const absoluteURL = window.location.origin; // Get the absolute base URL
    this.hrefURL = absoluteURL + "#cases";
  },
};
</script>