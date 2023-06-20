<template>
  <section>
    <form class="form">

      <MainInputComponent placeholder='Select Destination' labelText='Enter Destination' v-model="order.destination">
        <template #prepend>
          <img src="@/assets/image/icons/icon-bed.svg" alt="icon">
        </template>
      </MainInputComponent>

      <MainInputComponent placeholder='Fri 12/2' labelText='Check In' v-model="order.checkIn">
        <template #append>
          <img src="@/assets/image/icons/icon-calendar.svg" alt="icon">
        </template>
      </MainInputComponent>

      <MainInputComponent placeholder='Sun 12/4' labelText='Check Out' v-model="order.checkOut">
        <template #append>
          <img src="@/assets/image/icons/icon-calendar.svg" alt="icon">
        </template>


      </MainInputComponent>



      <MainInputComponent placeholder='1 room, 2 guests' labelText='Rooms & Guests' v-model="order.roomsAndGuests">
        <template #prepend>
          <img src="@/assets/image/icons/icon-user.svg" alt="icon">
        </template>
        <template #append>
          <img src="@/assets/image/icons/chevron-down.svg" alt="icon">
        </template>
      </MainInputComponent>
    </form>

    <div class="form__buttons">

      <MainButtonComponent title='Add Promo Code' type='reverse-transparent'>
        <template #prepend>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 3.5V12.5V3.5ZM12.5 8H3.5H12.5Z" fill="#112211" />
            <path d="M8 3.5V12.5M12.5 8H3.5" stroke="#112211" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </template>
      </MainButtonComponent>

      <MainButtonComponent title='Show Places'>
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

export default {
  name: 'FormHotelsComponent',
  components: {
    MainInputComponent,
    MainButtonComponent,
  },
  data() {
    return {
      order: {
        destination: '',
        checkIn: '',
        checkOut: '',
        roomsAndGuests: '',
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.form {
  margin-top: 33px;
  display: grid;
  grid-template-columns: 1.73fr 1fr 1fr 1fr;
  column-gap: 16px;

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
