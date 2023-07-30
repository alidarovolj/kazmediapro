<template>
  <div
    class="relative pt-[3rem] pb-9 lg:pb-[8rem] bg-mainColor dark:bg-darkerBg"
  >
    <div class="relative z-10">
      <div class="container mx-auto px-4 lg:px-0">
        <Heading
          class="hidden lg:flex !mb-0 lg:!mb-[5.25rem] pl-4 lg:!pl-12"
          :heading="$t('mainPage.team.header')"
          line="left"
          :mainColor="false"
        />
        <div class="flex justify-end">
          <Heading
            :heading="$t('mainPage.team.header')"
            class="flex lg:hidden !mb-0 lg:!mb-[5.25rem] pr-12"
            line="left"
            :mainColor="false"
          />
        </div>
        <div class="block lg:flex justify-between">
          <div
            class="w-4/5 mb-10 lg:mb-0 lg:w-3/5 mr-auto lg:mr-28 block lg:flex m-auto justify-between pt-10 lg:ml-0"
          >
            <div class="w-full mb-3 lg:mb-2 lg:w-third relative">
              <div
                style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                class="bg-white flex lg:block w-full relative z-20 px-[0.875rem] py-3 items-center lg:items-baseline"
              >
                <img
                  class="w-[4.375rem] h-20 lg:h-auto lg:w-full mr-2 lg:mr-0 mb-0 lg:mb-[0.875rem]"
                  src="@/assets/img/team/1.png"
                  alt=""
                />
                <div>
                  <p class="text-black font-bold mb-2">
                    {{ $t("mainPage.team.first.name") }}
                  </p>
                  <p class="text-[0.625rem] text-black">
                    {{ $t("mainPage.team.first.position") }}
                  </p>
                  <p class="text-[0.625rem] text-black">
                    {{ $t("mainPage.team.first.experience") }}
                  </p>
                </div>
              </div>
              <div
                class="w-[4rem] lg:w-[6.563rem] bg-white h-[4rem] lg:h-[6.563rem] z-10 absolute -left-1 -top-1"
              ></div>
            </div>
            <div class="w-full mb-3 lg:mb-2 lg:w-third relative">
              <div
                style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                class="bg-white flex lg:block w-full relative z-20 px-[0.875rem] py-3 items-center lg:items-baseline"
              >
                <img
                  class="w-[4.375rem] h-20 lg:h-auto lg:w-full mr-2 lg:mr-0 mb-0 lg:mb-[0.875rem]"
                  src="@/assets/img/team/2.png"
                  alt=""
                />
                <div>
                  <p class="text-black font-bold mb-2">
                    {{ $t("mainPage.team.second.name") }}
                  </p>
                  <p class="text-[0.625rem] text-black">
                    {{ $t("mainPage.team.second.position") }}
                  </p>
                  <p class="text-[0.625rem] text-black">
                    {{ $t("mainPage.team.second.experience") }}
                  </p>
                </div>
              </div>
              <div
                class="w-[4rem] lg:w-[6.563rem] bg-white h-[4rem] lg:h-[6.563rem] z-10 absolute -left-1 -top-1"
              ></div>
            </div>
            <div class="w-full lg:w-third relative">
              <div
                style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                class="bg-white flex lg:block w-full relative z-20 px-[0.875rem] py-3 items-center lg:items-baseline"
              >
                <img
                  class="w-[4.375rem] h-20 lg:h-auto lg:w-full mr-2 lg:mr-0 mb-0 lg:mb-[0.875rem]"
                  src="@/assets/img/team/3.png"
                  alt=""
                />
                <div>
                  <p class="text-black font-bold mb-2">
                    {{ $t("mainPage.team.third.name") }}
                  </p>
                  <p class="text-[0.625rem] text-black">
                    {{ $t("mainPage.team.third.position") }}
                  </p>
                  <p class="text-[0.625rem] text-black">
                    {{ $t("mainPage.team.third.experience") }}
                  </p>
                </div>
              </div>
              <div
                class="w-[4rem] lg:w-[6.563rem] bg-white h-[4rem] lg:h-[6.563rem] z-10 absolute -left-1 -top-1"
              ></div>
            </div>
          </div>
          <div
            class="w-11/12 mx-auto lg:mx-0 lg:w-1/4 md:w-full relative text-white"
          >
            <img
              class="lg:w-11 w-6 h-auto absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2"
              src="@/assets/img/team/quote.png"
              alt=""
            />
            <div
              class="flex flex-col justify-between w-full text-sm lg:text-base h-full relative z-10"
            >
              <p class="leading-6 mb-3 lg:mb-0">
                {{ $t("mainPage.team.content.first") }}
              </p>
              <p class="leading-6 mb-5 lg:mb-0">
                {{ $t("mainPage.team.content.second") }}
              </p>
              <div class="flex items-center px-4 py-3 bg-[#E1E1E1] text-black ">
                <img class="mr-3" src="@/assets/img/team/button.svg" alt="" />
                <p class="text-xs" v-html="$t('mainPage.team.button')"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/General/Heading.vue";

export default {
  name: "Team",
  components: {
    Heading,
  },
};
</script>
