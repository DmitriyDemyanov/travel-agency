<template>
  <section class="wrapper-subscribe container-normal d-flex">
    <div class="wrapper-content">
      <h1 class="subscribe-title title-ff fz-44">Subscribe <br> Newsletter</h1>
      <div class="subscribe-subtitle title-ff fz-20 font-color-8">The Travel</div>
      <div class="subscribe-description fz-16 font-color-7">Get inspired! Receive travel discounts, tips and behind the
        scenes stories.</div>
      <div class="input-form d-flex">
        <div class="wrapper-input">
          <MainInputComponent type='no-bordered' placeholder='Your email address' v-model="email" @cleanInput='testing' />

        </div>

        <button class="input-btn d-flex align-items-center justify-content-center fz-14" @click='test'>Subscribe</button>
      </div>
      <div v-show="!testEmail" style="color: red">ERROR email !!!</div>
    </div>

    <div class="image-subscribe">
      <img src="@/assets/image/photo/image-subscribe.png" alt="image">
    </div>

  </section>
</template>

<script>
import MainInputComponent from '@/components/MainInputComponent';
import { mapActions,mapGetters } from 'vuex';
export default {
  name: 'SiteSubscribeComponent',
  components: {
    MainInputComponent,
  },
  data() {
    return {
      email: '',
      testEmail: true,
    }
  },
  computed: {
    ...mapGetters('flight',['getEmailFooter'])
  },
  methods: {
    ...mapActions('flight',['saveEmail']),
    test() {
      console.log('test',this.getEmailFooter);
      if (this.getEmailFooter.split('').filter(el => el === '@').length !== 1 ||
        this.getEmailFooter.split('').findIndex(el => el === '@') === 0) {
        this.testEmail = false;
        console.log('ERRRORRRR')
      }
      console.log(this.getEmailFooter.split('').filter(el => el === '@'))
    },
    testing() {
      if (!this.testEmail) {
        console.log('blabla')
        this.$set(this.saveEmail(''));
      }
    }
  },
 
  watch: {
    email(val) {
      console.log("-------------",val);
    },
    
  }
}
</script>

<style lang='scss' scoped>
.wrapper-subscribe {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 305px;
  background-color: #CDEAE1;
  box-shadow: 0px 4px 16px rgba(17, 34, 17, 0.05);
  border-radius: 20px;
  padding: 24px 24px 0 24px;
}

.subscribe-subtitle {
  margin-top: 24px;
}


.image-subscribe {
  width: 50%;
  text-align: end;

  img {
    width: 400px;
    height: 100%;
    object-fit: contain;
  }
}

.subscribe-description {
  margin-top: 8px;
  margin-bottom: 16px;
}

.wrapper-input {
  width: calc(100% - 16px);

}

.input-btn {
  background: var(--main-color-font);
  border-radius: 4px;
  color: #fff;
  font-family: 'Montserrat';
  border: none;
  padding: 0 16px;
}
</style>