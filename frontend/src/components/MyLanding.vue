<script setup>
import lottie from 'lottie-web'
import animationData from '../assets/lottie/welcome.json'
import { onMounted } from 'vue'

onMounted(() => {
  lottie.loadAnimation({
    container: document.getElementById('lottie-container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: animationData,
  })
})
</script>
<template>
  <section class="landing">
    <div class="container min-h-screen flex justify-center items-center">
        <div id="lottie-container" style="max-width: 750px" class="pb-12"></div>
    </div>
  </section>
</template>

<style scoped>
.landing {
  background-image: url('../assets/background/bg7.jpg');
  background-size: cover;
}
.container {
    margin-top: -15px;
}
</style>
