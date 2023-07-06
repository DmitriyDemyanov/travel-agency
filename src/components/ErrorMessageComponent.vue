<template>
  <span>
    <span class="message fz-12">{{text}}</span>
  </span>
</template>

<script>
export default {
  name: 'ErrorMessageComponent',
  props: {
    text: String
  }
}
</script>

<style lang="scss">
.message {
  position: absolute;
  bottom: -16px;
  color: #dc0000;
}
</style>
