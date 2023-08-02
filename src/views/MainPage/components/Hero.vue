<template>
  <div
    ref="hero"
    id="hero"
    class="hero dark:!bg-darkerBg relative"
  >
    <div class="h-full flex container mx-auto px-4 lg:px-0 lg:pt-20">
<!--      <div-->
<!--        class="hidden lg:flex items-center relative flex-col justify-between mr-20"-->
<!--      >-->
<!--        <div class="lineFirst"></div>-->
<!--        <p-->
<!--          class="withLines whitespace-nowrap text-xl text-white py-5 uppercase"-->
<!--        >-->
<!--          {{ $t("mainPage.hero.line") }}-->
<!--        </p>-->
<!--        <div class="lineSecond"></div>-->
<!--      </div>-->
      <div
        class="block lg:flex w-full items-start lg:items-center justify-between"
      >
        <div class="w-full lg:w-[60%] block lg:pb-20 lg:pt-20">
          <div class="w-[85%] lg:w-full pt-20 lg:pt-0 h-max lg:h-auto mb-12 lg:mb-28">
            <h1 class="uppercase text-2xl lg:text-[2.75rem] lg:leading-none font-bold text-white">
              {{ $t("mainPage.hero.headText") }}
            </h1>
            <div class="text-secondaryColor mt-6 mb-10 text-sm lg:text-lg font-bold w-full lg:w-3/5">
              <p>{{ $t("mainPage.hero.content") }}</p>
            </div>
            <a
                style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                class="px-10 py-3 text-sm lg:text-base font-bold bg-secondaryColor text-white cursor-pointer w-max"
                href="#message"
            >{{ $t("general.callRequest") }}</a
            >
          </div>
          <div class="flex items-end lg:items-center">
            <div class="w-half lg:w-full max-w-half lg:max-w-full flex flex-col lg:flex-row justify-center mb-20">
              <div class="w-32 text-center flex flex-col justify-start mx-auto mb-4">
                <img
                    class="mx-auto w-6 lg:w-10 h-6 lg:h-10 mb-2"
                    src="@/assets/img/whyUs/1.png"
                    alt=""
                />
                <p
                    class="text-xs lg:text-sm text-white w-10/12 lg:w-full mx-auto"
                >
                  {{ $t("mainPage.hero.whyUs.first") }}
                </p>
              </div>
              <div class="w-32 text-center flex flex-col justify-start mx-auto mb-4">
                <img
                    class="mx-auto w-6 lg:w-10 h-6 lg:h-10 mb-2"
                    src="@/assets/img/whyUs/2.png"
                    alt=""
                />
                <p
                    class="text-xs lg:text-sm text-white w-10/12 lg:w-full mx-auto"
                >
                  {{ $t("mainPage.hero.whyUs.second") }}
                </p>
              </div>
              <div class="w-32 text-center flex flex-col justify-start mx-auto mb-4">
                <img
                    class="mx-auto w-6 lg:w-10 h-6 lg:h-10 mb-2"
                    src="@/assets/img/whyUs/3.png"
                    alt=""
                />
                <p
                    class="text-xs lg:text-sm text-white w-10/12 lg:w-full mx-auto"
                >
                  {{ $t("mainPage.hero.whyUs.third") }}
                </p>
              </div>
              <div class="w-32 text-center flex flex-col justify-start mx-auto mb-4">
                <img
                    class="mx-auto w-6 lg:w-10 h-6 lg:h-10 mb-2"
                    src="@/assets/img/whyUs/4.png"
                    alt=""
                />
                <p
                    class="text-xs lg:text-sm text-white w-10/12 lg:w-full mx-auto"
                >
                  {{ $t("mainPage.hero.whyUs.fourth") }}
                </p>
              </div>
              <div class="w-32 text-center flex flex-col justify-start mx-auto mb-4">
                <img
                    class="mx-auto w-6 lg:w-10 h-6 lg:h-10 mb-2"
                    src="@/assets/img/whyUs/5.png"
                    alt=""
                />
                <p
                    class="text-xs lg:text-sm text-white w-10/12 lg:w-full mx-auto"
                >
                  {{ $t("mainPage.hero.whyUs.fifth") }}
                </p>
              </div>
            </div>
            <img
                class="w-[403px] lg:w-max block lg:hidden h-full mb-0 z-10 lg:object-cover object-left lg:object-bottom lg:translate-x-1/3 translate-x-4 lg:absolute right-0 bottom-0"
                src="@/assets/img/hero/bg.png"
                alt=""
            />
          </div>
        </div>
        <div class="hidden lg:flex justify-between lg:justify-normal items-end h-full w-full lg:w-[40%]">
          <img
            class="w-max h-full mb-0 z-10 object-cover object-left lg:object-bottom lg:object-none lg:translate-x-1/3 translate-x-4 lg:absolute right-0 bottom-0"
            src="@/assets/img/hero/bg.png"
            alt=""
          />
          <div
            class="rounded-full blur-[300px] bg-white w-[550px] h-[550px] absolute bottom-[200px] right-[200px] translate-x-1/2 translate-y-1/2"
          ></div>
        </div>
      </div>
<!--      <div-->
<!--        class="flex lg:hidden items-center absolute left-0 bottom-[4.688rem] z-50 w-full"-->
<!--      >-->
<!--        <div class="relative flex justify-between items-center w-full">-->
<!--          <div class="lineFirstMob"></div>-->
<!--          <p-->
<!--            class="withLinesMob whitespace-nowrap text-sm text-white px-5 uppercase"-->
<!--          >-->
<!--            {{ $t("mainPage.hero.line") }}-->
<!--          </p>-->
<!--          <div class="lineSecondMob"></div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import Button from "@/components/General/Button.vue";
import Heading from "@/components/General/Heading.vue";

export default {
  name: "Hero",
  components: {
    Heading,
    Button,
  },
};
</script>
