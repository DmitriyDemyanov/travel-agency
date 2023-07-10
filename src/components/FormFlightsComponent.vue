<template>
  <section>
    <form class="form">

      <MainInputComponent placeholder='Select Places' labelText='From - To' v-model="order.fromTo">
        <template #append>
          <img src="@/assets/image/icons/arrows-right-left.svg" alt="icon">
        </template>
      </MainInputComponent>

      <MainInputComponent placeholder='Return' labelText='Trip' v-model="order.trip">
        <template #append>
          <img src="@/assets/image/icons/chevron-down.svg" alt="icon">
        </template>
      </MainInputComponent>

      <MainInputComponent placeholder='Select Dates' labelText='Depart - Return' v-model="order.departReturn" />

      <MainInputComponent placeholder='Seats and Class' labelText='Passenger - Class' v-model="order.passengerClass" />
    </form>


    <div class="form__buttons">
      <ErrorMessageComponent v-show="getErrorMessage !== ''" :text='`Invalid: ${getErrorMessage}`' />

      <MainButtonComponent title='Add Promo Code' type='reverse-transparent'>
        <template #prepend>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 3.5V12.5V3.5ZM12.5 8H3.5H12.5Z" fill="#112211" />
            <path d="M8 3.5V12.5M12.5 8H3.5" stroke="#112211" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </template>
      </MainButtonComponent>



      <MainButtonComponent title='Show Flights' @click='sendFormTest'>
        <template #prepend>
          <img src="@/assets/image/icons/paper-plane.svg" alt="icon">
        </template>
      </MainButtonComponent>

    </div>
  </section>
</template>
<script>
import MainInputComponent from "@/components/MainInputComponent";
import MainButtonComponent from "@/components/MainButtonComponent";
import ErrorMessageComponent from "@/components/ErrorMessageComponent";

import { required,numeric,alpha,alphaNum } from 'vuelidate/lib/validators'
import { mapActions,mapGetters } from 'vuex';

export default {
  name: 'FormFlightsComponent',
  components: {
    MainInputComponent,
    MainButtonComponent,
    ErrorMessageComponent,
  },

  data() {
    return {
      order: {
        fromTo: '',
        trip: '',
        departReturn: '',
        passengerClass: '',
      }
    }
  },
  computed: {
    ...mapGetters('globalContent',['getErrorMessage'])
  },
  validations: {
    order: {
      fromTo: {
        required,
        alpha,

      },
      trip: {
        required,
        numeric,
      },
      departReturn: {
        required,
        numeric,
      },
      passengerClass: {
        alphaNum,
        required,
      }
    },

  },
  methods: {
    ...mapActions('globalContent',['saveSendFormTest','saveErrorMessage']),

    sendFormTest() {
      console.log('test==========',!this.$v.order.$invalid);
      if (!this.$v.order.$invalid) {
        this.saveSendFormTest(this.order);
        this.saveErrorMessage('');
        console.log('if access, clean input, ????')
      }
      else {
        for (let i = 0; i < Object.keys(this.order).length; i++) {
          if (this.$v.order[Object.keys(this.order)[i]].$invalid) {
            return this.saveErrorMessage(Object.keys(this.order)[i])
          }
        }
      }
    }
  },
};
</script>
<style lang="scss" scoped>
.form {
  margin-top: 33px;
  display: grid;
  grid-template-columns: 1fr 0.43fr 1fr 1fr;
  column-gap: 24px;

  &__buttons {
    display: flex;
    justify-content: right;
    margin-top: 32px;
    margin-right: 16px;

    :last-child {
      margin-left: 10px;
    }
  }
}
</style>
