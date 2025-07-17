Code snippet
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'
const skills = ref([])
onMounted(async () => {
  try {
    const response = await axios.get('/api/skills')
    skills.value = response.data
  } catch (error) {
    console.error(error)
  }
})
</script>
<template>
  <section id="skill" class="py-20 min-h-screen">
    <div class="container min-h-screen max-w-screen px-40 py-20 overflow-hidden">
      <SectionTitle title="Keahlian & Teknologi" data-aos="fade-up"/>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
        <div
          v-for="skill in skills"
          :key="skill.name"
          data-aos="fade-up"
          class="card p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300"
        >
          <h3 class="text-xl font-bold text-white">{{ skill.name }}</h3>
          <p class="text-black">{{ skill.level }}</p>
        </div>
      </div>
      <div class="flex justify-center mt-20">
        <p class="text-white text-center max-w-5xl">
          Selama perjalanan karier saya di dunia Informatika, saya telah mengembangkan berbagai keterampilan teknis yang mendukung setiap proyek yang saya kerjakan. Selain kemampuan teknis, saya juga memiliki keterampilan profesional yang membantu saya dalam menyelesaikan proyek secara efektif, seperti pemecahan masalah, komunikasi tim, dan manajemen waktu.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
#skill {
  background-image: url('../assets/background/bg6.jpg');
  background-size: cover;
}

.card {
  background-color:rgb(240, 70, 2) ;
}
</style>
