Code snippet 
<script setup> 
defineProps({ title: String }); 
</script> 
<template> 
  <div class="mb-12 text-center"> 
    <h2 class="text-4xl font-bold text-white">{{ title }}</h2> 
    <div class="line w-24 h-1 mx-auto mt-4 rounded"></div> 
  </div> 
</template>
<style scoped>
.line {
  background-color:rgb(240, 70, 2)
}
</style> 
