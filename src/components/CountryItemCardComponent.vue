<template>
  <section class="card">
    <div class="card__content d-flex align-items-end justify-content-between">
      <div>
        <div class="fz-24">London</div>
        <div class="card__subtitle fz-14">London eye adventure</div>
      </div>
      <div class="fz-24">$ 600</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CountryItemCardComponent'
}
</script>

<style lang='scss' scoped>
.card {
  padding: 0 24px 24px 24px;
  background-image: url('@/assets/image/photo/photo-countries/london.png');
  border-radius: 12px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &__subtitle {
    font-weight: 400;
  }
}
</style>