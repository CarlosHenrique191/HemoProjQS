<template>
  <q-page padding>
    <!-- Q-CAROUSEL-SLIDE -->
    <div>
      <div class="q-pa-md">
        <q-carousel
          animated
          v-model="slide"
          navigation
          infinite
          :autoplay="autoplay"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
          <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
          <q-carousel-slide :name="4">
            <q-video
              class="absolute-full"
              src="https://www.youtube.com/embed/kOkQ4T5WO9E"
            />
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
    <div>
      <h1>Proximo</h1>
    </div>
    <!--q-card-section-->
    <div>
      <div class="q-pa-md">
        <div class="row justify-center q-gutter-sm">
          <q-intersection
            v-for="index in 30"
            :key="index"
            class="example-item"
          >
            <q-card flat bordered class="q-ma-sm">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">
    
              <q-card-section>
                <div class="text-h6">Card #{{ index }}</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>
            </q-card>
          </q-intersection>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
export default {
   name: 'Page-2',
   setup () {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
}
</script>

<style lang="sass" scoped>
.example-item
  height: 290px
  width: 290px
</style>