<template>
  <section class="review">
    <div class="review__frame"></div>
    <div class="review__title secondary-font fz-24">{{ card.title }}
    </div>
    <div class="review__subtitle fz-14 font-color-5"> {{ card.subtitle }}</div>
    <a :href="card.link" target="_blank" class="review__more secondary-font fz-16">View more</a>
    <div class="review__stars d-flex">
      <div class="item__star" v-for="ind in Number(card.rating) " :key='ind'><img
          src="@/assets/image/icons/yellow-star.svg" alt="icon"></div>
    </div>
    <div class="review__user_name secondary-font fz-14">{{ card.userName }}</div>
    <div class="review__user_description fz-12 font-color-5">{{ card.userDescription }}</div>


    <div>
      <img :src="require(`@/assets/image/icons/${card.icon}.svg`)" alt="">
      <span class="icon-text secondary-font fz-12 font-color-4">{{ card.iconName }}</span>
    </div>

    <div class="review__photo">
      <a :href="card.link" target="_blank"><img :src="require(`@/assets/image/photo/${card.image}.png`)" alt="photo"></a>
    </div>

  </section>
</template>

<script>
export default {
  name: 'ReviewItemComponent',
  props: {
    card: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style lang='scss' scoped>
.review {
  position: relative;
  width: 425px;
  height: 584px;
  margin-right: 50px;
  padding: 24px;
  background: #FFFFFF;
  box-shadow: 2px 4px 16px rgba(17, 34, 17, 0.1);
  border-radius: 20px;

  &__frame {
    position: absolute;
    width: 425px;
    height: 586px;
    left: 25px;
    top: 22px;
    background: rgba(141, 211, 187, 0.4);
    border-radius: 20px;
    z-index: -1;
  }

  &__title {
    margin-bottom: 26px;
  }

  &__subtitle {
    margin-bottom: 12px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__more {
    display: block;
    text-align: end;
    margin-bottom: 18px;
  }

  &__stars {
    margin-bottom: 22px;
  }

  .item__star {
    margin-right: 14px;
  }

  &__user_description {
    margin-top: 4px;
    margin-bottom: 14px;
  }

  .icon-text {
    margin-left: 13px;
  }

  &__photo {
    margin-top: 44px;
    transition: all 0.4s;

    img {
      width: 377px;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
    }

    :hover {
      scale: 1.1;

    }
  }
}
</style>