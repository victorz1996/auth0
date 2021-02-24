<template>
  <div>
    <h4>Protegido</h4>
    <b-row class="mt-4">
      <b-col sm="2">
        <b-img class="img-fluid" :src="$auth | image"></b-img>
      </b-col>
      <b-col sm="10">
        <h4>{{ $auth.user ? $auth.user.name : "" }}</h4>
        <p>{{ $auth.user ? $auth.user.email : "" }}</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  filters: {
    image(value) {
      if (value.user) {
        return value.user.picture;
      } else {
        return "";
      }
    },
  },
  beforeMount() {
    // this.validatePermisos();
  },
  mounted() {},
  methods: {
    validatePermisos() {
      if (!this.$auth.isAuthenticate && !this.$auth.user) {
        this.$router.push("/");
      }
    },
  },
};
</script>