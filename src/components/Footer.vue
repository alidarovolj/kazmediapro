<template>
  <div class="footer pt-14 pb-20 text-white dark:bg-darkerBg">
    <div class="container mx-auto px-4 lg:px-0">
      <div class="block lg:flex items-start justify-between">
        <div class="w-full lg:w-fourth mb-7 lg:mb-0">
          <img class="w-3/4" src="@/assets/img/footerLogo.png" alt="" />
        </div>
        <div class="w-full lg:w-fourth pt-4 mb-10 lg:mb-0 uppercase">
          <a
            class="block mb-4 lg:mb-7"
            :class="[
              'px-7 transition-all',
              {
                'hover:text-mainColor': activeSection !== 'about',
                'text-mainColor': activeSection === 'about',
              },
            ]"
            href="#about"
            >{{ $t("header.links.about") }}</a
          >
          <a
            class="block mb-4 lg:mb-7"
            :class="[
              'px-7 transition-all',
              {
                'hover:text-mainColor': activeSection !== 'services',
                'text-mainColor': activeSection === 'services',
              },
            ]"
            href="#services"
            >{{ $t("header.links.services") }}</a
          >
          <a
            class="block mb-4 lg:mb-7"
            :class="[
              'px-7 transition-all',
              {
                'hover:text-mainColor': activeSection !== 'cases',
                'text-mainColor': activeSection === 'cases',
              },
            ]"
            href="#cases"
            >{{ $t("header.links.cases") }}</a
          >
          <a
            class="block"
            :class="[
              'pl-7 pr-14 transition-all',
              {
                'hover:text-mainColor': activeSection !== 'contacts',
                'text-mainColor': activeSection === 'contacts',
              },
            ]"
            href="#contacts"
            >{{ $t("header.links.contacts") }}</a
          >
        </div>
        <div class="w-full lg:w-fourth mb-10 lg:mb-0 pt-4">
          <p class="mb-4 uppercase font-bold">
            {{ $t("mainPage.footer.address.header") }}:
          </p>
          <p class="font-medium">{{ $t("mainPage.footer.address.city") }}</p>
          <p class="font-medium">{{ $t("mainPage.footer.address.street") }}</p>
        </div>
        <div class="w-full lg:w-fourth pt-4 flex flex-col justify-between">
          <div class="mb-10 lg:mb-0">
            <p class="mb-4 uppercase font-bold">
              {{ $t("mainPage.footer.contacts.header") }}:
            </p>
            <a
              href="tel:+77068368746"
              class="flex hover:text-secondaryColor transition-all items-center mb-4 font-bold"
            >
              <font-awesome-icon class="mr-3" :icon="['fas', 'phone']" />
              <p>+7 706 836 87 46</p>
            </a>
            <a
              href="mailto:info@kazmpro.kz"
              class="flex hover:text-secondaryColor transition-all items-center mb-4 font-bold"
            >
              <font-awesome-icon class="mr-3" :icon="['fas', 'envelope']" />
              <p>info@kazmpro.kz</p>
            </a>
          </div>
          <div class="flex items-center mb-4">
            <img class="mr-4" src="@/assets/img/footer/instagram.png" alt="" />
            <a
              href="https://www.instagram.com/kazmediapro.kz/?igshid=MzRlODBiNWFlZA%3D%3D#"
              target="_blank"
              class="flex items-center bg-secondaryColor px-[1.625rem] py-[0.625rem]"
            >
              <p class="mr-3">{{ $t("mainPage.footer.contacts.instagram") }}</p>
              <font-awesome-icon :icon="['fas', 'arrow-right']" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      activeSection: null,
    };
  },
};
</script>