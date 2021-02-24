<template>
  <div>
    <div>
      <navbar />
    </div>
    <div class="container mt-4">
      <Nuxt />
    </div>
  </div>
</template>
<script>
import navbar from "../components/Navbar";
export default {
  components: {
    navbar,
  },
};
</script>
