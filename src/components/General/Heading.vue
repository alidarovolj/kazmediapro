<template>
  <div
    class="mb-10 dark:text-white flex items-center relative z-10"
    :class="{ ' justify-center': center }"
  >
    <div class="lineBase">
      <div
        :class="[{ '!bg-mainColor': mainColor == true }, { '!bg-white': white == true }]"
        class="lineLeft"
        v-if="line == 'left'"
      ></div>
    </div>
    <h2
      :class="[{ '!text-mainColor': mainColor == true }, { '!text-white': white == true }]"
      class="font-bold text-2xl lg:text-[3.375rem] text-secondaryColor uppercase flex leading-none"
    >
      {{ heading }}
    </h2>
    <div class="lineBase">
      <div
        :class="[{ '!bg-mainColor': mainColor == true }, { '!bg-white': white == true }]"
        class="lineRight"
        v-if="line == 'right'"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Heading",
  props: {
    heading: {
      type: String,
      required: true,
    },
    line: {
      type: String,
      required: false,
    },
    center: {
      type: Boolean,
      required: false,
    },
    mainColor: {
      type: Boolean,
      required: false,
    },
    white: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<style scoped>
.lineBase {
  position: relative;
}
.lineRight {
  position: absolute;
  background: #f18a02;
  width: 200vh;
  height: 0.5px;
  left: 1.5rem;
}
.lineRight::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 4px;
  background: #f18a02;
  transform: translate(-50%, -50%);
  border-radius: 100%;
}
.lineRight.\!bg-mainColor::before {
  background: #2058aa;
}
.lineRight.\!bg-white::before {
  background: #fff;
}
.lineLeft {
  position: absolute;
  background: #f18a02;
  width: 200vh;
  transform: translateX(-100%);
  height: 0.5px;
  left: -1.5rem;
}
.lineLeft::before {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  width: 4px;
  height: 4px;
  background: #f18a02;
  transform: translate(50%, -50%);
  border-radius: 100%;
}
.lineLeft.\!bg-mainColor::before {
  background: #2058aa;
}
.lineLeft.\!bg-white::before {
  background: #fff;
}
</style>
