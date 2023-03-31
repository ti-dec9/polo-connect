<template>
  <div class="wrapper">
    <SoundBeep />
    <TopBar />
    <Header />
    <About />
    <Commercial />
    <Experience />
    <Gallery />
    <Poloconnect />
    <Diferentials />
    <Localization />
    <Interest />
  </div>
</template>

<script>
import SoundBeep from '../components/SoundBeep.vue';
import TopBar from '../components/TopBar.vue';
import Header from '../components/Header.vue';
import About from '../components/About.vue';
import Commercial from '../components/Commercial.vue';
import Experience from '../components/Experience.vue';
import Gallery from '../components/Gallery.vue';
import Poloconnect from '../components/Poloconnect.vue';
import Diferentials from '../components/Diferentials.vue';
import Localization from '../components/Localization.vue';
import Interest from '../components/Interest.vue';

export default {
  name: "IndexPage",
  components: {
    SoundBeep,
    TopBar,
    Header,
    About,
    Commercial,
    Experience,
    Gallery,
    Poloconnect,
    Diferentials,
    Localization,
    Interest
  },
  head() {
    return {
      title: "Polo Connect",
      /*link: [
         {
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
          rel: "stylesheet",
        },
      ],
      src: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
          integrity: "sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4",
          crossorigin: "anonymous"
        }
      ],*/
    }
  }
}
</script>
