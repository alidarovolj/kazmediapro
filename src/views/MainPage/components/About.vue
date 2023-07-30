<template>
  <section
      ref="about"
      id="about"
      class="relative pt-[3.75rem] lg:pt-32 dark:bg-darkBg dark:text-white"
  >
    <div class="container mx-auto px-4 lg:px-0">
      <div class="flex justify-end">
        <div class="w-2/5 flex">
          <Heading
              class="mb-6 lg:mb-[5.25rem]"
              :heading="$t('mainPage.about.header')"
              line="right"
          />
        </div>
      </div>
      <div
          class="flex flex-col-reverse lg:flex-row justify-between items-center mb-6 lg:mb-[8.5rem]"
      >
        <div class="w-full lg:w-half">
          <div class="flex justify-between items-center">
            <div class="w-half min-w-half mb-3">
              <div class="py-6 px-1 bg-mainColor">
                <img
                    class="w-14 h-14 mx-auto mb-5"
                    src="@/assets/img/about/1.svg"
                    alt=""
                />
                <p
                    class="text-[10px] lg:text-base text-center text-white"
                >
                  {{ $t("mainPage.about.blocks.first") }}
                </p>
              </div>
            </div>
            <div class="w-half min-w-half mb-3">
              <div class="py-6 px-4 bg-mainColor">
                <img
                    class="w-14 h-14 mx-auto mb-5"
                    src="@/assets/img/about/2.svg"
                    alt=""
                />
                <p
                    class="text-[10px] w-1/2 mx-auto lg:text-base text-center text-white"
                >
                  {{ $t("mainPage.about.blocks.second") }}
                </p>
              </div>
            </div>
          </div>
          <div class="flex justify-between">
            <div class="w-half mb-3 lg:mb-0 min-w-half">
              <div class="py-6 px-4 bg-mainColor">
                <img
                    class="w-14 h-14 mx-auto mb-5"
                    src="@/assets/img/about/3.svg"
                    alt=""
                />
                <p
                    class="text-[10px] lg:text-base text-center text-white"
                >
                  {{ $t("mainPage.about.blocks.third") }}
                </p>
              </div>
            </div>
            <div class="w-half min-w-half">
              <div class="py-6 px-4 bg-mainColor">
                <img
                    class=" w-24 h-14 mx-auto mb-5"
                    src="@/assets/img/about/4.svg"
                    alt=""
                />
                <p
                    class="text-[10px] w-3/4 mx-auto lg:text-base text-center text-white"
                >
                  {{ $t("mainPage.about.blocks.fourth") }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-2/5 flex flex-col mb-6 lg:mb-0">
          <p class="text-sm lg:text-lg">
            {{ $t("mainPage.about.content.first") }}
          </p><br>
          <p class="text-sm lg:text-lg">
            {{ $t("mainPage.about.content.second") }}
          </p><br>
          <p class="text-sm lg:text-lg">
            {{ $t("mainPage.about.content.third") }}
          </p><br>
          <p class="text-sm lg:text-lg">
            {{ $t("mainPage.about.content.fourth") }}
          </p>
        </div>
      </div>
    </div>
    <div class="manufacturing relative block lg:flex py-12 lg:py-36 bg-mainColor">
      <img class="absolute left-0 top-0 w-full h-full object-cover object-bottom" src="@/assets/img/about/manBg.png"
           alt="">
      <div class="container mx-auto px-4 lg:px-0 relative z-20 text-white">
        <div class="flex justify-end lg:justify-start">
          <div class="w-[80%] lg:w-[55%]">
            <Heading
                class="mb-6 lg:mb-[4.5rem] hidden lg:flex"
                :heading="$t('mainPage.manufacture.header')"
                line="left"
            />
            <Heading
                class="mb-6 lg:mb-[4.5rem] flex lg:hidden justify-end"
                :heading="$t('mainPage.manufacture.header')"
                line="left"
            />
          </div>
        </div>
        <div class="flex justify-between">
          <ul class="text-sm lg:text-xl font-semibold lg:w-[63%] w-[80%]">
            <li>{{ $t("mainPage.manufacture.first") }}</li>
            <li>{{ $t("mainPage.manufacture.second") }}</li>
            <li>{{ $t("mainPage.manufacture.third") }}</li>
            <li>{{ $t("mainPage.manufacture.fourth") }}</li>
            <li>{{ $t("mainPage.manufacture.fifth") }}</li>
            <li>{{ $t("mainPage.manufacture.sixth") }}</li>
            <li>{{ $t("mainPage.manufacture.seventh") }}</li>
          </ul>
          <!-- <img class="block lg:hidden w-[35%] object-contain" src="@/assets/img/about/bg.png" alt="" /> -->
        </div>
        <div
            class="bg-[#E1E1E1] -mb-24 lg:mb-0 text-black w-[80%] mx-auto lg:mx-0 lg:w-half py-5 lg:py-6 px-5 lg:px-14 text-xs lg:text-base rounded-tl-lg rounded-br-lg lg:absolute right-0 -bottom-[38%]"
            style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));">
          <div class="flex items-center mb-6">
            <img class="mr-4" src="@/assets/img/about/arrow.png" alt="">
            <p>{{ $t("mainPage.manufacture.block.first") }}</p>
          </div>
          <div class="flex items-center mb-6">
            <img class="mr-4" src="@/assets/img/about/arrow.png" alt="">
            <p>{{ $t("mainPage.manufacture.block.second") }}</p>
          </div>
          <div class="flex items-center">
            <img class="mr-4" src="@/assets/img/about/arrow.png" alt="">
            <p>{{ $t("mainPage.manufacture.block.third") }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Heading from "@/components/General/Heading.vue";

export default {
  name: "About",
  components: {
    Heading,
  },
};
</script>