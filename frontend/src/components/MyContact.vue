Code snippet
<script setup>
import SectionTitle from './SectionTitle.vue'
</script>
<template>
  <footer id="kontak" class="pt-20 bg-gray-800 text-white overflow-hidden">
    <div class="container mx-auto px-6 text-center">
      <SectionTitle title="Hubungi" data-aos="fade-up"/>
      <p data-aos="fade-up" class="text-xl text-white mb-8">Jangan ragu untuk terhubung atau bertanya.</p>
      <div data-aos="fade-up">

        <a
        href="mailto:emailanda@example.com"
        class="buton text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 inline-block mb-12"
        
        >
        Kirim Email
      </a>
    </div>
      <div data-aos="fade-up">

        <div class="flex justify-center space-x-6 mb-8">
          <a
          href="https://github.com/UswatunQasanah/"
          target="_blank"
          class="text-white hover:text-white transition-colors duration 300"
          >GitHub</a
          >
          <a
          href="https://www.linkedin.com/"
          target="_blank"
          class="text-white hover:text-white transition-colors duration 300"
          >LinkedIn</a
          >
          
        </div>
    </div>
    </div>
      <div class="bar w-full bg-black flex flex-row justify-center items-center">
        <p class="text-white">
          &copy; {{ new Date().getFullYear() }} Uswatun Hasanah. Dibuat dengan ❤️
        </p>
      </div>
  </footer>
</template>
<style scoped>
#kontak {
  background-image:url('../assets/background/bg4.jpg') ;
  background-size:cover ;
}

.buton {
  background-color:rgb(240, 70, 2) ;
  color:black;
  transition: all 0.6s ease ;
}

.bar {
  height: 60px;
}
.buton:hover {
  background-color: black;
  color: rgb(240, 70, 2); 
  box-shadow: 0px 6px 16px rgba(240, 69, 2, 0.354);
  transform: translateY(-4px);
}
</style>
