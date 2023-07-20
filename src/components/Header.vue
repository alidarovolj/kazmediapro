<template>
  <div
    class="header fixed w-full z-50 top-0 left-0"
    style="box-shadow: 0px 4px 6px -3px rgba(0, 0, 0, 0.25)"
  >
    <div class="w-full bg-white dark:bg-darkBg dark:text-white">
      <div class="container mx-auto px-4 lg:px-0">
        <div class="flex items-center justify-between py-[0.875rem]">
          <font-awesome-icon
            @click="menu = !menu"
            class="block lg:hidden text-3xl"
            :icon="['fas', 'bars']"
          />
          <img
            @click="$router.push({ name: 'MainPage' })"
            class="w-36 lg:w-56 block dark:hidden cursor-pointer"
            src="@/assets/img/logo.png"
            alt=""
          />
          <img
            @click="$router.push({ name: 'MainPage' })"
            class="w-36 lg:w-56 hidden dark:block cursor-pointer"
            src="@/assets/img/darkLogo.png"
            alt=""
          />
          <div class="flex items-center">
            <div class="flex items-center mr-3">
              <div class="hidden lg:flex">
                <a class="px-7 transition-all uppercase" href="#about">{{
                  $t("header.links.about")
                }}</a>

                <a class="px-7 transition-all uppercase" href="#services">{{
                  $t("header.links.services")
                }}</a>

                <a class="px-7 transition-all uppercase" href="#cases">{{
                  $t("header.links.cases")
                }}</a>

                <a class="px-7 transition-all uppercase" href="#contacts">{{
                  $t("header.links.contacts")
                }}</a>
              </div>
              <Locale />
              <!-- <div class="hidden lg:flex items-center ml-3">
                <div class="font-semibold">
                  <a
                    style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                    class="px-7 py-3 text-base font-bold bg-secondaryColor text-white cursor-pointer w-max"
                    href="#message"
                    >{{ $t("general.callRequest") }}</a
                  >
                </div>
              </div> -->
            </div>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
    <div v-if="menu == true" class="fixed bgScreen w-full top-0">
      <div class="container mx-auto relative">
        <font-awesome-icon
          @click="menu = false"
          class="absolute right-10 top-9 text-5xl"
          :icon="['fas', 'xmark']"
        />
        <div
          class="h-screen w-full px-4 py-5 bg-white flex items-center text-xl font-medium"
        >
          <div class="mb-10">
            <a
              @click="menu = false"
              class="px-3 transition-all block mb-6 hover:text-mainColor"
              href="#about"
              >{{ $t("header.links.about") }}</a
            >
            <a
              @click="menu = false"
              class="px-3 transition-all block mb-6 hover:text-mainColor"
              href="#services"
              >{{ $t("header.links.services") }}</a
            >
            <a
              @click="menu = false"
              class="px-3 transition-all block mb-6 hover:text-mainColor"
              href="#cases"
              >{{ $t("header.links.cases") }}</a
            >
            <a
              @click="menu = false"
              class="px-3 transition-all block hover:text-mainColor"
              href="#contacts"
              >{{ $t("header.links.contacts") }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/General/Button.vue";
import Locale from "@/components/General/Locale.vue";
import ThemeSwitcher from "@/components/General/ThemeSwitcher.vue";

export default {
  name: "Header",
  data() {
    return {
      menu: false,
      activeSection: null,
      sectionScrollPositions: {
        about: 0, // Adjust the scroll positions as needed
        services: 800, // Adjust the scroll positions as needed
        cases: 1600, // Adjust the scroll positions as needed
        contacts: 2400, // Adjust the scroll positions as needed
      },
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
      const sectionElements = document.querySelectorAll("section"); // Assuming the sections have <section> tags, adjust if necessary

      let activeSection = null;

      // Iterate through the sections and find the one in the viewport
      sectionElements.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          activeSection = sectionId;
        }
      });

      this.activeSection = activeSection;
    },
  },
  components: {
    Button,
    Locale,
    ThemeSwitcher,
  },
};
</script>