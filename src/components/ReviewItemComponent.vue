<template>
  <section class="review">

    <div class="review__title secondary-font fz-24">{{ card.title }}</div>
    <div class="review__subtitle fz-14 font-color-5" :class='actionSubtitle'> {{ card.review }}</div>

    <div class="review__link secondary-font fz-16" @click='seeMore'>View more</div>


    <div class="review__stars d-flex">
      <div class="star" v-for="ind in Number(card.rating)" :key='ind'>
        <img src="@/assets/image/icons/yellow-star.svg" alt="icon">
      </div>
    </div>

    <div class="secondary-font fz-14">{{ card.user }}</div>
    <div class="review__description fz-12 font-color-5">{{ card.subject }}</div>

    <div>
      <img :src="require(`@/assets/image/icons/icon-google.svg`)" alt="icon">
      <span class="icon-text secondary-font fz-12 font-color-4">Google</span>
    </div>

    <div class="review__photo">
      <a :href="card.link" target="_blank"><img :src="card.image" alt="photo"></a>
    </div>

  </section>
</template>

<script>
export default {
  name: "ReviewItemComponent",
  data() {
    return {
      actionSubtitle: '',
    }
  },
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  methods: {
    seeMore() {
      if (this.actionSubtitle === '') {
        this.actionSubtitle = 'subtitle_action'
      }
      else if (this.actionSubtitle === 'subtitle_action') {
        this.actionSubtitle = ''
      }
    },
  },

};
</script>

<style lang='scss' scoped>
.review {
  position: relative;
  min-width: 425px;
  min-height: 584px;
  margin-right: 50px;
  padding: 24px;
  background: #FFFFFF;
  box-shadow: 2px 4px 16px rgba(17, 34, 17, 0.1), 25px 22px 0 rgba(141, 211, 187, 0.4);
  border-radius: 20px;

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

  &__link {
    display: block;
    text-align: end;
    margin-bottom: 18px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: var(--accent-color);
    }
  }

  &__stars {
    margin-bottom: 22px;
  }

  &__description {
    margin-top: 4px;
    margin-bottom: 14px;
  }

  &__photo {
    margin-top: 44px;
    width: 100%;

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
    }
  }

  .star {
    margin-right: 14px;
  }

  .icon-text {
    margin-left: 13px;
  }

  .subtitle_action {
    -webkit-line-clamp: inherit;
  }
}
</style>
