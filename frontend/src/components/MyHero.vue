Code snippet
<template>
  <section
    id="profil"
    class="container min-h-screen max-w-screen px-40 py-20 flex flex-col md:flex-row items-center overflow-hidden"
  >
    <div class="flex flex-row justify-beetwen min-w-full">
      <div class="md:w-1/2 mb-10 md:mb-0">
        <div>
          <h1
            class="text-5xl font-bold text-white mb-4 animate-slide-in-left"
            style="animation-delay: 200ms"
          >
            Halo, Saya <span class="name">Uswatun Hasanah</span>
          </h1>
          <p class="text-xl text-white mb-8 animate-slide-in-left" style="animation-delay: 400ms">
            Mahasiswa Teknik Informatika yang bersemangat dalam pengembangan web dan desain
            antarmuka.
          </p>
          <div class="buton py-3 px-1 rounded-lg transition-colors duration-300 inline-block mb-12" data-aos="fade-right" data-aos-duration="800">
            <a
              href="#kontak"
              class=" text- font-bold py-3 px-6"
              style="animation-delay: 600ms"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </div>
      <div class="md:w-1/2 flex justify-end animate-slide-in-right">
        <img
          src="/images/Catpp.jpg"
          alt="Foto Profil"
          class="w-80 h-80 rounded-full object-cover shadow-lg"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  background-image: url('../assets/background/bg1.jpg');
  background-size: cover;
}
.buton {
  background-color: rgb(240, 70, 2);
  color: black;
  transition: all 0.6s ease !important;
}
.buton:hover {
  background-color: black;
  color: rgb(240, 70, 2);
  box-shadow: 0px 6px 16px rgba(240, 69, 2, 0.354);
  transform: translateY(-4px) !important;
}
.name {
  color: rgb(240, 70, 2);
}
</style>
