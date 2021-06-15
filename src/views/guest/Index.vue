<template>

  <Navigation2></Navigation2>

  <Hero class="py-2 px-10 mt-20 md:mt-20 lg:mt-0"></Hero>

  <div class="flex justify-between py-5 px-10 "  data-aos="zoom-in" data-aos-delay="1100" data-aos-once="true">
  
      <swiper
        :slides-per-view="1"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>
          <img src="../../../public/img/Group.svg" alt="client-logo1">
        </swiper-slide>

        <swiper-slide>
        <img src="./../../../public/img/Group2svg.svg" alt="client-logo1">
        </swiper-slide>

        <swiper-slide>
        <img src="./../../../public/img/Group3.svg" alt="client-logo1">
        </swiper-slide>

        <swiper-slide>
        <img src="./../../../public/img/Group4.svg" alt="client-logo1">
        </swiper-slide>

        <swiper-slide>
        <img src="./../../../public/img/Group4.svg" alt="client-logo1">
        </swiper-slide>
      </swiper>
  </div>

<div class="py-3 px-5 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
  <div>
    <Project></Project>
  </div>
  <div>
    <Project></Project>
  </div>
  <div>
    <Project></Project>
  </div>
  <div>
    <Project></Project>
  </div>
  <div>
    <Project></Project>
  </div>
      <!-- <swiper
        :slides-per-view="2"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>
          <div class="">
            <Project></Project>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="">
            <Project></Project>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="">
            <Project></Project>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="">
            <Project></Project>
          </div>
        </swiper-slide>

      </swiper> -->

  
</div>


  <portofolio></portofolio>
  <lainlain></lainlain>
  <Tailwindbox></Tailwindbox>
  <Menu2></Menu2>
  <Footer></Footer>



</template>

<script>
  // import Navigation from './components/Navigation.vue'
  // import Navigation2 from './components/Navigation2.vue'
  import Footer from './components/Footer.vue'
  import Navigation2 from './components/Navigation2.vue'
  import Hero from './components/Hero.vue'
  import Menu2 from './components/Menu2.vue'
  import Tailwindbox from './components/Tailwindbox.vue'
  import Lainlain from './components/Lainlain.vue'
  import Portofolio from './components/Portofolio.vue'
  import Project from './components/Project.vue'
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles
  import 'swiper/swiper.scss';

  export default {
    name: 'App',
    components: {
      Navigation2,
      Footer,
      Lainlain,
      Tailwindbox,
      Menu2,
      Hero,
      Portofolio,
      Project,
      Swiper,
      SwiperSlide,
    },
    methods: {
      onSwiper(swiper) {
        console.log(swiper);
      },
      onSlideChange() {
        // console.log('slide change');
      },
    }
  }
</script>

<style>
</style>