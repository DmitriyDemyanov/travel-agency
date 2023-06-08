<template>
  <section>
    <div class="content-header">
      <div class="wrapper-header">

        <h2 class="subtitle-header fz-accent-45">Helping Others</h2>
        <h1 class="title-header">Live & Travel</h1>
        <p class="text-header fz-20">Special offers to suit your plan</p>
      </div>
    </div>
    <SiteSubscribeComponent/>
  </section>
</template>

<script>

export default {
  name: 'HomePage',
  components: {}
}
</script>

<style lang='scss' scoped>
.content-header {
  margin: 30px 30px 0 30px;
}

.wrapper-header {
  padding: 24px 32px 0 32px;
  margin-bottom: 183px;
  width: 100%;
  height: 620px;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%), url('@/assets/image/photo/bg-home-header.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 60%;
  border-radius: 24px;
  color: #fff;

}

.subtitle-header {
  margin-top: 84px;
  text-align: center;
  font-family: "TradeGothic LT Extended";
  line-height: 57px;
  font-weight: 700;
}

.title-header {
  margin-top: 4px;
  font-family: 'TradeGothic LT Extended';
  font-weight: 700;
  font-size: 80px;
  line-height: 101px;
  text-align: center;
  text-transform: uppercase;
}

.text-header {
  margin-top: 16px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
}
</style>