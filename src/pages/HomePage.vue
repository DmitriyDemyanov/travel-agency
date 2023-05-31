<template>
  <div>
    <h1>Hello World</h1>
    <MainButtonComponent title='hello' color='light' type='bordered'>
      <template #prepend>
        <img src="@/assets/image/icons/icon-send.svg" alt="Send">
      </template>

    </MainButtonComponent>
  </div>
</template>

<script>
import MainButtonComponent from '@/components/MainButtonComponent.vue';

export default {
  name: 'HomePage',
  components: {
    MainButtonComponent,
  }
}
</script>

<style lang='scss' scoped></style>