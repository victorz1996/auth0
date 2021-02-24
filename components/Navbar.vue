<template>
  <div>
    <div>
      <b-navbar toggleable="sm" type="dark" variant="info">
        <b-navbar-brand>Auth0</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item @click="ir('index')">Index</b-nav-item>
            <b-nav-item @click="ir('info')">Informacion</b-nav-item>
            <b-nav-item v-if="$auth.isAuthenticated" @click="ir('protegido')">Protegido</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <div class="text-right" v-if="!$auth.loading">
              <button
                type="button"
                class="btn btn-success"
                v-if="!$auth.isAuthenticated"
                @click="login"
              >
                Ingresar
              </button>
              <button
                v-if="$auth.isAuthenticated"
                type="button"
                class="btn btn-danger"
                @click="logout"
              >
                Salir
              </button>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // Log the user in
    login() {
      console.log(this.$auth);
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
    ir(donde) {
      if (donde === "index") {
        this.$router.push("/");
      }
      if (donde === "info") {
        this.$router.push("/info");
      }
      if (donde === "protegido") {
        this.$router.push("/protegido");
      }
    },
  },
};
</script>
