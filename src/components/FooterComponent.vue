<template>
  <section class="bg-footer">
    <div class="wrapper-content container-normal">
      <div class="wrapper-icons">
        <a href="#"><img src="@/assets/image/icons/logo-dark.svg" alt="logo"></a>
        <div class="social-links">
          <div class="social-icon d-flex">
            <a href="https://facebook.com" target="_blank"> <img src="@/assets/image/icons/social-facebook.svg"
                alt="icon"></a>
            <a href="https://twitter.com" target="_blank"> <img src="@/assets/image/icons/social-twitter.svg"
                alt="icon"></a>
            <a href="https://youtube.com" target="_blank"> <img src="@/assets/image/icons/social-youtube.svg"
                alt="icon"></a>
            <a href="https://instagram.com" target="_blank"> <img src="@/assets/image/icons/social-instagram.svg"
                alt="icon"></a>
          </div>
        </div>
      </div>
      <div class="items-content">
        <div class="title title-ff fz-16">Our Destinations</div>
        <a class="font-color-7 fz-14" href="#">Canada</a>
        <a href="#">Alaska</a>
        <a href="#">France</a>
        <a href="#">Iceland</a>
      </div>
      <div class="items-content">
        <div class="title">Our Activities</div>
        <a href="#">Canada</a>
        <a href="#">Alaska</a>
        <a href="#">France</a>
        <a href="#">Iceland</a>
      </div>
      <div class="items-content">
        <div class="title">Travel Blogs</div>
        <a href="#">Canada</a>
        <a href="#">Alaska</a>
        <a href="#">France</a>
        <a href="#">Iceland</a>
      </div>
      <div class="items-content">
        <div class="title">About Us</div>
        <a href="#">Canada</a>
        <a href="#">Alaska</a>
        <a href="#">France</a>
        <a href="#">Iceland</a>
      </div>
      <div class="items-content">
        <div class="title">Contact Us</div>
        <a href="#">Canada</a>
        <a href="#">Alaska</a>
        <a href="#">France</a>
        <a href="#">Iceland</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FooterComponent',

}
</script>

<style lang='scss' scoped>
.bg-footer {
  position: relative;
  width: 100%;
  height: 573px;
  background: linear-gradient(to bottom, #fff, #fff 26%, var(--brand-color) 26%, var(--brand-color) 100%);
  padding-top: 370px;
}

.wrapper-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
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
</style>