<template>
  <section
      ref="services"
      id="services"
      class="pt-[6.75rem] lg:pt-36 pb-36 dark:bg-darkBg dark:text-white"
  >
    <div class="block lg:flex pb-0 lg:pb-28">
      <div
          class="lg:block container mx-auto px-4 lg:px-0 pl-4 lg:!pl-0 relative z-20 flex justify-end mb-8 lg:mb-0"
      >
        <div class="w-full">
          <div class="flex justify-end">
            <div class=" w-2/5 flex">
              <Heading
                  class="hidden lg:flex mb-6 lg:mb-[4.5rem]"
                  :heading="$t('mainPage.services.header')"
                  line="right"
              />
            </div>
          </div>
          <div class="flex justify-start">
            <Heading
                class="flex lg:hidden mb-6 lg:mb-[4.5rem]"
                :heading="$t('mainPage.services.header')"
                line="right"
                :center="true"
            />
          </div>
          <div class="w-full flex justify-between flex-wrap">
            <div class="w-full lg:w-third flex relative pt-7">
              <div class="w-max relative mr-4">
                <p
                    class="bg-mainColor text-xl lg:text-[1.75rem] dark:bg-secondaryColor dark:text-mainColor font-bold text-secondaryColor p-1 w-max"
                >
                  01
                </p>
                <div
                    class="w-[1px] h-full left-1/2 -translate-x-1/2 dark:bg-secondaryColor dark:text-mainColor bg-mainColor -top-[1.125rem] absolute"
                ></div>
              </div>
              <div class="w-auto flex flex-col">
                <p
                    class="text-mainColor text-base lg:text-xl dark:text-secondaryColor uppercase font-bold mb-2 w-1/2 lg:w-3/4"
                >
                  {{ $t("mainPage.services.list.first.header") }}
                </p>
                <p class="text-xs lg:text-base w-[90%] lg:w-full">{{ $t("mainPage.services.list.first.content") }}</p>
              </div>
            </div>
            <div class="w-full lg:w-third flex relative pt-7">
              <div class="w-max relative mr-4">
                <p
                    class="bg-mainColor text-xl lg:text-[1.75rem] dark:bg-secondaryColor dark:text-mainColor font-bold text-secondaryColor p-1 w-max"
                >
                  02
                </p>
                <div
                    class="w-[1px] h-full left-1/2 -translate-x-1/2 dark:bg-secondaryColor dark:text-mainColor bg-mainColor -top-[1.125rem] absolute"
                ></div>
              </div>
              <div class="w-auto flex flex-col">
                <p
                    class="text-mainColor text-base lg:text-xl dark:text-secondaryColor uppercase font-bold mb-2 w-1/2 lg:w-3/4"
                >
                  {{ $t("mainPage.services.list.second.header") }}
                </p>
                <p class="text-xs lg:text-base w-[90%] lg:w-full">{{ $t("mainPage.services.list.second.content") }}</p>
              </div>
            </div>
            <div class="w-full lg:w-third flex relative pt-7">
              <div class="w-max relative mr-4">
                <p
                    class="bg-mainColor text-xl lg:text-[1.75rem] dark:bg-secondaryColor dark:text-mainColor font-bold text-secondaryColor p-1 w-max"
                >
                  03
                </p>
                <div
                    class="w-[1px] h-full left-1/2 -translate-x-1/2 dark:bg-secondaryColor dark:text-mainColor bg-mainColor -top-[1.125rem] absolute"
                ></div>
              </div>
              <div class="w-auto flex flex-col">
                <p
                    class="text-mainColor text-base lg:text-xl dark:text-secondaryColor uppercase font-bold mb-2 w-1/2 lg:w-3/4"
                >
                  {{ $t("mainPage.services.list.third.header") }}
                </p>
                <p class="text-xs lg:text-base w-[90%] lg:w-full">{{ $t("mainPage.services.list.third.content") }}</p>
              </div>
            </div>
            <div class="w-full lg:w-third flex relative pt-7">
              <div class="w-max relative mr-4">
                <p
                    class="bg-mainColor text-xl lg:text-[1.75rem] dark:bg-secondaryColor dark:text-mainColor font-bold text-secondaryColor p-1 w-max"
                >
                  04
                </p>
                <div
                    class="w-[1px] h-full left-1/2 -translate-x-1/2 dark:bg-secondaryColor dark:text-mainColor bg-mainColor -top-[1.125rem] absolute"
                ></div>
              </div>
              <div class="w-auto flex flex-col">
                <p
                    class="text-mainColor text-base lg:text-xl dark:text-secondaryColor uppercase font-bold mb-2 w-1/2 lg:w-3/4"
                >
                  {{ $t("mainPage.services.list.fourth.header") }}
                </p>
                <p class="text-xs lg:text-base w-[90%] lg:w-full">{{ $t("mainPage.services.list.fourth.content") }}</p>
              </div>
            </div>
            <div class="w-full lg:w-third flex relative pt-7">
              <div class="w-max relative mr-4">
                <p
                    class="bg-mainColor text-xl lg:text-[1.75rem] dark:bg-secondaryColor dark:text-mainColor font-bold text-secondaryColor p-1 w-max"
                >
                  05
                </p>
                <div
                    class="w-[1px] h-full left-1/2 -translate-x-1/2 dark:bg-secondaryColor dark:text-mainColor bg-mainColor -top-[1.125rem] absolute"
                ></div>
              </div>
              <div class="w-auto flex flex-col">
                <p
                    class="text-mainColor text-base lg:text-xl dark:text-secondaryColor uppercase font-bold mb-2 w-1/2 lg:w-3/4"
                >
                  {{ $t("mainPage.services.list.fifth.header") }}
                </p>
                <p class="text-xs lg:text-base w-[90%] lg:w-full">{{ $t("mainPage.services.list.fifth.content") }}</p>
              </div>
            </div>
            <div class="w-full lg:w-third flex relative pt-7">
              <div class="w-max relative mr-4">
                <p
                    class="bg-mainColor text-xl lg:text-[1.75rem] dark:bg-secondaryColor dark:text-mainColor font-bold text-secondaryColor p-1 w-max"
                >
                  06
                </p>
                <div
                    class="w-[1px] h-full left-1/2 -translate-x-1/2 dark:bg-secondaryColor dark:text-mainColor bg-mainColor -top-[1.125rem] absolute"
                ></div>
              </div>
              <div class="w-auto flex flex-col">
                <p
                    class="text-mainColor text-base lg:text-xl dark:text-secondaryColor uppercase font-bold mb-2 w-1/2 lg:w-3/4"
                >
                  {{ $t("mainPage.services.list.sixth.header") }}
                </p>
                <p class="text-xs lg:text-base w-[90%] lg:w-full">{{ $t("mainPage.services.list.sixth.content") }}</p>
              </div>
            </div>
            <div class="w-full lg:w-third flex relative pt-7">
              <div class="w-max relative mr-4">
                <p
                    class="bg-mainColor text-xl lg:text-[1.75rem] dark:bg-secondaryColor dark:text-mainColor font-bold text-secondaryColor p-1 w-max"
                >
                  07
                </p>
                <div
                    class="w-[1px] h-full left-1/2 -translate-x-1/2 dark:bg-secondaryColor dark:text-mainColor bg-mainColor -top-[1.125rem] absolute"
                ></div>
              </div>
              <div class="w-auto flex flex-col">
                <p
                    class="text-mainColor text-base lg:text-xl dark:text-secondaryColor uppercase font-bold mb-2 w-1/2 lg:w-3/4"
                >
                  {{ $t("mainPage.services.list.seventh.header") }}
                </p>
                <p class="text-xs lg:text-base w-[90%] lg:w-full">{{ $t("mainPage.services.list.seventh.content") }}</p>
              </div>
            </div>
            <div class="w-full lg:w-third flex relative pt-7">
              <div class="w-max relative mr-4">
                <p
                    class="bg-mainColor text-xl lg:text-[1.75rem] dark:bg-secondaryColor dark:text-mainColor font-bold text-secondaryColor p-1 w-max"
                >
                  08
                </p>
                <div
                    class="w-[1px] h-full left-1/2 -translate-x-1/2 dark:bg-secondaryColor dark:text-mainColor bg-mainColor -top-[1.125rem] absolute"
                ></div>
              </div>
              <div class="w-auto flex flex-col">
                <p
                    class="text-mainColor text-base lg:text-xl dark:text-secondaryColor uppercase font-bold mb-2 w-1/2 lg:w-3/4"
                >
                  {{ $t("mainPage.services.list.eighth.header") }}
                </p>
                <p class="text-xs lg:text-base w-[90%] lg:w-full">{{ $t("mainPage.services.list.eighth.content") }}</p>
              </div>
            </div>
            <div class="w-full lg:w-third flex relative pt-7">
              <div class="w-max relative mr-4">
                <p
                    class="bg-mainColor text-xl lg:text-[1.75rem] dark:bg-secondaryColor dark:text-mainColor font-bold text-secondaryColor p-1 w-max"
                >
                  09
                </p>
                <div
                    class="w-[1px] h-full left-1/2 -translate-x-1/2 dark:bg-secondaryColor dark:text-mainColor bg-mainColor -top-[1.125rem] absolute"
                ></div>
              </div>
              <div class="w-auto flex flex-col">
                <p
                    class="text-mainColor text-base lg:text-xl dark:text-secondaryColor uppercase font-bold mb-2 w-1/2 lg:w-3/4"
                >
                  {{ $t("mainPage.services.list.ninth.header") }}
                </p>
                <p class="text-xs lg:text-base w-[90%] lg:w-full">{{ $t("mainPage.services.list.ninth.content") }}</p>
              </div>
            </div>
          </div>
        </div>
        <div
            class="hidden lg:flex bg-[#E1E1E1] text-black lg:absolute -bottom-[55%] lg:right-0 mx-0 relative w-max py-14 px-16 mb-0 text-base rounded-tl-3xl rounded-br-3xl"
            style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));">
          <div
              style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
              class="mx-auto lg:mx-0 bg-mainColor mb-2 lg:mb-0 px-3 py-2 text-center flex flex-col justify-center w-[150px] max-w-[150px]"
          >
            <img
                class="w-10 h-10 mx-auto mb-2"
                src="@/assets/img/services/1.svg"
                alt=""
            />
            <p class="text-[0.625rem] lg:text-xs text-white">
              {{ $t("mainPage.services.benefits.first") }}
            </p>
          </div>
          <div
              style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
              class="mx-auto bg-mainColor mb-2 lg:mb-0 px-3 py-2 text-center flex flex-col justify-center lg:mx-6 w-[150px] max-w-[150px]"
          >
            <img
                class="w-10 h-10 mx-auto mb-2"
                src="@/assets/img/services/2.svg"
                alt=""
            />
            <p class="text-xs font-medium text-white">
              {{ $t("mainPage.services.benefits.second") }}
            </p>
          </div>
          <div
              style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
              class="mx-auto lg:mx-0 bg-mainColor mb-2 lg:mb-0 px-3 py-2 text-center flex flex-col justify-center w-[150px] max-w-[150px]"
          >
            <img
                class="w-10 h-10 mx-auto mb-2"
                src="@/assets/img/services/3.svg"
                alt=""
            />
            <p class="text-[0.625rem] lg:text-xs text-white">
              {{ $t("mainPage.services.benefits.third") }}
            </p>
          </div>
        </div>
      </div>
      <div class="block lg:hidden container mx-auto relative">
        <div
            class="bg-[#E1E1E1] text-black lg:absolute lg:-bottom-[5%] lg:right-0 lg:mx-0 w-[80%] relative mx-auto lg:w-max py-5 lg:py-6 px-5 lg:px-14 text-xs -mb-56 lg:mb-0 lg:text-base rounded-tl-3xl rounded-br-3xl block lg:flex bottom-[38%] z-20"
            style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));">
          <div
              style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
              class="mx-auto lg:mx-0 bg-mainColor mb-2 lg:mb-0 px-3 py-2 text-center flex flex-col justify-center w-[150px] max-w-[150px]"
          >
            <img
                class="w-10 h-10 mx-auto mb-2"
                src="@/assets/img/services/1.svg"
                alt=""
            />
            <p class="text-[0.625rem] lg:text-xs text-white">
              {{ $t("mainPage.services.benefits.first") }}
            </p>
          </div>
          <div
              style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
              class="mx-auto lg:mx-0 bg-mainColor mb-2 lg:mb-0 px-3 py-2 text-center flex flex-col justify-center lg:mx-6 w-[150px] max-w-[150px]"
          >
            <img
                class="w-10 h-10 mx-auto mb-2"
                src="@/assets/img/services/2.svg"
                alt=""
            />
            <p class="text-[0.625rem] lg:text-xs text-white">
              {{ $t("mainPage.services.benefits.second") }}
            </p>
          </div>
          <div
              style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
              class="mx-auto lg:mx-0 bg-mainColor mb-2 lg:mb-0 px-3 py-2 text-center flex flex-col justify-center w-[150px] max-w-[150px]"
          >
            <img
                class="w-10 h-10 mx-auto mb-2"
                src="@/assets/img/services/3.svg"
                alt=""
            />
            <p class="text-[0.625rem] lg:text-xs text-white">
              {{ $t("mainPage.services.benefits.third") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Heading from "@/components/General/Heading.vue";

export default {
  name: "Services",
  data() {
    return {
      active: 1,
    };
  },
  components: {
    Heading,
  },
};
</script>
