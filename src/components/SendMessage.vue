<template>
  <div id="message">
    <form
      action=""
      @submit.prevent="sendForm"
      class="bg-mainColor dark:bg-darkerBg py-6 px-6 lg:px-12"
    >
      <p class="text-[1.375rem] font-bold mb-1 text-center text-white">
        {{ $t("mainPage.contacts.form.header") }}
      </p>
      <p class="text-white text-sm text-center mb-[1.563rem]">
        {{ $t("mainPage.contacts.form.content") }}
      </p>
      <div class="mb-2">
        <label class="block mb-1 text-white text-sm pl-3" for="">{{
          $t("mainPage.contacts.form.direction.header")
        }}</label>
        <input
          class="text-sm lg:text-base py-2 px-3 w-full text-black"
          :class="{
            'border border-red-500': v$.form.direction.$errors.length,
          }"
          v-model="form.direction"
          :placeholder="$t('mainPage.contacts.form.direction.placeholder')"
          type="text"
        />
        <p
          class="text-red-500 text-xs lg:text-base mt-2"
          v-if="v$.form.direction.$errors.length"
        >
          {{ $t("mainPage.contacts.form.direction.error") }}
        </p>
      </div>
      <div class="mb-2">
        <label class="block mb-1 text-white text-sm pl-3" for="">
          {{ $t("mainPage.contacts.form.name.header") }}</label
        >
        <input
          class="text-sm lg:text-base py-2 px-3 w-full text-black"
          :class="{
            'border border-red-500': v$.form.name.$errors.length,
          }"
          v-model="form.name"
          :placeholder="$t('mainPage.contacts.form.name.placeholder')"
          type="text"
        />
        <p
          class="text-red-500 text-xs lg:text-base mt-2"
          v-if="v$.form.name.$errors.length"
        >
          {{ $t("mainPage.contacts.form.name.error") }}
        </p>
      </div>
      <div class="mb-2">
        <label class="block mb-1 text-white text-sm pl-3" for="">{{
          $t("mainPage.contacts.form.email.header")
        }}</label>
        <input
          class="text-sm lg:text-base py-2 px-3 w-full text-black"
          :class="{
            'border border-red-500': v$.form.email.$errors.length,
          }"
          v-model="form.email"
          placeholder="i.ivanov@gmail.com"
          type="text"
        />
        <p
          class="text-red-500 text-xs lg:text-base mt-2"
          v-if="v$.form.email.$errors.length"
        >
          {{ $t("mainPage.contacts.form.email.error") }}
        </p>
      </div>
      <div class="mb-2">
        <label class="block mb-1 text-white text-sm pl-3" for="">{{
          $t("mainPage.contacts.form.phone.header")
        }}</label>
        <input
          class="text-sm lg:text-base py-2 px-3 w-full text-black"
          :class="{
            'border border-red-500': v$.form.phone.$errors.length,
          }"
          v-model="form.phone"
          v-mask="'+7(###) ###-##-##'"
          :placeholder="$t('mainPage.contacts.form.phone.placeholder')"
          type="text"
        />
        <p
          class="text-red-500 text-xs lg:text-base mt-2"
          v-if="v$.form.phone.$errors.length"
        >
          {{ $t("mainPage.contacts.form.phone.error") }}
        </p>
      </div>
      <div class="mb-5">
        <label class="block mb-1 text-white text-sm pl-3" for="">{{
          $t("mainPage.contacts.form.note.header")
        }}</label>
        <textarea
          class="text-sm lg:text-base py-2 px-3 w-full text-black"
          v-model="form.note"
          :placeholder="$t('mainPage.contacts.form.note.placeholder')"
        />
      </div>
      <button
        style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        class="px-14 py-3 w-max mx-auto font-bold bg-secondaryColor text-white block"
        type="submit"
      >
        <span v-if="!loading">{{ $t("mainPage.contacts.form.button") }}</span>
        <Loader v-else />
      </button>
    </form>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
import { toast } from "vue3-toastify";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

import Loader from "@/components/General/Loader.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SendMessage",
  data() {
    return {
      loading: false,
      form: {
        direction: null,
        name: null,
        email: null,
        phone: null,
        note: null,
      },
    };
  },
  components: {
    Loader,
  },
  directives: {
    mask,
  },
  validations() {
    return {
      form: {
        direction: { required },
        name: { required },
        email: { required, email },
        phone: { required },
      },
    };
  },
  computed: {
    ...mapGetters(["getCreatedMessage"]),
  },
  methods: {
    ...mapActions(["sendMessage"]),
    clearForm() {
      this.form.direction = null;
      this.form.name = null;
      this.form.email = null;
      this.form.phone = null;
      this.form.note = null;
    },
    async sendForm() {
      this.loading = true;
      this.v$.$validate();

      if (this.v$.$invalid) {
        this.loading = false;
        this.notify(false, "Пожалуйста, проверьте заполненность формы");
        return;
      }

      await this.sendMessage(this.form);
      if (this.getCreatedMessage.success == true) {
        this.loading = false;
        this.clearForm();
        this.notify(true, "Заявка успешно отправлена!");
        this.v$.$reset();
      } else {
        this.loading = false;
        this.notify(true, this.getCreatedMessage.message);
      }
    },
  },
  setup() {
    const notify = (toastState, toastText) => {
      if (toastState) {
        toast.success(toastText, {
          autoClose: 2000,
        });
      } else {
        toast.error(toastText, {
          autoClose: 2000,
        });
      }
    };
    return {
      v$: useVuelidate(),
      notify,
    };
  },
};
</script>
