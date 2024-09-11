<template>
  <div class="sidebar" id="sidebar">
    <div class="sidebar-left slimscroll">
      <div
        class="nav flex-column nav-pills"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <router-link
          class="nav-link menu"
          to="/home"
          title="Accueil"
          role="tab"
          aria-controls="v-pills-dashboard"
          aria-selected="false"
          :class="{ active: $route.path === '/home' }"
        >
          <span class="material-icons-outlined"> home </span>
        </router-link>

        <router-link
          to="/listproduct"
          class="nav-link menu"
          title="Produits"
          role="tab"
          aria-controls="v-pills-apps"
          aria-selected="false"
          :class="{ active: $route.path === '/listproduct' }"
          :replace="true"
        >
          <span class="material-icons-outlined"> dashboard </span>
        </router-link>

        <router-link
          to="/listsupplier"
          class="nav-link menu"
          title="Fournisseur"
          role="tab"
          aria-controls="v-pills-apps"
          aria-selected="false"
          :class="{ active: $route.path === '/listsupplier' }"
          :replace="true"
        >
          <span class="material-icons-outlined"> leaderboard </span>
        </router-link>

        <router-link
          to="/listcustomer"
          class="nav-link menu"
          title="Clients"
          id="enterprise"
          role="tab"
          aria-selected="false"
          :class="{ active: $route.path === '/listcustomer' }"
          :replace="true"
        >
          <span class="material-icons-outlined"> settings </span>
        </router-link>

        <router-link
          to="/listorder"
          class="nav-link menu"
          id="module"
          title="Commandes"
          role="tab"
          aria-controls="v-pills-apps"
          aria-selected="false"
           :class="{ active: isOrderActive }"
          :replace="true"
        >
          <span class="material-icons-outlined"> attach_money </span>
        </router-link>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  computed: {
    isOrderActive() {
      return (
        this.$route.path === "/listorder" ||
        this.$route.path.startsWith("/addorder")
      );
    },
  },
};
</script>
  
  <style scoped>
/* Improved styles for the hovered class and animation */
.material-icons-outlined {
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
}

.material-icons-outlined.hovered {
  transform: scale(1.1);
  color: #007bff;
  /* Change to your preferred color */
}
</style>
  