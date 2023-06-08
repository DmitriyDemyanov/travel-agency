<template>
  <section class="bg-footer">
    <div class="wrapper-content container-normal">
      <div class="wrapper-icons">
        <a href="#"><img src="@/assets/image/icons/logo-dark.svg" alt="logo"></a>
        <div class="social-links">
          <div class="social-icon d-flex">
            <a :href="el.link" target="_blank" v-for="(el,ind) in getSocialMedia" :key='ind'>
              <img :src="require(`@/assets/image/icons/social-${el.icon}.svg`)" alt="icon">
            </a>

          </div>
        </div>
      </div>
      <div class="items-content">
        <div class="title-footer title-ff fz-16">Our Destinations</div>
        <div class="subtitle-footer font-color-7  fz-14" v-for="(el,ind) in getOurDestinations" :key='ind'>{{ el.title }}
        </div>

      </div>
      <div class="items-content">
        <div class="title-footer  title-ff fz-16">Our Activities</div>
        <div class="subtitle-footer font-color-7  fz-14" v-for="(el,ind) in getOurActivities" :key='ind'>{{ el.title }}
        </div>
      </div>
      <div class="items-content">
        <div class="title-footer  title-ff fz-16">Travel Blogs</div>
        <div class="subtitle-footer font-color-7  fz-14" v-for="(el,ind) in getTravelBlogs" :key='ind'>{{ el.title }}
        </div>
      </div>
      <div class="items-content">
        <div class="title-footer  title-ff fz-16">About Us</div>
        <a class="subtitle-footer font-color-7  fz-14" :href="el.link" v-for="(el,ind) in getAboutUs" :key='ind'>{{
          el.title }}</a>
      </div>
      <div class="items-content">
        <div class="title-footer  title-ff fz-16">Contact Us</div>
        <a class="subtitle-footer font-color-7  fz-14" :href="el.link" v-for="(el,ind) in getAboutUs" :key='ind'>{{
          el.title }}</a>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'FooterComponent',
  computed: {
    ...mapGetters('flight',['getSocialMedia','getAboutUs','getOurDestinations','getOurActivities','getTravelBlogs'])
  }
}
</script>

<style lang='scss' scoped>
.bg-footer {
  position: relative;
  width: 100%;
  min-height: 573px;
  background: linear-gradient(to bottom, #fff, #fff 26%, var(--brand-color) 26%, var(--brand-color) 100%);
  padding-top: 370px;
}

.wrapper-content {
  display: grid;
  grid-template-columns: 1fr 175px 175px 175px 175px 175px;
  column-gap: 24px;
}

.social-icon {
  margin-top: 20px;

  a {
    padding: 4px 6px 6px 0;
    margin-right: 6px;
  }
}

.items-content {
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: var(--main-color-font);

  }
}

.title-footer {
  margin-bottom: 16px;
}

.subtitle-footer {
  padding: 6px 0;
}
</style>