<template>
  <div
    class="header fixed w-full z-50 top-0 left-0"
    style="box-shadow: 0px 4px 6px -3px rgba(0, 0, 0, 0.25)"
  >
    <div class="w-full dark:bg-darkBg dark:text-white">
      <div class="container mx-auto px-4 lg:px-0">
        <div class="flex items-center justify-between py-[0.875rem]">
          <font-awesome-icon
            @click="menu = !menu"
            class="block lg:hidden text-3xl"
            :icon="['fas', 'bars']"
          />
          <a href="#hero">
            <img
              @click="$router.push({ name: 'MainPage' })"
              class="w-36 lg:w-[11.75rem] block dark:hidden cursor-pointer"
              src="@/assets/img/logo.png"
              alt="" />
            <img
              @click="$router.push({ name: 'MainPage' })"
              class="w-36 lg:w-[11.75rem] hidden dark:block cursor-pointer"
              src="@/assets/img/darkLogo.png"
              alt=""
          /></a>
          <div class="flex items-center font-bold">
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
          class="h-screen w-full px-4 py-5 bg-white flex items-center text-xl font-bold"
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
    };
  },
  components: {
    Button,
    Locale,
    ThemeSwitcher,
  },
};
</script>
