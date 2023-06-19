<template>
  <section class="subscribe container-normal d-flex">
    <div class="subscribe__content">

      <h1 class="title-ff fz-44">Subscribe<br>Newsletter</h1>
      <div class="subscribe__subtitle title-ff fz-20 font-color-8">The Travel</div>
      <div class="subscribe__text fz-16 font-color-7">Get inspired! Receive travel discounts, tips and behind the
        scenes stories.</div>

      <div class="subscribe__form d-flex">
        <div class="subscribe__input">
          <MainInputComponent type="no-bordered" placeholder="Your email address" v-model="email" />
        </div>
        <!-- Переделал тут на MainButtonComponent -->
        <!-- ToDo - У нас родитель не знает, что в MainButtonComponent произошел клик. Создал тикет. -->
        <MainButtonComponent title="Subscribe" color="dark" :custom-style="{ height: 'auto' }" @click="onSubscribe" />
      </div>

    </div>

    <div class="subscribe__image">
      <img src="@/assets/image/photo/mail-box.svg" alt="image">
    </div>

  </section>
</template>

<script>
import MainInputComponent from "@/components/MainInputComponent";
import MainButtonComponent from "@/components/MainButtonComponent";

export default {
  name: "SiteSubscribeComponent",
  components: {
    MainButtonComponent,
    MainInputComponent
  },
  data() {
    return {
      email: ""
    }
  },
  methods: {
    onSubscribe() {
      console.log("onSubscribe: ",this.email);
      this.email = "";
    }
  },
}
</script>

<style lang="scss" scoped>
.subscribe {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-color: #CDEAE1;
  box-shadow: 0 4px 16px rgba(17, 34, 17, 0.05);
  border-radius: 20px;
  padding: 24px;

  &__content {
    width: 50%;
  }

  &__subtitle {
    margin-top: 24px;
  }

  &__text {
    margin-top: 8px;
    margin-bottom: 16px;
  }

  &__input {
    width: 100%;
    margin-right: 16px;
  }

  &__image {
    position: absolute;
    top: 0;
    right: 24px;
  }
}
</style>
