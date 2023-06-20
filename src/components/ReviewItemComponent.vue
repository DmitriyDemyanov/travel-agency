<template>
  <section class="review">
    <div class="review__border"></div>
    <div class="review__title secondary-font fz-24">“A real sense of community, nurtured”
    </div>
    <div class="review__subtitle fz-14 font-color-5">Really appreciate the help and support from the staff during these
      tough times. Shutout
      to Katie for helping me always, even when I was out of the country. And always available when needed.
    </div>
    <a href="" class="review__more secondary-font fz-16">View more</a>
    <div class="review__stars d-flex">
      <div class="item__star"><img src="@/assets/image/icons/yellow-star.svg" alt="icon"></div>
      <div class="item__star"><img src="@/assets/image/icons/yellow-star.svg" alt="icon"></div>
      <div class="item__star"><img src="@/assets/image/icons/yellow-star.svg" alt="icon"></div>
      <div class="item__star"><img src="@/assets/image/icons/yellow-star.svg" alt="icon"></div>
      <div class="item__star"><img src="@/assets/image/icons/yellow-star.svg" alt="icon"></div>
    </div>
    <div class="review__user_name secondary-font fz-14">Olga</div>
    <div class="review__user_description fz-12 font-color-5">Weave Studios – Kai Tak</div>


    <div>
      <img src="@/assets/image/icons/icon-google.svg" alt="">
      <span class="icon-text secondary-font fz-12 font-color-4">Google</span>
    </div>

    <div class="review__photo">
      <img src="@/assets/image/photo/review-image-1.png" alt="">
    </div>

  </section>
</template>

<script>
export default {
  name: 'ReviewItemComponent'
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

  &__border {
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

  &__image {
    justify-content: end;
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
  }
}
</style>