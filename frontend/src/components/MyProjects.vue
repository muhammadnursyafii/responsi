Code snippet
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'
const projects = ref([])
onMounted(async () => {
  try {
    const response = await axios.get('/api/projects')
    projects.value = response.data
  } catch (error) {
    console.error(error)
  }
})
</script>
<template>
  <section id="proyek" class="min-h-screen py-20 bg-white">
    <div class="container min-h-screen max-w-screen px-40 py-20 overflow-hidden">
      <SectionTitle title="Proyek Unggulan" data-aos="fade-up"/>
      <div class="grid lg:grid-cols-2 md:grid-cols-2 gap-12">
        <div
          v-for="project in projects"
          :key="project.title"
          class="card rounded-lg shadow-lg overflow-hidden"
          data-aos="zoom-in-up"
        >
          <img :src="project.image" alt="Gambar Proyek" class="w-full h-56 object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-bold text-black mb-2">{{ project.title }}</h3>
            <p class="text-white">{{ project.description }}</p>
            <div class="mb-4 mt-3">
              <span
                v-for="t in project.tech"
                :key="t"
                class="inline-block bg-gray-500 text-white text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full"
                >{{ t }}</span
              >
            </div>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-black font semibold hover:underline"
              >Lihat Detail &rarr;</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
#proyek {
  background-image:url('../assets/background/bg5.jpg'); 
  background-size: cover;
}

.card {
  background-color:rgb(240, 70, 2) ;
}
</style>
