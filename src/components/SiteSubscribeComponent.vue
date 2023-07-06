<template>
  <section class="subscribe container-normal d-flex">
    <div class="subscribe__content">

      <h1 class="title-ff fz-44">Subscribe<br>Newsletter</h1>
      <div class="subscribe__subtitle title-ff fz-20 font-color-8">The Travel</div>
      <div class="subscribe__text fz-16 font-color-7">Get inspired! Receive travel discounts, tips and behind the
        scenes stories.
      </div>

      <div class="subscribe__form d-flex">
        <div class="subscribe__input">
          <MainInputComponent type="no-bordered" placeholder="Your email address" v-model="email"/>
          <ErrorMessageComponent v-if="emailErrorMessage" :text="emailErrorMessage" />
        </div>
        <MainButtonComponent title="Subscribe" color="dark" :custom-style="{ height: 'auto' }" @click="onSubscribe"/>
      </div>

    </div>

    <div class="subscribe__image">
      <img src="@/assets/image/photo/mail-box.svg" alt="image">
    </div>

  </section>
</template>

<script>
import MainInputComponent    from "@/components/MainInputComponent";
import MainButtonComponent   from "@/components/MainButtonComponent";
import ErrorMessageComponent from "@/components/ErrorMessageComponent";

import {required, email} from "vuelidate/lib/validators";

export default {
  name:       "SiteSubscribeComponent",
  components: {
    MainButtonComponent,
    MainInputComponent,
    ErrorMessageComponent
  },
  data() {
    return {
      email: "",
      emailErrorMessage: ""
    };
  },
  methods:     {
    onSubscribe() {
      console.log("onSubscribe: ", this.email);
      if (!this.$v.email.required) {
        return this.emailErrorMessage = "Email required";
      }
      if (!this.$v.email.email) {
        return this.emailErrorMessage = "Please enter valid email";
      }
      this.email = "";
    }
  },
  watch: {
    email() {
      if (this.emailErrorMessage) {
        this.emailErrorMessage = "";
      }
    }
  },
  validations: {
    email: {
      required,
      email
    }
  }
};
</script>

<style lang="scss" scoped>
.subscribe {
  position:         absolute;
  top:              0;
  right:            0;
  left:             0;
  background-color: #CDEAE1;
  box-shadow:       0 4px 16px rgba(17, 34, 17, 0.05);
  border-radius:    20px;
  padding:          24px;

  &__content {
    width: 50%;
  }

  &__subtitle {
    margin-top: 24px;
  }

  &__text {
    margin-top:    8px;
    margin-bottom: 16px;
  }

  &__input {
    width:        100%;
    margin-right: 16px;
    position: relative;
  }

  &__image {
    position: absolute;
    top:      0;
    right:    24px;
  }
}
</style>
