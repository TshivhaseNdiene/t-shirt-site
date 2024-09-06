<template>
  <div id="app">
    <HeaderSection />
    <RouterView /> <!-- This will display the content of the routed page -->
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue';
import FooterSection from './components/FooterSection.vue';

export default {
  components: {
    HeaderSection,
    FooterSection,
  },
};
</script>
