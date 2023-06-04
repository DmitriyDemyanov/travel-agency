<template>
  <div>
    <h1>Hello World</h1>
    <MainButtonComponent title='hello' color='light' type='bordered'>
      <template #prepend>
        <img src="@/assets/image/icons/icon-send.svg" alt="Send">
      </template>

    </MainButtonComponent>
    <div class="wrapper-test">
      <MainInputComponent>
        <template #append>
          <img src="@/assets/image/icons/arrows-right&left.svg" alt="arrows">
        </template>
      </MainInputComponent>
    </div>

  </div>
</template>

<script>
import MainButtonComponent from '@/components/MainButtonComponent.vue';
import MainInputComponent from '@/components/MainInputComponent';
export default {
  name: 'HomePage',
  components: {
    MainButtonComponent,
    MainInputComponent,
  }
}
</script>

<style lang='scss' scoped>
.wrapper-test {
  margin: 30px;
  width: 30%;
}
</style>