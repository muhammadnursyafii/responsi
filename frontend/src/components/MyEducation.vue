Code snippet
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'
const educationHistory = ref([])
onMounted(async () => {
  try {
    const response = await axios.get('/api/education')
    educationHistory.value = response.data
  } catch (error) {
    console.error(error)
  }
})
</script>
<template>
  <section id="pendidikan" class="py-20 min-h-screen bg-white">
    <div class="container min-h-screen max-w-screen px-40 py-20 overflow-hidden">
      <SectionTitle title="Riwayat Pendidikan" data-aos="fade-up"/>
      <div class="relative">
        <div class="absolute h-full border-r-2 border-white" style="left: 50%" data-aos="fade-up"></div>
        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="mb-8 flex justify-between items-center w-full"
        >
          <div v-if="index % 2 === 0" class="w-full flex">
            <div class="kiri w-1/2 px-12 py-10 text-right" data-aos="fade-right">
              <p class="font-semibold text-black">{{ edu.period }}</p>
              <h3 class="text-3xl font-bold text-white">{{ edu.institution }}</h3>
              <p class="text-gray-100">{{ edu.major }}</p>
            </div>
            <div class="w-1/2 flex justify-start items-center">
              <div class="bul w-4 h-4 rounded-full z 10" data-aos="fade-in"></div>
            </div>
          </div>
          <div v-else class="w-full flex">
            <div class="w-1/2 flex justify-end items-center ">
              <div class="bul2 w-4 h-4 rounded-full z 10" data-aos="fade-in"></div>
            </div>
            <div class="kanan py-10 px-12 w-1/2 pl-8 text-left " data-aos="fade-left">
              <p class="font-semibold text-black">{{ edu.period }}</p>
              <h3 class="text-3xl font-bold text-white">{{ edu.institution }}</h3>
              <p class="text-gray-100">{{ edu.major }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#pendidikan {
  background-image: url('../assets/background/bg3.jpg');
  background-size: cover;
}

.kiri {
  background-color: rgb(240, 70, 2);
  border-radius: 15px;
  max-width:500px ;
 
  margin-right: 102px;
  
}
.kanan {
  background-color: rgb(240, 70, 2);
  border-radius: 15px;
  max-width:500px ;
  margin-left: 85px;


}

.bul {
  background-color:rgb(240, 70, 2) ;
}

.bul2 {
  background-color:rgb(240, 70, 2) ; 
}
</style>
