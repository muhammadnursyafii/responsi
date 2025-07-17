<script setup>
import Navbar from '@/components/MyNavbar.vue'
import Hero from '@/components/MyHero.vue'
import Education from '@/components/MyEducation.vue'
import Skills from '@/components/MySkills.vue'
import Projects from '@/components/MyProjects.vue'
import Contact from '@/components/MyContact.vue'
import Landing from '@/components/MyLanding.vue'
</script>
<template>
  <div>
    <Navbar />
    <main>
      <Landing />
      <Hero />
      <div><Education /></div>
      <div><Skills /></div>
      <div><Projects /></div>
      <div><Contact /></div>
    </main>
  </div>
</template>
